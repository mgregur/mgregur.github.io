import React from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";

export interface CourseEntry {
  name: string;
}

interface CourseTableProps {
  courses: CourseEntry[];
}

interface Column {
  id: "name";
  label: string;
  minWidth?: number;
  width?: number;
  align?: "inherit" | "left" | "center" | "right" | "justify";
}

const columns: readonly Column[] = [
  { id: "name", label: "Course name", minWidth: 170 },
];

const CELL_HEIGHT = 53;

export default function CourseTable({ courses }: CourseTableProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {courses.map((row, index) => {
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
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
