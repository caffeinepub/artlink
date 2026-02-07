import { useParams } from '@tanstack/react-router';
import { mockCommunities, mockPosts } from '../mock/mockData';
import { Button } from '@/components/ui/button';
import { Users, Settings } from 'lucide-react';
import PostCard from '../components/feed/PostCard';

export default function CommunityPage() {
  const { communityId } = useParams({ strict: false });
  const community = mockCommunities.find((c) => c.id === communityId);

  if (!community) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-slate-500">Community not found</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100">
              <img src={community.avatar} alt={community.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold text-slate-900">{community.name}</h1>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                  Join Community
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2 text-slate-600 mb-4">
                <Users className="w-4 h-4" />
                <span>{community.memberCount.toLocaleString()} members</span>
              </div>

              <p className="text-slate-700">
                A community for artists to share their work, get feedback, and connect with fellow creators.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Recent Posts</h2>
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
