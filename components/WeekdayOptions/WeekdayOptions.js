import WeekdayOptionsCard from "./WeekdayOptionsCard";
import RestartQuizButton from "../Buttons/RestartQuizButton/RestartQuizButton";
import MiniScore from "../Score/MiniScore";
import styled from "styled-components";
import { BasicButton } from "../Buttons/buttonStyles";

export default function WeekdayOptions({
  setSelectedFoodCategories,
  dailyQuizzesResultCollection,
  setDailyQuizzesResultCollection,
  weekDay,
  setCurrentWeekDay,
}) {
  function handleReset() {
    const updatedQuizCollection = dailyQuizzesResultCollection.filter(
      ({ weekday }) => weekday !== weekDay
    );
    setDailyQuizzesResultCollection(updatedQuizCollection);
  }

  return (
    <WeekdayOptionsCard
      dailyQuizzesResultCollection={dailyQuizzesResultCollection}
      weekDay={weekDay}
    >
      <DayAndButtonWrapper>
        <h3>{weekDay}</h3>
        <RestartQuizButton
          setSelectedFoodCategories={setSelectedFoodCategories}
          weekDay={weekDay}
          setCurrentWeekDay={setCurrentWeekDay}
          setDailyQuizzesResultCollection={setDailyQuizzesResultCollection}
          dailyQuizzesResultCollection={dailyQuizzesResultCollection}
        />
      </DayAndButtonWrapper>
      {dailyQuizzesResultCollection.some(
        (object) => object.weekday === weekDay
      ) && (
        <ScoreWrapper>
          <p>Letzter Tagesscore:</p>
          <MiniScore
            dailyQuizzesResultCollection={dailyQuizzesResultCollection}
            weekDay={weekDay}
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
  align-items: baseline;
  justify-content: space-around;
  width: 100%;
`;

const ScoreWrapper = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  gap: 1em;
`;

const ResetButtonWrapper = styled.div`
  width: 11em;
  height: 1em;
`;
