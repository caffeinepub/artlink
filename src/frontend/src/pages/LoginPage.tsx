import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useMockAuth } from '../state/useMockAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SiGoogle } from 'react-icons/si';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { login } = useMockAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const success = login(email, password);
    if (success) {
      navigate({ to: '/' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img
          src="/assets/generated/artlink-bg-blobs.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">
        <div className="hidden md:block bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 p-12 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/assets/generated/artlink-login-illustration.dim_900x900.png"
              alt="Artistic illustration"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">ARTLINK</h1>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">Hi Artist!</h2>
            <p className="text-slate-600">Welcome to ArtLink</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-slate-700">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 bg-slate-50 border-slate-200"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="password" className="text-slate-700">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 bg-slate-50 border-slate-200"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigate({ to: '/forgot-password' })}
                className="text-sm text-teal-600 hover:text-teal-700"
              >
                Forgot password?
              </button>
            </div>

            <div className="text-center text-sm text-slate-500">or</div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-slate-300 hover:bg-slate-50"
            >
              <SiGoogle className="mr-2 h-4 w-4" />
              Login with Google
            </Button>

            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              Login
            </Button>

            <p className="text-center text-sm text-slate-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate({ to: '/signup' })}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
