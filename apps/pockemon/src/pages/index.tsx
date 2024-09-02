import { Inter } from 'next/font/google';

import { AvatarElements } from '@repo/ui';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <button className="bg-coral-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </>
  );
}
