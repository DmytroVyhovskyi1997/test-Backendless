import { Link, Container, Nav } from './Layout.styled';

const Layout = ({ tabs }) => {
  return (
    <Container>
      <header>
        <Nav>
          {tabs.map((tab) => (
            <Link to={tab.id} key={tab.id}>
              {tab.id}
            </Link>
          ))}
        </Nav>
      </header>
    </Container>
  );
};

export default Layout;
