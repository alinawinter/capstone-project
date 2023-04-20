import Layout from "../components/layout";
import WeekdayOptions from "../components/WeekdayOptions/WeekdayOptions";
import WeeklyScore from "../components/Score/WeeklyScore";
import { BasicButton } from "../components/Buttons/buttonStyles";
import styled from "styled-components";

export default function Home({
  setSelectedFoodCategories,
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
              setSelectedFoodCategories={setSelectedFoodCategories}
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
      {dailyQuizzesResultCollection.length !== 0 && (
        <>
          <h2>Bisheriger Wochenscore:</h2>
          <WeeklyScore
            dailyQuizzesResultCollection={dailyQuizzesResultCollection}
            foodCategories={foodCategories}
          />
          <BasicButton
            type="reset"
            aria-label="Ergebnisse der ganzen Woche zurücksetzen"
            onClick={handleResetWeek}
          >
            Woche zurücksetzen
          </BasicButton>
        </>
      )}
    </Layout>
  );
}

const List = styled.ul`
  list-style: none;
  padding 0;
  margin: 0;
`;

const Description = styled.p`
  flex-wrap: wrap;
  text-align: center;
`;
