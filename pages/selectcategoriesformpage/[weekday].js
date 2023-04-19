import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import FormPreselection from "../../components/Form/FormPreselectionFood";

export default function SelectCategoriesFormPage({
  handleSelectedFoodCategories,
  setSelectedFoodCategories,
  selectedFoodCategories,
}) {
  return (
    <Layout>
      <ContentCard>
        <FormPreselection
          setSelectedFoodCategories={setSelectedFoodCategories}
          selectedFoodCategories={selectedFoodCategories}
          handleSelectedFoodCategories={handleSelectedFoodCategories}
        />
      </ContentCard>
    </Layout>
  );
}
