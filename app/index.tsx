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
const cities = [
  {
    id: '1',
    name: 'Chennai',
    region: 'South India',
    image: require('../assets/images/chennai.jpg'),
  },
  {
    id: '2',
    name: 'Bangalore',
    region: 'Silicon Valley',
    image: require('../assets/images/banglore.jpg'),
  },
  {
    id: '3',
    name: 'Hyderabad',
    region: 'Cyber Pearls',
    image: require('../assets/images/hydrabad.jpg'),
  },
];


const moreCities = [
  { id: '1', name: 'Jodhpur' },
  { id: '2', name: 'Jaipur' },
  { id: '3', name: 'Delhi NCR' },
];

export default function CitySelection() {
  const router = useRouter();
  const { setCity } = useBooking();

  const handleSelect = (cityName: string) => {
    setCity(cityName);
    router.push('/movie');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8EAEA' }}>
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

        <FlatList
          data={cities}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <CityCard
              name={item.name}
              region={item.region}
              image={item.image}
              onPress={() => handleSelect(item.name)}

            />
          )}
ListFooterComponent={
    <View style={{ marginTop: 30 }}>
      
      
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#5A2D2D',
        }}
      >
        More Cities
      </Text>
      {moreCities.map((city) => (
        <TouchableOpacity
          key={city.id}
          onPress={() => handleSelect(city.name)}
          style={{
            paddingVertical: 12,
            borderBottomWidth: 0.5,
            borderColor: '#ddd',
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
      </View>
    </SafeAreaView>
  );
}