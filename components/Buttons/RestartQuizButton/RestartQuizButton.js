import styled from "styled-components";
import { BasicButton } from "../buttonStyles";
import { useRouter } from "next/router";

export default function RestartQuizButton({
  setSelectedFoodCategories,
  text,
  weekDay,
  setCurrentWeekDay,
  setDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
}) {
  const router = useRouter();

  function handleClick() {
    setCurrentWeekDay(weekDay);
    setSelectedFoodCategories([]);
    const updatedQuizCollection = dailyQuizzesResultCollection.filter(
      ({ weekday }) => weekday !== weekDay
    );
    setDailyQuizzesResultCollection(updatedQuizCollection);
    router.push(`/selectcategoriesformpage/${weekDay.toLowerCase()}`);
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
  width: 11em;
  height: 1em;
`;
