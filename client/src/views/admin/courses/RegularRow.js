import React from "react";
import MoreMenu from "./MoreMenu";
import {
  Stack,
  Chip,
  Checkbox,
  TableRow,
  TableCell,
  Typography,
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
  const { id, name, subject, teacher, class: studentsClass } = rowData;
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
            {name}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align="left">{subject.name}</TableCell>

      <TableCell align="left">
        <Stack direction="row" spacing={1}>
          {studentsClass ? (
            <Chip label={studentsClass.name} variant="outlined" />
          ) : (
            "No class"
          )}
        </Stack>
      </TableCell>
      <TableCell align="left">{teacher.fullName}</TableCell>

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
