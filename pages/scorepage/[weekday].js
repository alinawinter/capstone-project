import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import DayScore from "../../components/Score/DayScore";
import { BasicButton } from "../../components/Buttons/buttonStyles";
import { useRouter } from "next/router";
import { mergeArrayAllFoodAndSelectedFood } from "../../utils/mergeSelectedAndOtherFoodUtils";

export default function ScorePage({
  selectedFoodCategories,
  handleDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
  currentWeekDay,
  foodCategories,
}) {
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

    let quizForWeekdayAlreadyExists = false;
    for (let i = 0; i < dailyQuizzesResultCollection.length; i++) {
      if (
        dailyQuizzesResultCollection[i].weekday ===
        newObjectForWeeklyCollection.weekday
      ) {
        quizForWeekdayAlreadyExists = true;
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
      <ContentCard>
        <h2>Tagesscore</h2>
        <DayScore
          selectedFoodCategories={selectedFoodCategories}
          foodCategories={foodCategories}
        />
        <BasicButton onClick={handleSaveAndStartPage} type="button">
          Speichern und zur Wochenübersicht
        </BasicButton>
      </ContentCard>
    </Layout>
  );
}
