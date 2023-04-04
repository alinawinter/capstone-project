import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { foodCategories } from "../lib/db";

export default function App({ Component, pageProps }) {
  const [foodCategory, setFoodCategory] = useState({});
  const [quantity, setQuantity] = useState(0);

  function handleSetFoodCategory(selection) {
    setFoodCategory(
      foodCategories.find((foodCategory) => foodCategory.name === selection)
    );
  }

  function handleSetQuantityPerCategory(data) {
    setQuantity(parseFloat(data.consumedQuantity));
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>FuturePlate</title>
      </Head>
      <Component
        {...pageProps}
        foodCategory={foodCategory}
        handleSetFoodCategory={handleSetFoodCategory}
        handleSetQuantityPerCategory={handleSetQuantityPerCategory}
        quantity={quantity}
      />
    </>
  );
}
