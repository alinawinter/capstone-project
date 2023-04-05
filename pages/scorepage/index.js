import Layout from "../../components/layout";
import Score from "../../components/Score/Score";
import RestartQuizLink from "../../components/Links/RestartQuizLink";

export default function ScorePage({ foodCategory, quantity }) {
  return (
    <Layout>
      <RestartQuizLink />
      <Score quantity={quantity} foodCategory={foodCategory} />
    </Layout>
  );
}
