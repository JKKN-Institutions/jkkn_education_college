'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { BottomNavbar } from '@/components/BottomNav';
import { cn } from '@/lib/utils';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <>
      <div className={cn('pt-20', isMobile && 'pb-20')}>
        {children}
      </div>
      <BottomNavbar />
    </>
  );
}
