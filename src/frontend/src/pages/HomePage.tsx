import { useMemo } from 'react';
import { mockPosts, mockStories } from '../mock/mockData';
import { useUiState } from '../state/useUiState';
import StoriesRow from '../components/feed/StoriesRow';
import PostCard from '../components/feed/PostCard';
import SuggestedForYou from '../components/suggestions/SuggestedForYou';

export default function HomePage() {
  const { searchQuery } = useUiState();

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return mockPosts;
    const query = searchQuery.toLowerCase();
    return mockPosts.filter(
      (post) =>
        post.username.toLowerCase().includes(query) ||
        post.caption.toLowerCase().includes(query) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const filteredStories = useMemo(() => {
    if (!searchQuery) return mockStories;
    const query = searchQuery.toLowerCase();
    return mockStories.filter((story) =>
      story.username.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StoriesRow stories={filteredStories} />
            
            <div className="mt-4 space-y-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <SuggestedForYou />
          </div>
        </div>
      </div>
    </div>
  );
}
