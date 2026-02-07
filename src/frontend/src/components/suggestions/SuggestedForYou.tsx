import { mockUsers } from '../../mock/mockData';
import { useUiState } from '../../state/useUiState';
import { Button } from '@/components/ui/button';

export default function SuggestedForYou() {
  const { followedUsers, toggleFollow } = useUiState();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sticky top-4">
      <h3 className="font-semibold text-slate-900 mb-4">Suggested for you</h3>
      <div className="space-y-4">
        {mockUsers.slice(0, 5).map((user) => {
          const isFollowing = followedUsers.has(user.id);
          return (
            <div key={user.id} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
                <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 text-sm truncate">{user.username}</p>
                <p className="text-xs text-slate-500 truncate">{user.displayName}</p>
              </div>
              <Button
                size="sm"
                variant={isFollowing ? 'outline' : 'default'}
                onClick={() => toggleFollow(user.id)}
                className={isFollowing ? '' : 'bg-teal-600 hover:bg-teal-700'}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
            </div>
          );
        })}
        <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
          See more
        </button>
      </div>
    </div>
  );
}
