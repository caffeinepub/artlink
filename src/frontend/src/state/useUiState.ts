import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UiState {
  followedUsers: Set<string>;
  likedPosts: Set<string>;
  selectedExploreCategory: string;
  searchQuery: string;
  toggleFollow: (userId: string) => void;
  toggleLike: (postId: string) => void;
  setExploreCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useUiState = create<UiState>()(
  persist(
    (set) => ({
      followedUsers: new Set<string>(),
      likedPosts: new Set<string>(),
      selectedExploreCategory: 'All',
      searchQuery: '',
      toggleFollow: (userId: string) =>
        set((state) => {
          const newFollowed = new Set(state.followedUsers);
          if (newFollowed.has(userId)) {
            newFollowed.delete(userId);
          } else {
            newFollowed.add(userId);
          }
          return { followedUsers: newFollowed };
        }),
      toggleLike: (postId: string) =>
        set((state) => {
          const newLiked = new Set(state.likedPosts);
          if (newLiked.has(postId)) {
            newLiked.delete(postId);
          } else {
            newLiked.add(postId);
          }
          return { likedPosts: newLiked };
        }),
      setExploreCategory: (category: string) =>
        set({ selectedExploreCategory: category }),
      setSearchQuery: (query: string) => set({ searchQuery: query }),
    }),
    {
      name: 'artlink-ui-state',
      partialize: (state) => ({
        followedUsers: Array.from(state.followedUsers),
        likedPosts: Array.from(state.likedPosts),
        selectedExploreCategory: state.selectedExploreCategory,
      }),
      merge: (persistedState: any, currentState) => ({
        ...currentState,
        followedUsers: new Set(persistedState?.followedUsers || []),
        likedPosts: new Set(persistedState?.likedPosts || []),
        selectedExploreCategory: persistedState?.selectedExploreCategory || 'All',
      }),
    }
  )
);
