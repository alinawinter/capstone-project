import Layout from "../components/layout";
import ContentCard from "../components/ContentCard/ContentCard";
import FormPreselection from "../components/Form/FormPreselectionFood";

export default function Home({ foodCategory, handleSetFoodCategory }) {
  return (
    <Layout>
      <ContentCard>
        <FormPreselection
          foodCategory={foodCategory}
          handleSetFoodCategory={handleSetFoodCategory}
        />
      </ContentCard>
    </Layout>
  );
}
