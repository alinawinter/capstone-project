import Layout from "../../components/layout";
import DailyQuizCard from "../../components/Card/DailyQuizCard/DailyQuizCard";
import DayScore from "../../components/Score/DayScore";
import { BasicButton } from "../../components/Buttons/buttonStyles";
import { useRouter } from "next/router";
import { mergeArrayAllFoodAndSelectedFood } from "../../utils/mergeSelectedAndOtherFoodUtils";
import { useState } from "react";

export default function DayScorePage({
  selectedFoodCategories,
  handleDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
  currentWeekDay,
  foodCategories,
}) {
  const [quizForWeekdayAlreadyExists, setQuizForWeekdayAlreadyExists] =
    useState(false);
  const router = useRouter();

  function handleSaveAndStartPage() {
    const mergedArrayAllFoodAndSelectedFood = mergeArrayAllFoodAndSelectedFood(
      foodCategories,
      selectedFoodCategories
    );

    const newObjectForWeeklyCollection = {
      weekday: currentWeekDay,
      data: mergedArrayAllFoodAndSelectedFood,
    };

    for (let i = 0; i < dailyQuizzesResultCollection.length; i++) {
      if (
        dailyQuizzesResultCollection[i].weekday ===
        newObjectForWeeklyCollection.weekday
      ) {
        setQuizForWeekdayAlreadyExists(true);
        alert(
          "Deine Daten für diesen Tag wurden bereits gespeichert. Bitte gehe zurück zur Startseite. Dort hast du die Möglichkeit, das Quiz neu zu starten"
        );
        break;
      }
    }

    if (!quizForWeekdayAlreadyExists) {
      handleDailyQuizzesResultCollection([
        ...dailyQuizzesResultCollection,
        newObjectForWeeklyCollection,
      ]);
      router.push("/");
    }
  }

  return (
    <Layout>
      <DailyQuizCard>
        <h2>Tagesscore</h2>
        <DayScore
          selectedFoodCategories={selectedFoodCategories}
          foodCategories={foodCategories}
        />
        <BasicButton onClick={handleSaveAndStartPage} type="button">
          Speichern und zur Wochenübersicht
        </BasicButton>
      </DailyQuizCard>
    </Layout>
  );
}
