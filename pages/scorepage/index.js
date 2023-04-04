import Layout from "../../components/layout";
import Score from "../../components/Score";
import StyledBackLink from "../../components/Links/BackLink";

export default function ScorePage({ foodCategory, quantity }) {
  return (
    <Layout>
      <StyledBackLink />
      <Score quantity={quantity} foodCategory={foodCategory} />
    </Layout>
  );
}
