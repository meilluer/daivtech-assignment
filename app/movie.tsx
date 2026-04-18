import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MovieCard from '../components/moviecard';
import { useBooking } from '../context/booking';
import { MOVIES } from '../data/data';

export default function MovieListing() {
  const [filter, setFilter] = useState('All');
  const { setMovie } = useBooking();
  const router = useRouter();


  const filteredMovies = filter === 'All' 
    ? MOVIES 
    : MOVIES.filter(m => m.category === filter);

  const handleMoviePress = (movie: any) => {
    setMovie(movie);
    router.push('/details');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Showing</Text>
      
      <View style={styles.tabContainer}>
        {['All', 'IMAX', 'Premiere', 'Indie'].map(tab => (
          <TouchableOpacity key={tab} onPress={() => setFilter(tab)}>
            <Text style={[styles.tabText, filter === tab && styles.activeTab]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard movie={item} onPress={() => handleMoviePress(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF5F5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  tabText: { padding: 8, color: 'gray' },
  activeTab: { color: 'red', fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: 'red' },
});