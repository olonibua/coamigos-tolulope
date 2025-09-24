import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/theme';

interface PlusIconProps {
  size?: number;
  color?: string;
  backgroundColor?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ 
  size = 28, 
  color = Colors.text.primary,
  backgroundColor = Colors.white 
}) => {
  const iconSize = size;
  const lineWidth = Math.max(2, size * 0.15);
  const lineLength = size * 0.6;

  return (
    <View style={[styles.container, { width: iconSize, height: iconSize }]}>
      {/* Horizontal line */}
      <View 
        style={[
          styles.line, 
          styles.horizontalLine,
          { 
            width: lineLength, 
            height: lineWidth, 
            backgroundColor: color 
          }
        ]} 
      />
      {/* Vertical line */}
      <View 
        style={[
          styles.line, 
          styles.verticalLine,
          { 
            width: lineWidth, 
            height: lineLength, 
            backgroundColor: color 
          }
        ]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  line: {
    position: 'absolute',
  },
  horizontalLine: {
    // Already positioned by absolute
  },
  verticalLine: {
    // Already positioned by absolute
  },
});

export default PlusIcon;
