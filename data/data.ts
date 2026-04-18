export const MOVIES = [
  { id: '1', 
    title: 'Neon Horizon: Part II', 
    genre: 'Sci-Fi Thriller', 
    rating: '4.9', 
    time: '2h 45m', 
    category: 'IMAX',
    poster: require('../assets/images/Neon.jpg'),
  },

  { id: '2', 
    title: 'Midnight In Paris', 
    genre: 'Romance Drama', 
    rating: '4.7', 
    time: '1h 55m', 
    category: 'All',
     poster: require('../assets/images/paris.webp'),
   },

  { id: '3', 
    title: 'The Silent Engine', 
    genre: 'Action Adventure', 
    rating: '4.5', 
    time: '2h 10m', 
    category: 'Premiere',
     poster: require('../assets/images/JODHPUR.jpg'),
   },
];


export const cities = [
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

export const moreCities = [
  { id: '1', name: 'Jodhpur' },
  { id: '2', name: 'Jaipur' },
  { id: '3', name: 'Delhi NCR' },
];


export const SHOWTIMES = ["10:00 AM", "01:00 PM", "03:30 PM", "06:00 PM", "08:45 PM"];
export const DATES = [
  {day: 'MON', date:'22'},
  {day: 'TUE', date: '23'},
  {day: 'WED', date: '24'},
  {day: 'THU', date: '25'},
  {day: 'FRI', date: '26'},
  {day: 'SAT', date: '27'},
];