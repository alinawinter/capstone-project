import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import Score from "../../components/Score/Score";
import { BasicButton } from "../../components/Buttons/buttonStyles";
import { useRouter } from "next/router";

export default function ScorePage({
  selectedFoodCategories,
  setDailyQuizzesResultCollection,
}) {
  const router = useRouter();

  function handleSaveAndStartPage() {
    setDailyQuizzesResultCollection(selectedFoodCategories);
    router.push("/");
  }

  return (
    <Layout>
      <ContentCard>
        <h2>Tagesscore</h2>
        <Score selectedFoodCategories={selectedFoodCategories} />
        <BasicButton
          onClick={handleSaveAndStartPage}
          aria-label="Ergebnis speichern und zurück zur Startseite"
        >
          Speichern und zur Startseite
        </BasicButton>
      </ContentCard>
    </Layout>
  );
}
