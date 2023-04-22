import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGenderless } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <NavBarBox>
      <NavBarList>
        <li>
          <StyledLink href="/infopage">
            <StyledIcon icon={faInfo} />
            Info
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/">
            <StyledIcon icon={faGenderless} />
            Start
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/weeklyscorepage">
            <StyledIcon icon={faStar} />
            Score
          </StyledLink>
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
  display: flex;
  align-items: center;
  list-style: none;
  text-decoration: none;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 0;
`;

const StyledLink = styled(Link)`
  font-family: var(--font-family-heading);
  color: var(--color-beige);
  list-style: none;
  text-decoration: none;
  font-size: 0.9em;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2em;
`;
