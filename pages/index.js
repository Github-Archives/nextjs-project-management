// pages/index.js
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex border-2 border-black">
      <div>Welcome!</div>
      <Link href="/PageA" className="mx-6 text-blue-500 underline">
        Page A
      </Link>
      <Link href="/PageB" className="mx-6 text-blue-500 underline">
        Page B
      </Link>
    </div>
  );
};

export default Home;
