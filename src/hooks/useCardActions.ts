import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

interface UseCardActionsProps {
  selectedUserId: string | null;
  selectUser: (userId: string) => void;
  deselectUser: () => void;
  toggleLike: (userId: string) => void;
  isUserSelected: (userId: string) => boolean;
  navigation: NavigationProp<RootStackParamList>;
}

export const useCardActions = ({
  selectedUserId,
  selectUser,
  deselectUser,
  toggleLike,
  isUserSelected,
  navigation
}: UseCardActionsProps) => {

  const slideDown = (userId: string) => {
    if (isUserSelected(userId)) {
      deselectUser();
    }
  };

  const handleActionPress = (userId: string) => {
    if (isUserSelected(userId)) {
      slideDown(userId);
    } else {
      if (selectedUserId) {
        slideDown(selectedUserId);
      }
      setTimeout(
        () => {
          selectUser(userId);
          // slideUp();
        },
        selectedUserId ? 300 : 0,
      );
    }
  };

  const handleLikePress = (userId: string) => {
    toggleLike(userId);

    // Navigate to questionnaire after a short delay to show the checkmark
    setTimeout(() => {
      navigation.navigate('Questionnaire');
    }, 300);
  };

  return {
    handleActionPress,
    handleLikePress,
    slideDown
  };
};