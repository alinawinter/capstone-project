import Layout from "../../components/layout";
import DailyQuizCard from "../../components/Card/DailyQuizCard/DailyQuizCard";
import FormPreselection from "../../components/Form/FormPreselectionFood";

export default function SelectCategoriesFormPage({
  handleSelectedFoodCategories,
  setSelectedFoodCategories,
  selectedFoodCategories,
}) {
  return (
    <Layout>
      <DailyQuizCard>
        <FormPreselection
          setSelectedFoodCategories={setSelectedFoodCategories}
          selectedFoodCategories={selectedFoodCategories}
          handleSelectedFoodCategories={handleSelectedFoodCategories}
        />
      </DailyQuizCard>
    </Layout>
  );
}
