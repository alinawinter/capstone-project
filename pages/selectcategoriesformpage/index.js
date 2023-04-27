import Layout from "../../components/layout";
import DailyQuizCard from "../../components/Card/DailyQuizCard/DailyQuizCard";
import FormPreselection from "../../components/Form/FormPreselectionFood";

export default function SelectCategoriesFormPage({
  handleSelectedFoodCategories,
  handleSetSelectedFoodCategories,
  selectedFoodCategories,
}) {
  return (
    <Layout>
      <DailyQuizCard>
        <FormPreselection
          handleSetSelectedFoodCategories={handleSetSelectedFoodCategories}
          selectedFoodCategories={selectedFoodCategories}
          handleSelectedFoodCategories={handleSelectedFoodCategories}
        />
      </DailyQuizCard>
    </Layout>
  );
}
