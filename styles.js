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
    overflow-x: hidden;
    width: 100%:
    height: 100%;
    font-family: ${montserrat.style.fontFamily}, sans-serif;
    background-color: var(--color-beige);
    color: var(--color-blue);
    
  }
  main {
    display: flex;
    flex-direction: column;
    margin-top: 1em auto;
    margin-bottom: 4em;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 83vh;
    overflow: auto;
    padding: 1em;
    gap: 1em;
  }
  h2 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1rem;
  }
  @media only screen and (max-width: 799px) { main {
    width: 100vw;
  }}
  @media only screen and (min-width: 800px) { main {
  width: 640px;
  }}
`;
