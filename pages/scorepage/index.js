import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import Score from "../../components/Score/Score";
import RestartQuizLink from "../../components/Links/RestartQuizLink";
import GoBackButton from "../../components/Buttons/GoBackButton/GoBackButton";

export default function ScorePage({ foodCategory, quantity }) {
  return (
    <Layout>
      <GoBackButton />
      <ContentCard>
        <Score quantity={quantity} foodCategory={foodCategory} />
        <RestartQuizLink />
      </ContentCard>
    </Layout>
  );
}
