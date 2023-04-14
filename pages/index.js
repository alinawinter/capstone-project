import Layout from "../components/layout";
import ContentCard from "../components/ContentCard/ContentCard";
import FormPreselection from "../components/Form/FormPreselectionFood";
import { useEffect } from "react";

export default function Home({
  handleSelectedFoodCategories,
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
          handleSelectedFoodCategories={handleSelectedFoodCategories}
        />
      </ContentCard>
    </Layout>
  );
}
