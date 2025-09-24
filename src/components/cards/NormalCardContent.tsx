import React from 'react';
import { View, Text, Image } from 'react-native';
import { User } from '../../types';

interface NormalCardContentProps {
  user: User;
  styles: any;
}

const NormalCardContent: React.FC<NormalCardContentProps> = ({
  user,
  styles,
}) => {
  return (
    <>
      <View style={styles.userInfoContainer}>
        <View style={styles.badges}>
          {user.isNearby && (
            <View style={styles.nearbyBadge}>
              <Text style={styles.badgeText}>Nearby</Text>
            </View>
          )}
          {user.isVerified && (
            <View style={styles.verifiedBadge}>
              <Text style={styles.badgeText}>Verified</Text>
            </View>
          )}
        </View>
        <View style={styles.info}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userDetails}>
            {user.age}, {user.gender}
          </Text>
          <View style={styles.moreInfo}>
            {user.distance && (
              <Text style={styles.distance}>📍 {user.distance} mile</Text>
            )}
          </View>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image source={user.image} style={styles.userImage} />
      </View>

      <View style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>↑</Text>
      </View>
    </>
  );
};

export default NormalCardContent;
