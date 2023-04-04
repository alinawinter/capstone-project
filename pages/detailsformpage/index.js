import Layout from "../../components/layout";
import FormQuantitySpecification from "../../components/Form/FormQuantitySpecification";
import StyledBackLink from "../../components/Links/BackLink";
import BasicLink from "../../components/Links/Link";

export default function FormDetailspage({
  foodCategory,
  handleSetQuantityPerCategory,
}) {
  return (
    <Layout>
      <StyledBackLink />
      <FormQuantitySpecification
        foodCategory={foodCategory}
        handleSetQuantityPerCategory={handleSetQuantityPerCategory}
      />
    </Layout>
  );
}
