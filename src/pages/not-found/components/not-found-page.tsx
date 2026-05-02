'use client';

import { MoveLeft, RotateCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/ui/button';
import Image from 'next/image';

const NotFoundPage = () => {
  const router = useRouter();

  const navigateHome = () => {
    router.push('/');
  };

  const refreshPage = () => {
    router.refresh();
  };

  return (
    <div className="flex-center h-[calc(100vh-145px)]">
      <div className="flex-center gap-16">
        <div className="flex max-w-96 flex-col">
          <h1 className="mb-3 text-4xl font-bold">Page was not found</h1>
          <p className="mb-11 text-xl text-gray-400">Check if the entered address is correct or try again later</p>
          <div className="flex gap-5">
            <Button onClick={navigateHome}>
              <div className="transition-transform duration-300 group-hover:-translate-x-2">
                <MoveLeft />
              </div>
              <p className="font-bold">Home</p>
            </Button>
            <Button onClick={refreshPage} variant="outline">
              <RotateCcw size={20} />
              <p className="font-bold">Refresh</p>
            </Button>
          </div>
        </div>
        <Image src="/not-found.png" alt="not-found" width={340} height={346} quality={100} />
      </div>
    </div>
  );
};

export default NotFoundPage;
