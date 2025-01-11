import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Box,
} from "@mui/material";
import React from "react";

export interface CourseEntry {
  name: string;
  grade: number;
}

interface CourseTableProps {
  courses: CourseEntry[];
}

interface Column {
  id: "name" | "grade";
  label: string;
  minWidth?: number;
  width?: number;
  align?: "inherit" | "left" | "center" | "right" | "justify";
}

const columns: readonly Column[] = [
  { id: "name", label: "Course", minWidth: 170 },
  { id: "grade", label: "Grade(1 to 5)", width: 120, align: "center" },
];

const CELL_HEIGHT = 53;

export default function CourseTable({ courses }: CourseTableProps) {
  const [page, setPage] = React.useState(0);
  const pageSize = 10;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    height: CELL_HEIGHT,
                    minWidth: column.minWidth,
                    width: column.width,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {courses
              .slice(page * pageSize, page * pageSize + pageSize)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`${row.name}-${index}`}
                  >
                    {columns.map((column) => {
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ height: CELL_HEIGHT }}
                        >
                          {row[column.id]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            {Array.from(
              { length: pageSize - courses.slice(page * pageSize).length },
              (_, index) => (
                <TableRow
                  key={`empty-${index}`}
                  style={{ height: CELL_HEIGHT }}
                >
                  <TableCell colSpan={columns.length} />
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={courses.length}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[10]}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
}
