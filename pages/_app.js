import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { foodCategories } from "../lib/db";

export default function App({ Component, pageProps }) {
  const [foodCategory, setFoodCategory] = useState({});

  function handleSetFoodCategory(selection) {
    setFoodCategory(
      foodCategories.find((foodCategory) => foodCategory.name === selection)
    );
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
      />
    </>
  );
}
