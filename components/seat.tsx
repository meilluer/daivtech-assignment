import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface SeatProps {
  id: string;
  status: 'available' | 'booked' | 'selected';
  onPress: (id: string) => void;
}

const Seat = ({ id, status, onPress }: SeatProps) => {
  // Determine color based on status
  const getBackgroundColor = () => {
    if (status === 'selected') return '#ff4444'; // Red
    if (status === 'booked') return '#e0e0e0';   // Grey
    return '#ffdada';                            // Light Pink
  };

  return (
    <TouchableOpacity
      disabled={status === 'booked'}
      style={[
        styles.seat,
        { backgroundColor: getBackgroundColor() }
      ]}
      onPress={() => onPress(id)}
    />
  );
};

const styles = StyleSheet.create({
  seat: {
    width: 35,
    height: 35,
    margin: 6,
    borderRadius: 8,
  },
});

export default Seat;