import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import CityCard from '../components/citycard';
import { useBooking } from '../context/booking';

const CITY_DATA = [
  { id: '1', name: 'Chennai', region: 'South India' },
  { id: '2', name: 'Bengaluru', region: 'South India' },
  { id: '3', name: 'Hyderabad', region: 'South India' },
  { id: '4', name: 'Mumbai', region: 'West India' },
  { id: '5', name: 'Delhi', region: 'North India' },
];

export default function CitySelection() {
  const router = useRouter();
  const { setCity } = useBooking();

 
  const handleCityPick = (cityName: string) => {
    setCity(cityName);

    router.push('/movie');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.brandName}>CineCurator</Text>
          <Text style={styles.subText}>Pick a city to see what's playing</Text>
        </View>

        <FlatList
          data={CITY_DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CityCard 
              name={item.name} 
              region={item.region} 
              onPress={() => handleCityPick(item.name)} 
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF5F5', // Matches the light pink theme in mockup
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerSection: {
    marginTop: 40,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 18,
    color: '#666',
  },
  brandName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E33', // Brand red color
  },
  subText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  listContent: {
    paddingBottom: 20,
  },
});