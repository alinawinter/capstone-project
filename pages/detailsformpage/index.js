import Layout from "../../components/layout";
import GoBackButton from "../../components/Buttons/GoBackButton/GoBackButton";
import ContentCard from "../../components/ContentCard/ContentCard";
import FormQuantitySpecification from "../../components/Form/FormQuantitySpecification";

export default function FormDetailspage({
  foodCategory,
  handleSetQuantityPerCategory,
}) {
  return (
    <Layout>
      <GoBackButton />
      <ContentCard>
        <FormQuantitySpecification
          foodCategory={foodCategory}
          handleSetQuantityPerCategory={handleSetQuantityPerCategory}
        />
      </ContentCard>
    </Layout>
  );
}
