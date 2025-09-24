import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Colors,
  Spacing,
  Typography,
  BorderRadius,
  Shadows,
} from '../../constants/theme';
import { RootStackParamList } from '../../types';
import Logo from '../../components/common/Logo';
import { users } from '../../data/users';
import { useUserInteractions } from '../../hooks/useUserInteractions';
import { useCardActions } from '../../hooks/useCardActions';
import NormalCardContent from '../../components/cards/NormalCardContent';
import ExpandedCardContent from '../../components/cards/ExpandedCardContent';

const { width, height } = Dimensions.get('window');

const IntentScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const userInteractions = useUserInteractions();
  const { isUserSelected, isUserLiked } = userInteractions;

  const { handleActionPress, handleLikePress } = useCardActions({
    ...userInteractions,
    navigation,
  });

  const renderUserCard = (user: (typeof users)[0]) => {
    const cardWidth = width * 0.65;
    const isExpanded = isUserSelected(user.id);

    return (
      <Animated.View
        key={user.id}
        style={[
          styles.cardContainer,
          {
            width: cardWidth,
          },
          isExpanded && styles.expandedCardContainer,
        ]}
      >
        <TouchableOpacity
          style={[styles.card, isExpanded && styles.expandedCard]}
          onPress={() => handleActionPress(user.id)}
          activeOpacity={0.95}
        >
          {!isExpanded ? (
            <NormalCardContent user={user} styles={styles} />
          ) : (
            <ExpandedCardContent
              user={user}
              isLiked={isUserLiked(user.id)}
              onLike={() => handleLikePress(user.id)}
              styles={styles}
            />
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.header}>
        <Logo size="medium" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Here's a connection worth considering</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardsScrollView}
          contentContainerStyle={styles.cardsContainer}
          decelerationRate="fast"
          snapToInterval={width * 0.65 + Spacing.md}
          snapToAlignment="start"
        >
          {users.map(user => renderUserCard(user))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    paddingTop: Spacing.xl,
  },
  title: {
    fontSize: 40,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.md,
    width: width * 0.85,
  },
  cardsScrollView: {
    flex: 1,
  },
  cardsContainer: {
    paddingLeft: Spacing.md,
    paddingRight: Spacing.md,
  },
  cardContainer: {
    marginRight: Spacing.md,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xxl,
    height: height * 0.5,
    ...Shadows.medium,
    overflow: 'hidden',
    position: 'relative',
  },
  userInfoContainer: {
    padding: Spacing.md,
    backgroundColor: 'transparent',
    height: '50%',
  },
  badges: {
    flexDirection: 'row',
    borderRadius: BorderRadius.xl,
    gap: Spacing.md,
    marginBottom: Spacing.sm,
  },
  nearbyBadge: {
    backgroundColor: Colors.badge.nearby,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.lg,
  },
  verifiedBadge: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.lg,
  },
  badgeText: {
    fontSize: Typography.fontSize.xs,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.white,
  },
  userName: {
    fontSize: Typography.fontSize.title,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  userDetails: {
    fontSize: Typography.fontSize.md,
    color: Colors.text.secondary,
    marginBottom: 4,
  },
  info: {
    marginTop: 20,
    gap: 7,
  },
  moreInfo: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'flex-end',
  },
  distance: {
    fontSize: Typography.fontSize.sm,
    color: Colors.text.light,
  },
  imageContainer: {
    height: '50%',
    position: 'relative',
    borderBottomLeftRadius: BorderRadius.lg,
    borderBottomRightRadius: BorderRadius.lg,
    overflow: 'hidden',
  },
  userImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addButton: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    width: 40,
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.small,
    zIndex: 4,
  },
  addButtonText: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
  },
  floatingButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
    width: 50,
    height: 50,
    backgroundColor: Colors.black,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    ...Shadows.medium,
  },
  floatingButtonText: {
    color: Colors.white,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
  },
  messageSection: {
    margin: Spacing.md,
    marginTop: Spacing.sm,
    padding: Spacing.md,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: Colors.text.secondary,
    ...Shadows.small,
  },
  messageText: {
    fontSize: Typography.fontSize.md,
    color: Colors.text.secondary,
    lineHeight: 22,
  },
  expandedCardContainer: {
    zIndex: 100,
  },
  expandedCard: {
    height: height * 0.5,
    borderRadius: BorderRadius.xxl,
  },
  expandedImageContainer: {
    height: '50%',
    position: 'relative',
    borderTopLeftRadius: BorderRadius.xxl,
    borderTopRightRadius: BorderRadius.xxl,
    overflow: 'visible',
  },
  expandedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageAddButton: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    width: 36,
    height: 36,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.medium,
    zIndex: 999,
  },
  imageAddButtonLiked: {
    backgroundColor: Colors.primary,
  },
  checkmarkText: {
    fontSize: 20,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.white,
  },
  expandedDownButton: {
    position: 'absolute',
    bottom: Spacing.lg,
    left: '50%',
    marginLeft: -25,
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandedDownButtonText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: Typography.fontWeight.bold,
  },
  expandedWriteupContainer: {
    height: '35%',
    padding: Spacing.md,
    paddingTop: Spacing.sm,
    borderBottomLeftRadius: BorderRadius.xxl,
    borderBottomRightRadius: BorderRadius.xxl,
    backgroundColor: Colors.white,
  },
  writeupIndicator: {
    width: 8,
    height: 140,
    backgroundColor: Colors.black,
    borderRadius: 4,
    position: 'absolute',
    left: Spacing.md,
    top: Spacing.sm + 4,
  },
  writeupText: {
    fontSize: Typography.fontSize.sm,
    color: Colors.text.secondary,
    lineHeight: 20,
    marginLeft: Spacing.md + 8,
    paddingVertical: Spacing.xs,
    flex: 1,
  },
  expandedFloatingButton: {
    position: 'absolute',
    borderColor: Colors.white,
    borderWidth: 1,
    top: '47%',
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
    width: 50,
    height: 50,
    backgroundColor: Colors.gray.dark,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    ...Shadows.medium,
  },
  expandedFloatingButtonText: {
    color: Colors.white,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.bold,
  },
});

export default IntentScreen;
