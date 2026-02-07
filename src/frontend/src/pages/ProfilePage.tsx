import { useMockAuth } from '../state/useMockAuth';
import { mockPosts } from '../mock/mockData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Grid3x3, Bookmark } from 'lucide-react';

export default function ProfilePage() {
  const { username } = useMockAuth();

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-6">
          <div className="flex items-start gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-4xl font-bold">
              {username?.[0]?.toUpperCase() || 'A'}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-2xl font-bold text-slate-900">{username || 'Artist'}</h1>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              <div className="flex gap-8 mb-4">
                <div>
                  <span className="font-bold text-slate-900">42</span>
                  <span className="text-slate-600 ml-1">posts</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900">1.2K</span>
                  <span className="text-slate-600 ml-1">followers</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900">345</span>
                  <span className="text-slate-600 ml-1">following</span>
                </div>
              </div>

              <p className="text-slate-700">
                Digital artist & painter 🎨<br />
                Exploring colors and forms<br />
                📍 Based in San Francisco
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full justify-start border-b border-slate-200 bg-transparent rounded-none h-auto p-0">
            <TabsTrigger
              value="posts"
              className="data-[state=active]:border-b-2 data-[state=active]:border-slate-900 rounded-none"
            >
              <Grid3x3 className="w-4 h-4 mr-2" />
              Posts
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="data-[state=active]:border-b-2 data-[state=active]:border-slate-900 rounded-none"
            >
              <Bookmark className="w-4 h-4 mr-2" />
              Saved
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <div className="grid grid-cols-3 gap-4">
              {mockPosts.map((post) => (
                <div key={post.id} className="aspect-square rounded-lg overflow-hidden bg-slate-100">
                  <img src={post.image} alt={post.caption} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <div className="text-center py-12 text-slate-500">
              No saved posts yet
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
