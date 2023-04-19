import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import Score from "../../components/Score/Score";
import { BasicButton } from "../../components/Buttons/buttonStyles";
import { useRouter } from "next/router";

export default function ScorePage({
  selectedFoodCategories,
  setDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
  currentWeekDay,
}) {
  const router = useRouter();

  function handleSaveAndStartPage() {
    const newObjectForWeeklyCollection = {
      weekday: currentWeekDay,
      data: selectedFoodCategories,
    };

    setDailyQuizzesResultCollection([
      ...dailyQuizzesResultCollection,
      newObjectForWeeklyCollection,
    ]);
    router.push("/");
  }

  return (
    <Layout>
      <ContentCard>
        <h2>Tagesscore</h2>
        <Score selectedFoodCategories={selectedFoodCategories} />
        <BasicButton
          onClick={handleSaveAndStartPage}
          aria-label="Ergebnis speichern und zur Wochenübersicht"
        >
          Speichern und zur Wochenübersicht
        </BasicButton>
      </ContentCard>
    </Layout>
  );
}
