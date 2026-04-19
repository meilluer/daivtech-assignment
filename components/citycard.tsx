import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface CityCardProps {
  name: string;
  region: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const CityCard = ({ name, region, image, onPress }: CityCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageBorder}
        resizeMode="cover" 
      >
       
        <View style={styles.overlay} />

        {/* 🔤 content */}
        <View style={styles.content}>
          <Text style={styles.regionText}>{region.toUpperCase()}</Text>
          <Text style={styles.cityName}>{name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
     width: '100%',
    height: 120, 
    borderRadius: 20,
    marginVertical: 8,
    overflow: 'hidden',
  },

  image: {
     width: '100%',
     height: '100%',
    flex: 1, 
    justifyContent: 'center',
  },

  imageBorder: {
    borderRadius: 20,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 120, 120, 0.55)', 
  },

  content: {
    paddingHorizontal: 20,
  },

  regionText: {
    fontSize: 12,
    color: '#fff',
    letterSpacing: 1,
    marginBottom: 4,
  },

  cityName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CityCard;