import { useSession, signIn, signOut } from 'next-auth/react';

export default function Component() {
  const { data: session } = useSession(); // useSession Hook is the easiest way to check if someone is signed in. Must have <SessionProvider> added to pages/_app.js
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
