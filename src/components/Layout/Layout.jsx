import { Outlet, NavLink } from 'react-router-dom';

const Layout = ({ tabs }) => {
  return (
    <>
      <header>
        <nav>
          {tabs.map((tab) => (
            <NavLink to={tab.id} key={tab.id}>
              {tab.id}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
