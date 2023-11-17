// pages/index.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <p>Hello, Next.js!</p>
      <Link href="/Test">Go to Test page</Link>
      <p>Next link</p>
      <Link href="/Test2">Go to Test2 page</Link>
    </div>
  );
};

export default Home;

