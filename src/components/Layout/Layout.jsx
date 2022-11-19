import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </div>
          <div>
            <NavLink to="register">Register</NavLink>
            <NavLink to="login">Login</NavLink>
          </div>
        </nav>
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
