import WeekdayOptionsCard from "../Card/WeekdayOptionsCard/WeekdayOptionsCard";
import RestartQuizButton from "../Buttons/RestartQuizButton/RestartQuizButton";
import MiniDayScore from "../Score/MiniDayScore";
import styled from "styled-components";
import { BasicButton } from "../Buttons/buttonStyles";

export default function WeekdayOptions({
  handleSetSelectedFoodCategories,
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
        <h3>{weekDay}</h3>
        <RestartQuizButton
          handleSetSelectedFoodCategories={handleSetSelectedFoodCategories}
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
          <BasicButton type="reset" onClick={handleReset}>
            Zurücksetzen
          </BasicButton>
        </ScoreWrapper>
      )}
    </WeekdayOptionsCard>
  );
}

const DayAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5em;
  justify-content: space-between;
  align-items: baseline;
`;

const ScoreWrapper = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
