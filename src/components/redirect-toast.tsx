'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { deleteCookieByKey, getCookieByKey } from '@/app/actions/cookie';

const RedirectToast = () => {
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is intentionally included to trigger on route changes
  useEffect(() => {
    const showCokieToast = async () => {
      const message = await getCookieByKey('toast');

      if (message) {
        toast.success(message);
        await deleteCookieByKey('toast');
      }
    };

    showCokieToast();
  }, [pathname]);

  return null;
};

export { RedirectToast };
