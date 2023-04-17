import styled from "styled-components";
import { BasicButton } from "../buttonStyles";
import { useRouter } from "next/router";

export default function RestartQuizButton({ setSelectedFoodCategories, text }) {
  const router = useRouter();

  function handleClick() {
    setSelectedFoodCategories([]);
    router.push("/selectcategoriesformpage");
  }

  return (
    <StyledRestartQuizButtonWrapper>
      <BasicButton aria-label="Quiz neu starten" onClick={handleClick}>
        {text}
      </BasicButton>
    </StyledRestartQuizButtonWrapper>
  );
}

const StyledRestartQuizButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 3em;
  width: 10em;
  height: 5em;
`;
