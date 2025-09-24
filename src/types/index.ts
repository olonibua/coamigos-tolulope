export interface User {
  id: string;
  name: string;
  age: number;
  gender: string;
  photos?: string[];
  distance?: number;
  isVerified: boolean;
  isNearby: boolean;
  interests?: string[];
  bio?: string;
  image: any;
  modalImage: any;
  writeup: string;
}

export interface Profile extends User {
  email: string;
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  user: Profile | null;
  token: string | null;
}

export interface Connection {
  id: string;
  user: User;
  matchedAt: Date;
  lastMessage?: string;
  lastMessageAt?: Date;
}

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Main: undefined;
  Profile: { userId: string };
  Chat: { connectionId: string };
  Questionnaire: undefined;
};

export type TabParamList = {
  Intent: undefined;
  Chat: undefined;
  Profile: undefined;
};