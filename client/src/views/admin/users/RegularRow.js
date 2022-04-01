import React from "react";
import MoreMenu from "./MoreMenu";
import {
  Card,
  Table,
  Stack,
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
  const { id, name, email, phoneNumber, avatarUrl } = rowData;
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
          onChange={(event) => handleClick(event, name)}
        />
      </TableCell>
      <TableCell component="th" scope="row" padding="none">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={name} src={avatarUrl} />
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{phoneNumber}</TableCell>

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
