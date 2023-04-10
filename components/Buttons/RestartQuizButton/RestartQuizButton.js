import styled from "styled-components";
import { BasicButton } from "../buttonStyles";
import { useRouter } from "next/router";

export default function RestartQuizButton({ setSelectedFoodCategories }) {
  const router = useRouter();

  function handleClick() {
    setSelectedFoodCategories([]);
    router.push("/");
  }

  return (
    <StyledRestartQuizButtonWrapper>
      <BasicButton onClick={handleClick}>{`< Restart Quiz`}</BasicButton>
    </StyledRestartQuizButtonWrapper>
  );
}

const StyledRestartQuizButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  margin: 1em;
`;
