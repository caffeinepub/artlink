import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
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
      
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full p-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">ARTLINK</h1>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Reset Password</h2>
          <p className="text-slate-600">Enter your email to receive reset instructions</p>
        </div>

        {!submitted ? (
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
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              Send Reset Link
            </Button>

            <p className="text-center text-sm text-slate-600">
              Remember your password?{' '}
              <button
                type="button"
                onClick={() => navigate({ to: '/login' })}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Login
              </button>
            </p>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-slate-700">Check your email for reset instructions</p>
            <Button
              onClick={() => navigate({ to: '/login' })}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              Back to Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
