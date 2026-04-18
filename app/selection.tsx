import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useBooking } from '../context/booking';

export default function SeatSelection() {
  const { bookingDetails, setBookingDetails } = useBooking();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const router = useRouter();

  const allSeats = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

  const takenSeats = useMemo(() => {
    return allSeats.filter(() => Math.random() < 0.3);
  }, []);

  const pricePerSeat = 16.0;

  const toggleSeat = (id: string) => {
    if (takenSeats.includes(id)) return;

    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== id));
    } else {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  const handleConfirm = () => {
    if (selectedSeats.length === 0) return alert("Please select at least one seat");
    setBookingDetails({ ...bookingDetails, seats: selectedSeats });
    router.push('/confirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Seats</Text>

      <View style={styles.seatGrid}>
        {allSeats.map(id => {
          const isTaken = takenSeats.includes(id);
          const isSelected = selectedSeats.includes(id);

          return (
            <TouchableOpacity 
              key={id} 
              disabled={isTaken}
              style={[
                styles.seat, 
                isSelected && styles.selectedSeat,
                isTaken && styles.takenSeat
              ]}
              onPress={() => toggleSeat(id)}
            >
              <Text style={{ color: isSelected || isTaken ? 'white' : 'black' }}>
                {id}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#ccc' }]} />
          <Text>Available</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#444' }]} />
          <Text>Taken</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: 'red' }]} />
          <Text>Selected</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.priceText}>
          Total Price: ${selectedSeats.length * pricePerSeat}
        </Text>
        <TouchableOpacity style={styles.btn} onPress={handleConfirm}>
          <Text style={styles.btnText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#FFF5F5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  seatGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 15, marginTop: 40 },
  seat: { width: 50, height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  selectedSeat: { backgroundColor: 'red', borderColor: 'red' },
  takenSeat: { backgroundColor: '#444', borderColor: '#444' },
  legend: { flexDirection: 'row', marginTop: 30, gap: 20 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  legendDot: { width: 12, height: 12, borderRadius: 6 },
  footer: { position: 'absolute', bottom: 40, width: '100%', alignItems: 'center' },
  priceText: { fontSize: 18, marginBottom: 15 },
  btn: { backgroundColor: 'red', paddingHorizontal: 50, paddingVertical: 15, borderRadius: 30 },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});
