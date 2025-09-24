import { User } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'Julia Michael',
    age: 27,
    gender: 'Female',
    distance: 0.2,
    isVerified: true,
    isNearby: true,
    image: require('../assets/images/immm.png'),
    modalImage: require('../assets/images/immm2.png'),
    writeup:
      "Julia mentioned she'd like to play tennis after work, and you're also in kingston.",
  },
  {
    id: '2',
    name: 'Philip szul',
    age: 27,
    gender: 'Male',
    distance: 0.8,
    isVerified: true,
    isNearby: true,
    image: require('../assets/images/man2.jpg'),
    modalImage: require('../assets/images/man.jpg'),
    writeup:
      'Philip loves photography and weekend hiking. You both enjoy outdoor adventures and coffee.',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    age: 25,
    gender: 'Female',
    distance: 1.5,
    isVerified: true,
    isNearby: true,
    image: require('../assets/images/immm.png'),
    modalImage: require('../assets/images/immm2.png'),
    writeup:
      "Sarah is passionate about yoga and meditation. She's looking for someone to explore new restaurants with.",
  },
];