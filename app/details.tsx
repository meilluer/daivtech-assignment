import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useBooking } from '../context/booking';
import { DATES, SHOWTIMES } from '../data/data';

export default function MovieDetails() {
  const { movie, setBookingDetails } = useBooking();
  const [selectedDate, setSelectedDate] = useState('24');
  const [selectedTime, setSelectedTime] = useState('');
  const router = useRouter();

  const handleProceed = () => {
    if (!selectedTime) return alert("Please select a showtime");
    setBookingDetails({ date: selectedDate, time: selectedTime, seats: [] });
    router.push('/selection');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{movie?.title || "Movie Details"}</Text>
      
      <Text style={styles.sectionTitle}>Select Date</Text>
      <View style={styles.row}>
        {DATES.map(item => (
          <TouchableOpacity 
            key={item.date} 
            style={[styles.dateBox, selectedDate === item.date && styles.selectedBox]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text>{item.day}</Text>
            <Text style={{fontWeight: 'bold'}}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Available Showtimes</Text>
      <View style={styles.timeGrid}>
        {SHOWTIMES.map(time => (
          <TouchableOpacity 
            key={time} 
            style={[styles.timeBox, selectedTime === time && styles.selectedBox]}
            onPress={() => setSelectedTime(time)}
          >
            <Text>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleProceed}>
        <Text style={styles.btnText}>Select Seats</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  sectionTitle: { fontSize: 16, marginVertical: 10, fontWeight: '500' },
  row: { flexDirection: 'row', justifyContent: 'space-around' },
  dateBox: { padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, alignItems: 'center' },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  timeBox: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, width: '30%', alignItems: 'center' },
  selectedBox: { backgroundColor: '#FF4444', borderColor: '#FF4444' },
  btn: { backgroundColor: '#E33', padding: 15, borderRadius: 30, marginTop: 30, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});