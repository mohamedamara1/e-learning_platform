import React, { useEffect, useState } from "react";
import { TableRow, TableCell, Button, Checkbox } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const Input = ({
  name,
  type,
  error,
  validation,
  childHasError,
  columnDataArr,
  previousData,
  tableName,
  setRowData,
  ...props
}) => {
  const [hasError, setError] = useState(false);
  const handleOnChange = (e) => {
    const hasError = validation(e, columnDataArr);
    if (!hasError) {
      childHasError(true);
      setError(true);
    } else {
      childHasError(false);
      setError(false);
    }
    props.onChange(e);
  };

  return (
    <>
      <input
        type={type}
        name={name}
        value={previousData || ""}
        onChange={handleOnChange}
      />
    </>
  );
};

export const EditableRow = ({
  fieldsArr = [],
  editData = {},
  allRowsData,
  tableName,
  editingIndex,
  isEditing,
  ...props
}) => {
  let initializeObj = {};
  fieldsArr.forEach((item) => {
    initializeObj[item.name] = "";
  });
  const [rowHasError, setRowHasError] = useState(false);
  const [rowData, setRowData] = useState(
    editData ? Object.assign({}, initializeObj, editData) : initializeObj
  );
  const handleSave = () => {
    props.handleSave(rowData);
  };
  const handleOnChange = (e) => {
    const updatedData = Object.assign({}, rowData, {
      [e.target.name]: e.target.value,
    });
    setRowData(updatedData);
  };
  const handleCancel = () => {
    if (isEditing) {
      props.handleCancel(editingIndex);
    } else {
      props.handleCancel();
    }
  };
  return (
    <TableRow className="bg-gray-400">
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>
      {fieldsArr.map((item, i) => {
        return (
          <TableCell key={i}>
            <Input
              columnDataArr={(allRowsData || []).map(
                (obj) => obj.rowData[item.name]
              )}
              tableName={tableName}
              type={item.type}
              name={item.name}
              onChange={handleOnChange}
              previousData={rowData[item.name]}
              item={item.name}
              childHasError={(bool) => setRowHasError(bool)}
              error={item.error}
              validation={item.validation}
              setRowData={setRowData}
            />
            {/*)}*/}
          </TableCell>
        );
      })}
      <TableCell>
        <Button disabled={rowHasError} type="button" onClick={handleSave}>
          Save
        </Button>

        <Button onClick={handleCancel}>Cancel</Button>
      </TableCell>
    </TableRow>
  );
};

export default EditableRow;
