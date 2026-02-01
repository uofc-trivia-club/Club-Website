// import '../styles/globals.css';

import React, { ReactElement, useEffect, useRef } from 'react';

import type { AppProps } from 'next/app';
import MainLayout from '../components/layouts/MainLayout';
import { NextPageWithLayout } from '../types/page';
import { useRouter } from 'next/router';


type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Using Next.js for improved SEO, performance, and routing capabilities
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const scrollPositions = useRef<Record<string, number>>({});

  // Unregister any service workers on mount
  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
  }, []);

  // Maintain the scroll position after visiting different page
  useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  const handleRouteChangeStart = (url: string) => {
    scrollPositions.current[router.asPath] = window.scrollY;
  };

  const handleRouteChangeComplete = (url: string) => {
    const y = scrollPositions.current[url];
    if (y !== undefined) {
      requestAnimationFrame(() => window.scrollTo(0, y));
    }
  };

  router.events.on('routeChangeStart', handleRouteChangeStart);
  router.events.on('routeChangeComplete', handleRouteChangeComplete);

  return () => {
    router.events.off('routeChangeStart', handleRouteChangeStart);
    router.events.off('routeChangeComplete', handleRouteChangeComplete);
  };
}, [router]);

  // Check if the current page is the homepage
  const isHomePage = router.pathname === '/';

  // Add layout property to Component if it doesn't have one
  const getLayout = isHomePage 
    ? (page: React.ReactElement) => <MainLayout>{page}</MainLayout>
    : Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}


export default MyApp;

