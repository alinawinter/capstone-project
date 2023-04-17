import Layout from "../components/layout";
import ContentCard from "../components/ContentCard/ContentCard";
import RestartQuizButton from "../components/Buttons/RestartQuizButton/RestartQuizButton";
import Score from "../components/Score/Score";
import styled from "styled-components";

export default function Home({
  setSelectedFoodCategories,
  dailyQuizzesResultCollection,
}) {
  return (
    <Layout>
      <StartContentWrapper>
        <RestartQuizButton
          setSelectedFoodCategories={setSelectedFoodCategories}
          text="Starte dein tägliches Essensquiz"
        />
        <ScoreTextAndScoreBox>
          <p>Dein letzter Tagesscore:</p>
          <ScoreWrapper>
            <Score
              selectedFoodCategories={dailyQuizzesResultCollection}
              dailyQuizzesResultCollection={dailyQuizzesResultCollection}
            />
          </ScoreWrapper>
        </ScoreTextAndScoreBox>
      </StartContentWrapper>
    </Layout>
  );
}

const StartContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-blue);
  align-items: center;
  gap: 1em;
  padding: 1em;
  flex-wrap: wrap;
  height: auto;
  width: 90vw;
  margin: 1em;
`;

const ScoreTextAndScoreBox = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  & > p {
    margin: 0;
    line-height: 0;
  }
  & > div {
    margin: 0;
  }
`;

const ScoreWrapper = styled.div`
  scale: 60%;
`;
