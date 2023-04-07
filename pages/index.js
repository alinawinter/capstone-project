import Layout from "../components/layout";
import ContentCard from "../components/ContentCard/ContentCard";
import FormPreselection from "../components/Form/FormPreselectionFood";
import { useEffect } from "react";

export default function Home({
  handleSetSelectedFoodCategories,
  setSelectedFoodCategories,
  selectedFoodCategories,
}) {
  useEffect(() => {
    setSelectedFoodCategories([]);
  }, []);

  return (
    <Layout>
      <ContentCard>
        <FormPreselection
          setSelectedFoodCategories={setSelectedFoodCategories}
          selectedFoodCategories={selectedFoodCategories}
          handleSetSelectedFoodCategories={handleSetSelectedFoodCategories}
        />
      </ContentCard>
    </Layout>
  );
}
