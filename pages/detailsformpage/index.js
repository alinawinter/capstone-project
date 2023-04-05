import Layout from "../../components/layout";
import FormQuantitySpecification from "../../components/Form/FormQuantitySpecification";
import RestartQuizLink from "../../components/Links/RestartQuizLink";
import BasicLink from "../../components/Links/Link";

export default function FormDetailspage({
  foodCategory,
  handleSetQuantityPerCategory,
}) {
  return (
    <Layout>
      <RestartQuizLink />
      <FormQuantitySpecification
        foodCategory={foodCategory}
        handleSetQuantityPerCategory={handleSetQuantityPerCategory}
      />
    </Layout>
  );
}
