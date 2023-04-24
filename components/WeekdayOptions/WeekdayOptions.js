import WeekdayOptionsCard from "../Card/WeekdayOptionsCard";
import RestartQuizButton from "../Buttons/RestartQuizButton/RestartQuizButton";
import MiniDayScore from "../Score/MiniDayScore";
import styled from "styled-components";
import { BasicButton } from "../Buttons/buttonStyles";

export default function WeekdayOptions({
  setSelectedFoodCategories,
  dailyQuizzesResultCollection,
  handleDailyQuizzesResultCollection,
  weekDay,
  handleCurrentWeekDay,
  foodCategories,
}) {
  function handleReset() {
    const updatedQuizCollection = dailyQuizzesResultCollection.filter(
      ({ weekday }) => weekday !== weekDay
    );
    handleDailyQuizzesResultCollection(updatedQuizCollection);
  }

  const isQuizTaken = dailyQuizzesResultCollection.some(
    (dailyQuiz) => dailyQuiz.weekday === weekDay
  );

  return (
    <WeekdayOptionsCard
      dailyQuizzesResultCollection={dailyQuizzesResultCollection}
      weekDay={weekDay}
      isQuizTaken={isQuizTaken}
    >
      <DayAndButtonWrapper>
        <StyledHeading>{weekDay}</StyledHeading>
        <RestartQuizButton
          setSelectedFoodCategories={setSelectedFoodCategories}
          weekDay={weekDay}
          handleCurrentWeekDay={handleCurrentWeekDay}
          handleDailyQuizzesResultCollection={
            handleDailyQuizzesResultCollection
          }
          dailyQuizzesResultCollection={dailyQuizzesResultCollection}
          isQuizTaken={isQuizTaken}
        />
      </DayAndButtonWrapper>
      {dailyQuizzesResultCollection.some(
        (dailyQuiz) => dailyQuiz.weekday === weekDay
      ) && (
        <ScoreWrapper>
          <p>Letzter Tagesscore:</p>
          <MiniDayScore
            dailyQuizzesResultCollection={dailyQuizzesResultCollection}
            weekDay={weekDay}
            foodCategories={foodCategories}
          />
          <ResetButtonWrapper>
            <BasicButton type="reset" onClick={handleReset}>
              Zurücksetzen
            </BasicButton>
          </ResetButtonWrapper>
        </ScoreWrapper>
      )}
    </WeekdayOptionsCard>
  );
}

const DayAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
  gap: 1.5em;
`;

const StyledHeading = styled.h3`
  margin-inline: auto;
`;

const ScoreWrapper = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ResetButtonWrapper = styled.div`
  width: 11em;
  margin-left: 1em;
`;
