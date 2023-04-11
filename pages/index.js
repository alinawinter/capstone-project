import Layout from "../components/layout";
import ContentCard from "../components/ContentCard/ContentCard";
import FormPreselection from "../components/Form/FormPreselectionFood";
import { useEffect } from "react";

export default function Home({
  handleAddSelectedFoodCategories,
  handleDeleteSelectedFoodCategories,
  setSelectedFoodCategories,
  selectedFoodCategories,
}) {
  useEffect(() => {
    setSelectedFoodCategories([]);
  }, [setSelectedFoodCategories]);

  return (
    <Layout>
      <ContentCard>
        <FormPreselection
          setSelectedFoodCategories={setSelectedFoodCategories}
          selectedFoodCategories={selectedFoodCategories}
          handleAddSelectedFoodCategories={handleAddSelectedFoodCategories}
          handleDeleteSelectedFoodCategories={
            handleDeleteSelectedFoodCategories
          }
        />
      </ContentCard>
    </Layout>
  );
}
