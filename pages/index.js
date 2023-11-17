// pages/index.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <p>Hello, Next.js!</p>
      <Link href="/Test">Go to Test page</Link>
    </div>
  );
};

export default Home;

