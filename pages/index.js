// pages/index.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex border-black border-2'>
      <div>Welcome!</div>
      <Link href="/PageA" className='mx-6 underline text-blue-500'>Page A</Link>
      <Link href="/PageB" className='mx-6 underline text-blue-500'>Page B</Link>
    </div>
  );
};

export default Home;
