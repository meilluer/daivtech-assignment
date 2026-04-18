import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface MovieCardProps {
  movie: any;
  onPress: () => void;
}

const MovieCard = ({ movie, onPress }: MovieCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
  <Image
  source={movie.poster}
  style={styles.poster}
  resizeMode="cover"/>
      <View style={styles.info}>
        <Text style={styles.genre}>{movie.genre.toUpperCase()}</Text>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.meta}>
           <Text style={styles.metaText}>🕒 {movie.time}</Text>
           <Text style={styles.metaText}>⭐ {movie.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
  
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  poster: {
    width: 80,
    height: 110,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  genre: {
    fontSize: 10,
    color: '#999',
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  meta: {
    flexDirection: 'row',
    gap: 15,
  },
  metaText: {
    fontSize: 12,
    color: '#666',
  },
});

export default MovieCard;