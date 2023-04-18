import Layout from "../components/layout";
import WeekdayOptions from "../components/WeekdayOptions/WeekdayOptions";
import { useEffect } from "react";

export default function Home({
  setSelectedFoodCategories,
  setDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
  setCurrentWeekDay,
  currentWeekDay,
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

  console.log(dailyQuizzesResultCollection);

  return (
    <Layout>
      <h2>Deine Woche</h2>
      {weekDays.map((weekDay) => (
        <WeekdayOptions
          key={weekDay}
          setSelectedFoodCategories={setSelectedFoodCategories}
          dailyQuizzesResultCollection={dailyQuizzesResultCollection}
          setDailyQuizzesResultCollection={setDailyQuizzesResultCollection}
          weekDay={weekDay}
          setCurrentWeekDay={setCurrentWeekDay}
          currentWeekDay={currentWeekDay}
        />
      ))}
    </Layout>
  );
}
