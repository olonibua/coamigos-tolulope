import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <View style={styles.logo}>
      <Image
        source={require('../../assets/images/Rectangle 16.png')}
        style={styles.logoBlue}
      />
      <Image
        source={require('../../assets/images/Ellipse 15.png')}
        style={styles.logoRed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
  },
  logoBlue: {
    width: 100,
    height: 70,
  },
  logoRed: {
    width: 25,
    height: 25,
  },
});

export default Logo;
