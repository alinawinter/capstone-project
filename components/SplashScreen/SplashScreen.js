import styled from "styled-components";

import Lottie from "lottie-react";
import plate from "../../public/lottie/plate.json";

export default function SplashScreen() {
  return (
    <Container>
      <HeadingContainer>
        <Heading>FuturePlate</Heading>
      </HeadingContainer>
      <PlateAnimation animationData={plate} />
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--color-orange);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

const Heading = styled.h1`
  font-family: var(--font-family-heading);
  color: var(--color-beige);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const PlateAnimation = styled(Lottie)`
  width: 15em;
  height: 15em;
`;

/*       

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

<StyledUtensilsIcon icon={faUtensils} />

const StyledUtensilsIcon = styled(FontAwesomeIcon)`
  color: var(--color-beige);
  font-size: 2em;
`;


*/
