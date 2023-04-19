import Layout from "../components/layout";
import WeekdayOptions from "../components/WeekdayOptions/WeekdayOptions";
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

  return (
    <Layout>
      <h2>Deine Woche</h2>
      <List>
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
    </Layout>
  );
}

const List = styled.ul`
  list-style: none;
  padding 0;
  margin: 0;
`;
