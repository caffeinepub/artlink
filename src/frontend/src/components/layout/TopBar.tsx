import { useState, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useUiState } from '../../state/useUiState';
import { useMockAuth } from '../../state/useMockAuth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, Bell, MessageCircle, User, LogOut } from 'lucide-react';
import { useOnEscape } from '../../hooks/useOnEscape';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export default function TopBar() {
  const { searchQuery, setSearchQuery } = useUiState();
  const { logout, username } = useMockAuth();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useOnEscape(() => {
    setShowNotifications(false);
    setShowMessages(false);
  });

  useOutsideClick(notificationsRef, () => setShowNotifications(false));
  useOutsideClick(messagesRef, () => setShowMessages(false));

  const handleLogout = () => {
    logout();
    navigate({ to: '/login' });
  };

  return (
    <div className="h-16 bg-white border-b border-slate-200 flex items-center px-6 gap-4">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            type="text"
            placeholder="Search for artist, art..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-50 border-slate-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative" ref={notificationsRef}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-slate-200 p-4 z-50">
              <h3 className="font-semibold text-slate-900 mb-3">Notifications</h3>
              <div className="space-y-3">
                <div className="flex gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700"><span className="font-medium">user_123</span> liked your post</p>
                    <p className="text-xs text-slate-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700"><span className="font-medium">artist_xyz</span> started following you</p>
                    <p className="text-xs text-slate-500">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={messagesRef}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowMessages(!showMessages)}
            className="relative"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          {showMessages && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-slate-200 p-4 z-50">
              <h3 className="font-semibold text-slate-900 mb-3">Messages</h3>
              <div className="space-y-3">
                <div className="flex gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">user_125</p>
                    <p className="text-xs text-slate-500 truncate">Hey, love your artwork!</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-sm font-medium">
                {username?.[0]?.toUpperCase() || 'A'}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => navigate({ to: '/profile' })}>
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
