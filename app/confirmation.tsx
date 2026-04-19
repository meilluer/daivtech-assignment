import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useBooking } from '../context/booking';

export default function Confirmation() {
  const { movie, bookingDetails, city } = useBooking();
  const router = useRouter();
const bookingId = `CNM-${Math.floor(Math.random() * 100000)}`;
  return (
    <View style={styles.container}>
      <View style={styles.successCircle}>
        <Text style={{color: 'white', fontSize: 30}}>✓</Text>
      </View>
      <Text style={styles.confirmText}>Booking Confirmed!</Text>
      
      <View style={styles.ticketCard}>
        <Text style={styles.movieName}>{movie?.title}</Text>
        <Text>{city} • Grand Cineplex</Text>
        <View style={styles.divider} />
        <Text>Date: Friday, {bookingDetails.date} Oct</Text>
        <Text>Time: {bookingDetails.time}</Text>
        <Text>Seats: {bookingDetails.seats.join(', ')}</Text>
       <Text style={styles.bookingId}> ID: #{bookingId}
       </Text>
      </View>

      <TouchableOpacity style={styles.homeBtn} onPress={() => router.replace('/')}>
        <Text style={{color: 'white'}}>Done</Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
  <QRCode value={bookingId} size={140} />
  <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
    Scan at entry
  </Text>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF5F5' },
  successCircle: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#4CAF50', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  confirmText: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  ticketCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, width: '85%', elevation: 3 },
  movieName: { fontSize: 20, fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 15 },
  bookingId: { marginTop: 15, color: 'gray', fontSize: 12 },
  homeBtn: { marginTop: 30, backgroundColor: 'red', paddingHorizontal: 40, paddingVertical: 12, borderRadius: 25 }
});