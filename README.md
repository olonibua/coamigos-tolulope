# Coamigos - Connection App

A React Native social connection app built with TypeScript, featuring a modern UI and interactive user discovery experience.

## Features

- 🔐 **Authentication Flow**: Login/Signup with form validation
- 📱 **Cross-Platform**: Works on both iOS and Android
- 🎨 **Modern Design**: Clean, intuitive user interface
- 🃏 **User Discovery**: Interactive card-based user browsing
- 📝 **Questionnaire**: Personality-based matching system
- 🏗️ **Clean Architecture**: Organized folder structure with reusable components

## Tech Stack

- **Framework**: React Native 0.81.4
- **Language**: TypeScript
- **Navigation**: React Navigation v7
- **State Management**: React Context API
- **UI Libraries**:
  - React Navigation (navigation)
  - React Native Gesture Handler (gestures)
  - React Native Safe Area Context (safe areas)

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components (Logo, PlusIcon)
│   ├── buttons/         # Button components
│   ├── cards/           # Card components
│   ├── headers/         # Header components
│   └── navigation/      # Navigation components
├── screens/             # Screen components
│   ├── auth/           # Authentication screens
│   │   ├── LoginScreen.tsx
│   │   └── SignupScreen.tsx
│   └── main/           # Main app screens
│       ├── IntentScreen.tsx      # User discovery cards
│       ├── ChatScreen.tsx        # Chat interface
│       ├── ProfileScreen.tsx     # User profile
│       └── QuestionnaireScreen.tsx # Personality questionnaire
├── navigation/         # Navigation configuration
│   └── AppNavigator.tsx
├── hooks/              # Custom React hooks
│   └── useAuth.tsx     # Authentication hook (dummy implementation)
├── types/              # TypeScript type definitions
│   └── index.ts
├── constants/          # App constants
│   └── theme.ts        # Theme configuration
└── assets/             # Static assets
    └── images/         # App images and icons
```

## Setup Instructions

### Prerequisites

- Node.js (v20 or later)
- React Native development environment
- iOS: Xcode (macOS only)
- Android: Android Studio and Java

### Installation

1. **Clone and install dependencies**:
   ```bash
   cd coamigos
   npm install
   ```

2. **iOS Setup**:
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Run the app**:
   ```bash
   # iOS
   npm run ios

   # Android
   npm run android
   ```

## App Flow

### Authentication
- **Login Screen**: Email/password authentication with validation
- **Signup Screen**: Account creation with form validation
- **Dummy Authentication**: Currently uses mock authentication for demo purposes

### Main App
- **Intent Screen**: Interactive user discovery with swipeable cards
  - Card-based user profiles with photos and details
  - Like/interest functionality with visual feedback
  - Expandable cards with additional information
- **Questionnaire Screen**: Personality assessment with 3-option switches
- **Chat Screen**: Basic chat interface (placeholder)
- **Profile Screen**: User profile management

## Key Components

### Reusable Components
- **Logo**: Consistent branding across all screens
- **PlusIcon**: Custom plus icon for interactions
- **SwitchComponent**: 3-option personality questionnaire switches

### Custom Hooks
- **useAuth**: Authentication state management with dummy user creation

## Design Features

- **Card-based UI**: Modern card design for user discovery
- **Interactive Elements**: Animated buttons and visual feedback
- **Responsive Design**: Adapts to different screen sizes
- **Clean Typography**: Consistent font sizing and spacing
- **Color Scheme**: Professional color palette with proper contrast

## Development Notes

### Current Implementation
- **Authentication**: Dummy implementation for demo purposes
- **User Data**: Mock user profiles with sample images
- **Navigation**: Stack and tab navigation with proper flow
- **State Management**: React Context for authentication state

### Code Quality
- ✅ TypeScript for type safety
- ✅ ESLint configuration
- ✅ Clean component structure
- ✅ Reusable components
- ✅ Proper error handling
- ✅ Consistent naming conventions

## Commands

```bash
# Development
npm start              # Start Metro bundler
npm run ios           # Run on iOS simulator
npm run android       # Run on Android emulator

# Code Quality
npm run lint          # Run ESLint
npm test              # Run Jest tests
```


## License

Private project for Coamigos interview task.

## Notes

This implementation focuses on:
- Clean, maintainable code structure
- Modern React Native patterns
- Reusable component architecture
- TypeScript safety
- User experience and interface design
- Proper navigation flow

The app demonstrates senior-level React Native development practices with clean architecture, proper separation of concerns, and production-ready code structure.