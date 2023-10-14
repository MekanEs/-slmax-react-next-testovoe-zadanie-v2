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

  console.log(auth && auth.currentUser);
  const login = async () => {
    if (auth)
      await signInWithPopup(auth, provider)
        .then((result) => {
          console.log('Logged In', result);
        })
        .catch((error) => {
          console.log('Caught error Popup closed', error);
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
