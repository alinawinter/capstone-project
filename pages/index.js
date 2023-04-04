import Layout from "../components/layout";
import FormPreselection from "../components/Form/FormPreselectionFood";

export default function Home({ foodCategory, handleSetFoodCategory }) {
  return (
    <Layout>
      <FormPreselection
        foodCategory={foodCategory}
        handleSetFoodCategory={handleSetFoodCategory}
      />
    </Layout>
  );
}
