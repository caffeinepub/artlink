import { useNavigate, useLocation } from '@tanstack/react-router';
import { mockCommunities } from '../../mock/mockData';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Home, Compass, PlusSquare, User, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: PlusSquare, label: 'Create', path: '/create' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-slate-900">ARTLINK</h1>
      </div>

      <nav className="flex-1 px-3">
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate({ to: item.path })}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors',
                isActive(item.path)
                  ? 'bg-slate-100 text-slate-900 font-medium'
                  : 'text-slate-600 hover:bg-slate-50'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="mb-3">
          <div className="flex items-center gap-2 px-4 py-2 text-slate-700 font-medium">
            <Users className="w-5 h-5" />
            <span>Your Community</span>
          </div>
        </div>

        <ScrollArea className="h-64">
          <div className="space-y-1">
            {mockCommunities.map((community) => (
              <button
                key={community.id}
                onClick={() => navigate({ to: `/community/${community.id}` })}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors',
                  location.pathname === `/community/${community.id}`
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 shrink-0">
                  <img src={community.avatar} alt={community.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm truncate">{community.name}</span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </nav>
    </div>
  );
}
