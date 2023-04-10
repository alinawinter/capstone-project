import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import Score from "../../components/Score/Score";
import RestartQuizButton from "../../components/Buttons/RestartQuizButton/RestartQuizButton";

export default function ScorePage({
  selectedFoodCategories,
  setSelectedFoodCategories,
}) {
  return (
    <Layout>
      <ContentCard>
        <Score selectedFoodCategories={selectedFoodCategories} />
        <RestartQuizButton
          setSelectedFoodCategories={setSelectedFoodCategories}
          selectedFoodCategories={selectedFoodCategories}
        />
      </ContentCard>
    </Layout>
  );
}
