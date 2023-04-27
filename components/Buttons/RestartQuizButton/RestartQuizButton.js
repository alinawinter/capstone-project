import styled from "styled-components";
import { BasicButton } from "../buttonStyles";
import { useRouter } from "next/router";

export default function RestartQuizButton({
  handleSetSelectedFoodCategories,
  weekDay,
  handleCurrentWeekDay,
  handleDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
  isQuizTaken,
}) {
  const router = useRouter();

  function handleClick() {
    handleCurrentWeekDay(weekDay);
    handleSetSelectedFoodCategories([]);
    const updatedQuizCollection = dailyQuizzesResultCollection.filter(
      ({ weekday }) => weekday !== weekDay
    );
    handleDailyQuizzesResultCollection(updatedQuizCollection);
    router.push("/selectcategoriesformpage");
  }

  return (
    <StyledRestartQuizButtonWrapper>
      <BasicButton type="button" onClick={handleClick}>
        {isQuizTaken ? " Quiz neustarten" : "Tagesquiz starten"}
      </BasicButton>
    </StyledRestartQuizButtonWrapper>
  );
}

const StyledRestartQuizButtonWrapper = styled.div`
  height: 1em;
  margin-right: 0;
`;
