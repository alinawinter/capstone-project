import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import Score from "../../components/Score/Score";
import RestartQuizLink from "../../components/Links/RestartQuizLink";
import GoBackButton from "../../components/Buttons/GoBackButton/GoBackButton";

export default function ScorePage({ selectedFoodCategories }) {
  return (
    <Layout>
      <ContentCard>
        <Score selectedFoodCategories={selectedFoodCategories} />
        <RestartQuizLink />
      </ContentCard>
    </Layout>
  );
}
