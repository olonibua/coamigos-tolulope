export const Colors = {
  primary: '#1E90FF', 
  secondary: '#FF4500', 
  background: '#F8F8F8',
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    light: '#F0F0F0',
    medium: '#CCCCCC',
    dark: '#666666',
  },
  text: {
    primary: '#333333',
    secondary: '#666666',
    light: '#999999',
  },
  button: {
    primary: '#1E90FF',
    success: '#4CAF50',
    danger: '#FF5252',
  },
  badge: {
    verified: '#4CAF50',
    nearby: '#FFC107',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 32,
  round: 50,
};

export const Typography = {
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    title: 28,
    header: 32,
  },
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const Shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.27,
    elevation: 10,
  },
};