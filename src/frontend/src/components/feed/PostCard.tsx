import { useState } from 'react';
import { MockPost } from '../../mock/mockData';
import { useUiState } from '../../state/useUiState';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PostCardProps {
  post: MockPost;
}

export default function PostCard({ post }: PostCardProps) {
  const { likedPosts, toggleLike } = useUiState();
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [comment, setComment] = useState('');
  const isLiked = likedPosts.has(post.id);

  const handleShare = () => {
    setShowShare(true);
    setTimeout(() => setShowShare(false), 2000);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
            <img src={post.userAvatar} alt={post.username} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-slate-900">{post.username}</p>
            <p className="text-xs text-slate-500">{post.timestamp}</p>
          </div>
        </div>

        <div className="relative aspect-square bg-slate-100">
          <img src={post.image} alt={post.caption} className="w-full h-full object-cover" />
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleLike(post.id)}
              className={cn('hover:bg-transparent', isLiked && 'text-red-500')}
            >
              <Heart className={cn('w-6 h-6', isLiked && 'fill-current')} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowComments(true)}
              className="hover:bg-transparent"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="hover:bg-transparent"
            >
              <Share2 className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="ml-auto hover:bg-transparent">
              <Bookmark className="w-6 h-6" />
            </Button>
          </div>

          <div>
            <p className="font-medium text-slate-900">
              {post.likes + (isLiked ? 1 : 0)} likes
            </p>
          </div>

          <div>
            <p className="text-slate-900">
              <span className="font-medium mr-2">{post.username}</span>
              {post.caption}
            </p>
          </div>

          <button
            onClick={() => setShowComments(true)}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            View all {post.comments} comments
          </button>
        </div>
      </div>

      <Dialog open={showComments} onOpenChange={setShowComments}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Comments</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">user_123</span> Great work! Love the colors.
                </p>
                <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 pt-4 border-t">
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="min-h-[60px]"
            />
            <Button onClick={() => setComment('')} className="bg-teal-600 hover:bg-teal-700">
              Post
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {showShare && (
        <div className="fixed bottom-4 right-4 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Link copied to clipboard!
        </div>
      )}
    </>
  );
}
