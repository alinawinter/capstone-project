import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { foodCategories } from "../../lib/db";
import { useState } from "react";

export default function WeeklyScoreTable({}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer style={{ width: 350 }} component={Paper}>
        <Table size="small" aria-label="simple table">
          <TableHead
            sx={{
              backgroundColor: "var(--color-yellow)",
            }}
          >
            <TableRow
              sx={{
                "& th": {
                  color: "var(--color-blue)",
                  fontFamily: "var(--font-family-text)",
                },
              }}
            >
              <TableCell
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "var(--color-yellow)",
                  position: "sticky",
                  left: "0",
                }}
              >
                Lebensmittel
              </TableCell>
              <TableCell align="right">Dein Score</TableCell>
              <TableCell align="right">Dein Konsum&nbsp;(g)</TableCell>
              <TableCell align="right">
                Empfohlener Konsum für Anzahl an Tagen&nbsp;(g)
              </TableCell>
              <TableCell align="right">Tagesempfehlung&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.foodCategoryName}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "& th, & td": {
                      color: "var(--color-blue)",
                      fontFamily: "var(--font-family-text)",
                    },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      backgroundColor: "white",
                      position: "sticky",
                      left: "0",
                    }}
                  >
                    {row.foodCategoryName}
                  </TableCell>
                  <TableCell align="right">
                    {row.scoreBasedOnNumberOfDays}
                  </TableCell>
                  <TableCell align="right">
                    {row.actualConsumptionOnNumberOfDays}
                  </TableCell>
                  <TableCell align="right">
                    {row.recommendedConsumptionForNumberOfDays}
                  </TableCell>
                  <TableCell align="right">
                    {row.recommendedDailyConsumption}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[7]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          ".MuiTablePagination-toolbar": {
            margin: "1.2em",
          },
          ".MuiTablePagination-displayedRows": {
            color: "var(--color-blue)",
            fontFamily: "var(--font-family-text)",
            fontSize: "1.2em",
          },
          ".MuiTablePagination-selectLabel": {
            color: "var(--color-blue)",
          },
        }}
      />
    </>
  );
}

//Here i cant get data into it from external folders:

const rows = foodCategories.map((foodCategory) =>
  createData(
    foodCategory.name,
    foodCategory.name,
    foodCategory.name,
    foodCategory.name,
    foodCategory.recommendedConsumption
  )
);

/* It is in the end supposed to be something like this, in terms of feeding with data:

const rows = foodCategories.map((foodCategory) =>
  createData(
    foodCategory.name,
    calculateDetailsScoreAccordance(calculateDetailsScoreDeviation, sumOfActualWeeklyConsumptionByFoodCategories[foodCategory.name], recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes[foodCategory.name], maxRangeByFoodCategoryBasedOnNumberQuizzes[foodCategory.name]),
    sumOfActualWeeklyConsumptionByFoodCategories[foodCategory.name],
    recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes[foodCategory.name],
    foodCategory.recommendedConsumption

*/

function createData(
  foodCategoryName,
  scoreBasedOnNumberOfDays,
  actualConsumptionOnNumberOfDays,
  recommendedConsumptionForNumberOfDays,
  recommendedDailyConsumption
) {
  return {
    foodCategoryName,
    scoreBasedOnNumberOfDays,
    actualConsumptionOnNumberOfDays,
    recommendedConsumptionForNumberOfDays,
    recommendedDailyConsumption,
  };
}
