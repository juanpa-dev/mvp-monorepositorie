import { Inter } from 'next/font/google';
import {  Button } from '@repo/ui';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Button variant="primary" size="sm">
        Click Me
      </Button>
      <Button variant="success" size="lg">
        Click Me
      </Button>

   

      <button className="bg-purple-100 text-primary-foreground hover:bg-purple-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        Test
      </button>
    </>
  );
}
