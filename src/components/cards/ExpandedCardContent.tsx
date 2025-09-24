import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { User } from '../../types';
import PlusIcon from '../common/PlusIcon';
import { Colors } from '../../constants/theme';

interface ExpandedCardContentProps {
  user: User;
  isLiked: boolean;
  onLike: () => void;
  styles: any;
}

const ExpandedCardContent: React.FC<ExpandedCardContentProps> = ({
  user,
  isLiked,
  onLike,
  styles,
}) => {
  return (
    <>
      <View style={styles.expandedImageContainer}>
        <Image source={user.modalImage} style={styles.expandedImage} />
        <TouchableOpacity
          style={[styles.imageAddButton, isLiked && styles.imageAddButtonLiked]}
          onPress={onLike}
        >
          {isLiked ? (
            <Text style={styles.checkmarkText}>✓</Text>
          ) : (
            <PlusIcon size={24} color={Colors.text.primary} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.expandedWriteupContainer}>
        <View style={styles.writeupIndicator} />
        <Text style={styles.writeupText}>{user.writeup}</Text>
      </View>

      <View style={styles.expandedFloatingButton}>
        <Text style={styles.expandedFloatingButtonText}>↓</Text>
      </View>
    </>
  );
};

export default ExpandedCardContent;
