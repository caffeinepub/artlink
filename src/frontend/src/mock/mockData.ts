export interface MockUser {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio?: string;
}

export interface MockPost {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  tags?: string[];
}

export interface MockCommunity {
  id: string;
  name: string;
  avatar: string;
  memberCount: number;
}

export interface MockStory {
  id: string;
  userId: string;
  username: string;
  avatar: string;
}

export interface MockExploreTile {
  id: string;
  image: string;
  title: string;
  author: string;
  category: string;
  likes: number;
}

// Generate avatar URLs from the avatar set
const getAvatarUrl = (index: number) => `/assets/generated/artlink-avatars-set.dim_1024x1024.png?avatar=${index}`;
const getArtUrl = (index: number) => `/assets/generated/artlink-art-tiles-set.dim_2048x2048.png?art=${index}`;

export const mockUsers: MockUser[] = [
  { id: '1', username: 'user_123', displayName: 'User 123', avatar: getAvatarUrl(1) },
  { id: '2', username: 'user_125', displayName: 'User 125', avatar: getAvatarUrl(2) },
  { id: '3', username: 'user_1253', displayName: 'User 1253', avatar: getAvatarUrl(3) },
  { id: '4', username: 'user_123', displayName: 'User 123', avatar: getAvatarUrl(4) },
  { id: '5', username: 'user_1253k', displayName: 'User 1253k', avatar: getAvatarUrl(5) },
  { id: '6', username: 'user_003', displayName: 'User 003', avatar: getAvatarUrl(6) },
  { id: '7', username: 'user_004', displayName: 'User 004', avatar: getAvatarUrl(7) },
  { id: '8', username: 'random_xyz', displayName: 'Random XYZ', avatar: getAvatarUrl(8) },
];

export const mockCommunities: MockCommunity[] = [
  { id: '1', name: 'Community 1', avatar: getAvatarUrl(1), memberCount: 1234 },
  { id: '2', name: 'Community xyz', avatar: getAvatarUrl(2), memberCount: 567 },
  { id: '3', name: 'Community 2', avatar: getAvatarUrl(3), memberCount: 890 },
  { id: '4', name: 'Community 1', avatar: getAvatarUrl(4), memberCount: 456 },
  { id: '5', name: 'Community 2', avatar: getAvatarUrl(5), memberCount: 789 },
  { id: '6', name: 'Community 3', avatar: getAvatarUrl(6), memberCount: 321 },
];

export const mockStories: MockStory[] = [
  { id: '1', userId: '1', username: 'user_123de', avatar: getAvatarUrl(1) },
  { id: '2', userId: '2', username: 'user_125', avatar: getAvatarUrl(2) },
  { id: '3', userId: '3', username: 'user_1253', avatar: getAvatarUrl(3) },
  { id: '4', userId: '4', username: 'user_123', avatar: getAvatarUrl(4) },
  { id: '5', userId: '5', username: 'user_1253k', avatar: getAvatarUrl(5) },
];

export const mockPosts: MockPost[] = [
  {
    id: '1',
    userId: '1',
    username: 'Random xyz',
    userAvatar: getAvatarUrl(1),
    image: getArtUrl(1),
    caption: 'Just created this beautiful painting with oil colors.',
    likes: 1234,
    comments: 56,
    timestamp: '2 hours ago',
    tags: ['painting', 'art', 'colors'],
  },
  {
    id: '2',
    userId: '2',
    username: 'User 125',
    userAvatar: getAvatarUrl(2),
    image: getArtUrl(2),
    caption: 'New digital artwork exploring abstract forms',
    likes: 892,
    comments: 34,
    timestamp: '5 hours ago',
    tags: ['digital', 'abstract'],
  },
];

export const mockExploreTiles: MockExploreTile[] = [
  { id: '1', image: getArtUrl(1), title: 'Starry Night', author: 'Vincent', category: 'Painting', likes: 5432 },
  { id: '2', image: getArtUrl(2), title: 'Abstract Dreams', author: 'Sarah', category: 'Digital Art', likes: 3210 },
  { id: '3', image: getArtUrl(3), title: 'Urban Landscape', author: 'Mike', category: 'Photography', likes: 2890 },
  { id: '4', image: getArtUrl(4), title: 'Portrait Study', author: 'Emma', category: 'Drawing', likes: 4567 },
  { id: '5', image: getArtUrl(5), title: 'Nature Scene', author: 'John', category: 'Painting', likes: 3456 },
  { id: '6', image: getArtUrl(6), title: 'Digital Collage', author: 'Lisa', category: 'Digital Art', likes: 2345 },
  { id: '7', image: getArtUrl(7), title: 'Street Art', author: 'Alex', category: 'Photography', likes: 5678 },
  { id: '8', image: getArtUrl(8), title: 'Watercolor', author: 'Nina', category: 'Painting', likes: 4321 },
  { id: '9', image: getArtUrl(9), title: 'Sculpture', author: 'Tom', category: 'Literature', likes: 1234 },
  { id: '10', image: getArtUrl(10), title: 'Mixed Media', author: 'Kate', category: 'Media Art', likes: 3890 },
];

export const exploreCategories = [
  'All',
  'Home',
  'Inspiration',
  'Visual Art',
  'Digital Art',
  'Literature',
  'Media Art',
];
