// pages/index.tsx
import { useEffect } from 'react';

export default function Player({ message }: { message: string }) {

  useEffect(() => {
    console.log("Home page mounted");
  }, []);

  return (
    <div>
      <h1>Next.js Page Component</h1>
      <p>Message from server: {message}</p>
    </div>
  );
}

// Next.js feature: server-side or static props
export async function getStaticProps() {
  return {
    props: { message: "Hello from Next.js!" },
  };
}