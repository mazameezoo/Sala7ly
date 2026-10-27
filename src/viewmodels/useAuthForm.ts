import { useState } from 'react';

export type AuthMode = 'signin' | 'register';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useAuthForm(onSuccess: () => void) {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const switchMode = (next: AuthMode) => {
    setMode(next);
    setError(null);
  };

  const submit = () => {
    if (mode === 'register' && name.trim().length < 2) {
      setError('Enter your name.');
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError('Enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setError(null);
    onSuccess();
  };

  return {
    mode, switchMode,
    name, setName,
    email, setEmail,
    password, setPassword,
    showPassword, toggleShowPassword: () => setShowPassword((v) => !v),
    error, submit,
  };
}
