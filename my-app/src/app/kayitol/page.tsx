'use client';
import { useState } from 'react';

export default function Home({ onSignUp }: { onSignUp: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    const userExists = existingUsers.find((user: { email: string; password: string }) => user.email === email);
    
    if (userExists) {
      alert('Bu email adresi zaten kayıtlı!');
      return;
    }
    
    const newUser = { email, password };
    const updatedUsers = [...existingUsers, newUser];
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    alert('Kayıt başarılı!');
    setEmail('');
    setPassword('');
    onSignUp(); 
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Kayıt Ol</h2>
      <input
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Kayıt Ol</button>
    </form>
  );
}