import styled from "styled-components";
import { BasicButton } from "../buttonStyles";
import { useRouter } from "next/router";

export default function RestartQuizButton({
  setSelectedFoodCategories,
  weekDay,
  setCurrentWeekDay,
  setDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
}) {
  const router = useRouter();
  const quizTaken = dailyQuizzesResultCollection.some(
    (obj) => obj.weekday === weekDay
  );

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
        {quizTaken ? "Quiz neustarten" : "Quiz starten"}
      </BasicButton>
    </StyledRestartQuizButtonWrapper>
  );
}

const StyledRestartQuizButtonWrapper = styled.div`
  width: 11em;
  height: 1em;
`;
