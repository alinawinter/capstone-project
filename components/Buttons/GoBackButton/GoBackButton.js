import styled from "styled-components";
import { BasicButton } from "../buttonStyles";
import { useRouter } from "next/router";

export default function GoBackButton() {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }
  return (
    <StyledGoBackButtonWrapper>
      <BasicButton
        aria-label="Seite zurückgehen"
        onClick={handleGoBack}
      >{`<`}</BasicButton>
    </StyledGoBackButtonWrapper>
  );
}

const StyledGoBackButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  margin: 1em;
`;
