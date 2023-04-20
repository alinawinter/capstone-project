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
              <TableCell>Lebensmittel</TableCell>
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
            fontFamily: "var(--font-family-text)",
            color: "var(--color-blue)",
            marginBottom: "1em",
          },
        }}
      />
    </>
  );
}

//Hier kriege ich keine Daten rein:
const rows = foodCategories.map((foodCategory) =>
  createData(
    foodCategory.name,
    foodCategory.name,
    foodCategory.name,
    foodCategory.name,
    foodCategory.recommendedConsumption
  )
);
//Dabei wird hierdrauf zugegriffen, um Zuordnung zu rows zu machen   sumOfActualWeeklyConsumptionByFoodCategories[foodCategory.name],
//recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes[foodCategory.name],

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
