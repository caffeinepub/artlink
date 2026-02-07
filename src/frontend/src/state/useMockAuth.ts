import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MockAuthState {
  isAuthenticated: boolean;
  userId: string | null;
  username: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useMockAuth = create<MockAuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userId: null,
      username: null,
      login: (email: string, password: string) => {
        if (email && password) {
          set({
            isAuthenticated: true,
            userId: 'user_123',
            username: email.split('@')[0],
          });
          return true;
        }
        return false;
      },
      logout: () => {
        set({
          isAuthenticated: false,
          userId: null,
          username: null,
        });
      },
    }),
    {
      name: 'artlink-auth',
    }
  )
);
