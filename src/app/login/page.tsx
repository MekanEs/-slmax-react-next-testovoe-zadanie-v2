'use client';

import React from 'react';
import { useContext } from 'react';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../components/provider/AuthProvider';

const Login: React.FC = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  const { auth } = useContext(AuthContext);

  const router = useRouter();

  const login = async () => {
    if (auth)
      await signInWithPopup(auth, provider).catch((error) => {
        console.log(error);
      });

    router.push('/');
  };
  return (
    <div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
