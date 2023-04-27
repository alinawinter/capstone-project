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
  border-radius: 1.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: auto;
  width: 100%;
  margin-bottom: 1em;
  padding: 1.5em;
`;

/*
display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.3em;
  flex-wrap: wrap;

*/
