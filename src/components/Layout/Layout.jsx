import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from 'components/loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
