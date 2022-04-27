import React from "react";
import MoreMenu from "./MoreMenu";
import {
  Card,
  Table,
  Stack,
  Chip,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
const RegularRow = ({
  index,
  rowData,
  handleEditRow,
  handleDeleteRow,
  isAdding,
  isEditingTable,
  isItemSelected,
  handleClick,
}) => {
  const { id, firstName, lastName, email, phone, courses, avatarUrl } = rowData;
  return (
    <TableRow
      hover
      key={id}
      tabIndex={-1}
      role="checkbox"
      selected={isItemSelected}
      aria-checked={isItemSelected}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          onChange={(event) => handleClick(event, id)}
        />
      </TableCell>
      <TableCell component="th" scope="row" padding="none">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="subtitle2" noWrap>
            {firstName}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align="left">{lastName}</TableCell>

      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{phone}</TableCell>
      <TableCell align="left">
        <Stack direction="row" spacing={1}>
          {courses.length !== 0
            ? courses.map((course) => (
                <Chip
                  key={course.id}
                  label={course.name + " - " + course.class.name}
                  variant="outlined"
                />
              ))
            : "No courses"}
        </Stack>
      </TableCell>

      <TableCell align="right">
        <MoreMenu
          isAdding={isAdding}
          isEditingTable={isEditingTable}
          handleEditRow={() => handleEditRow(index)}
          handleDeleteRow={() => handleDeleteRow(index)}
        />
      </TableCell>
    </TableRow>
  );
};

export default RegularRow;
