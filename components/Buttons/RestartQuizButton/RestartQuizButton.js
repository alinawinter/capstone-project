import styled from "styled-components";
import { BasicButton } from "../buttonStyles";
import { useRouter } from "next/router";

export default function RestartQuizButton({
  setSelectedFoodCategories,
  weekDay,
  handleCurrentWeekDay,
  handleDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
  isQuizTaken,
}) {
  const router = useRouter();

  function handleClick() {
    handleCurrentWeekDay(weekDay);
    setSelectedFoodCategories([]);
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
  width: 11em;
  height: 1em;
`;
