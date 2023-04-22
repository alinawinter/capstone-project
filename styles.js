import { createGlobalStyle } from "styled-components";
import { Abril_Fatface } from "next/font/google";
import { Montserrat } from "next/font/google";

const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root{
--color-beige: #F4F1DE;
--color-orange: #E07A5F;
--color-blue: #3D405B;
--color-green: #81B29A;
--color-yellow: #F2CC8F;
--font-family-heading: ${abrilFatface.style.fontFamily}, cursive;
--font-family-text: ${montserrat.style.fontFamily}, sans-serif; 
  }
  body {
    margin: 0;
    font-family: ${montserrat.style.fontFamily}, sans-serif;
    background-color: var(--color-beige);
    color: var(--color-blue);
  }
  main {
    display: flex;
    flex-direction: column;
    margin-top: 1rem auto;
    margin-bottom: 5rem;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-height: 83vh;
    overflow: auto;
  }
  h2 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1rem;
  }
`;
