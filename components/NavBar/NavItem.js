import styled from "styled-components";
import Link from "next/link";

export default function NavItem({ text, href }) {
  return <StyledLink href={href}>{text}</StyledLink>;
}

const StyledLink = styled(Link)`
  font-family: var(--font-family-heading);
  z-index: 12;
  color: var(--color-beige);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  list-style: none;
  text-decoration: none;
`;
