import styled from "styled-components";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <NavBarBox>
      <NavBarList>
        <li>
          <NavItem text="Info" href="/infopage" />
        </li>
        <li>
          <NavItem text="Home" href="/" />
        </li>
      </NavBarList>
    </NavBarBox>
  );
}

const NavBarBox = styled.nav`
  background-color: var(--color-orange);
  bottom: 0;
  width: 100%;
  display: flex;
  position: fixed;
  height: 4em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  align-items: center;
`;

const NavBarList = styled.ul`
  font-family: var(--font-family-heading);
  color: var(--color-beige);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  list-style: none;
  text-decoration: none;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
