import { useRouter } from 'expo-router';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import CityCard from '../components/citycard';
import { useBooking } from '../context/booking';
import { cities, moreCities } from '../data/data';

export default function CitySelection() {
  const router = useRouter();
  const { setCity } = useBooking();

  const handleSelect = (cityName: string) => {
    setCity(cityName);
    router.push('/movie');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8EAEA' }}>
  <FlatList
    data={cities}
    keyExtractor={(item) => item.id}

    ListHeaderComponent={
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#5A2D2D' }}>
          Select City
        </Text>

        <Text style={{ color: '#8B5E5E', marginTop: 5 }}>
          Choose your location to see movies playing near you.
        </Text>

        <TextInput
          placeholder="Search for your city..."
          placeholderTextColor="#999"
          style={{
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 12,
            marginTop: 15,
          }}
        />
      </View>
    }

    contentContainerStyle={{
      paddingBottom: 40,
    }}

    renderItem={({ item }) => (
      <View style={{ paddingHorizontal: 20 }}>
        <CityCard
          name={item.name}
          region={item.region}
          image={item.image}
          onPress={() => handleSelect(item.name)}
        />
      </View>
    )}

    ListFooterComponent={
      <View style={{ padding: 20, marginTop: 20 }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#5A2D2D'
        }}>
          More Cities
        </Text>

        {moreCities.map((city) => (
          <TouchableOpacity
            key={city.id}
            onPress={() => handleSelect(city.name)}
            style={{
              paddingVertical: 12,
              borderBottomWidth: 0.5,
              borderColor: '#ddd'
            }}
          >
            <Text style={{ fontSize: 16, color: '#333' }}>
              {city.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    }
  />
</SafeAreaView>
  );
}
