import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense
          fallback={
            <Oval
              height={80}
              width={80}
              color="#1e1e1f"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#646464"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
