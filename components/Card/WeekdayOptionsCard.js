import styled from "styled-components";

export default function WeekdayOptionsCard({
  children,
  dailyQuizzesResultCollection,
  weekDay,
}) {
  return (
    <StyledContainer
      dailyQuizzesResultCollection={dailyQuizzesResultCollection}
      weekDay={weekDay}
    >
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: ${({ dailyQuizzesResultCollection, weekDay }) =>
    dailyQuizzesResultCollection.some((obj) => obj.weekday === weekDay)
      ? "rgba(129, 178, 154, 0.3)"
      : "white"};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.3em;
  padding: 0.6em;
  flex-wrap: wrap;
  height: auto;
  width: 90vw;
  margin: 1em;
  margin-bottom: 0;
  border-radius: 1.5em;
  color: var(--color-blue);
  text-align: center;
`;
