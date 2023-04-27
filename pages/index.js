import Layout from "../components/layout";
import WeekdayOptions from "../components/WeekdayOptions/WeekdayOptions";
import { BasicButton } from "../components/Buttons/buttonStyles";
import styled from "styled-components";

export default function Home({
  handleSetSelectedFoodCategories,
  handleDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
  handleCurrentWeekDay,
  currentWeekDay,
  foodCategories,
}) {
  const weekDays = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];

  function handleResetWeek() {
    handleDailyQuizzesResultCollection([]);
  }

  return (
    <Layout>
      <h2>Deine Woche</h2>
      {dailyQuizzesResultCollection.length === 0 && (
        <Description>
          Beginne dein tägliches Quiz, um deinen Wochenscore zu berechnen.
        </Description>
      )}
      <List role="list">
        {weekDays.map((weekDay) => (
          <li key={weekDay}>
            <WeekdayOptions
              key={weekDay}
              handleSetSelectedFoodCategories={handleSetSelectedFoodCategories}
              dailyQuizzesResultCollection={dailyQuizzesResultCollection}
              handleDailyQuizzesResultCollection={
                handleDailyQuizzesResultCollection
              }
              weekDay={weekDay}
              handleCurrentWeekDay={handleCurrentWeekDay}
              currentWeekDay={currentWeekDay}
              foodCategories={foodCategories}
            />
          </li>
        ))}
      </List>
      <BasicButton
        type="reset"
        aria-label="Ergebnisse der ganzen Woche zurücksetzen"
        onClick={handleResetWeek}
      >
        Woche zurücksetzen
      </BasicButton>
    </Layout>
  );
}

const Description = styled.p`
  flex-wrap: wrap;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  padding 0;
  margin-bottom: 1em;
`;
