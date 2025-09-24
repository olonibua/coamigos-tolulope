import { useState } from 'react';

export const useUserInteractions = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [likedUsers, setLikedUsers] = useState<Set<string>>(new Set());

  const selectUser = (userId: string) => {
    setSelectedUserId(userId);
  };

  const deselectUser = () => {
    setSelectedUserId(null);
  };

  const toggleLike = (userId: string) => {
    setLikedUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const isUserSelected = (userId: string) => {
    return selectedUserId === userId;
  };

  const isUserLiked = (userId: string) => {
    return likedUsers.has(userId);
  };

  return {
    selectedUserId,
    likedUsers,
    selectUser,
    deselectUser,
    toggleLike,
    isUserSelected,
    isUserLiked,
  };
};