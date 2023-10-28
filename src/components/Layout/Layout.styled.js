import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  padding: 0 16px;
  margin: 0 auto;
  text-align: center;
`;

export const Link = styled(NavLink)`
  color: black;
  margin-right: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 28px;
`;

export const Nav = styled.nav`
  margin-top: 20px;
  margin-bottom: 30px;
`;
