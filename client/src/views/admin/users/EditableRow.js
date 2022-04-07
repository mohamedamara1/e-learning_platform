import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
const Input = ({
  name,
  type,
  error,
  validation,
  childHasError,
  columnDataArr,
  value,
  tableName,
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
      <div>
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={handleOnChange}
        />
        <p>{hasError && error}</p>
      </div>
    </>
  );
};

/*const OurSelect = ({
  name,
  value,
  selectMessage,
  options,
  classes,
  tableName,
  ...props
}) => {
  const handleSelect = (e) => {
    props.onChange(e);
  };
  return (
    <FormControl
      className={classNames(
        classes.selectFormControl,
        `selectFormControl_${tableName}`
      )}
    >
      <InputLabel
        className={classNames(
          classes.selectInputLabel,
          `selectInputLabel_${tableName}`
        )}
        htmlFor={name}
      >
        {selectMessage}
      </InputLabel>
      <Select
        className={classNames(classes.select, `select_${tableName}`)}
        value={value || ""}
        onChange={handleSelect}
        inputProps={{
          name: name,
          id: name,
        }}
      >
        {(options || []).map((item) => {
          return (
            <MenuItem
              className={classNames(
                classes.selectMenuItem,
                `selectMenutItem_${tableName}`
              )}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};*/

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
            {/*    {item.type === "select" ? (
              <OurSelect
                tableName={tableName}
                classes={{
                  ...selectClasses,
                }}
                name={item.name}
                onChange={handleOnChange}
                options={item.options}
                value={rowData[item.name]}
                childHasError={(bool) => setRowHasError(bool)}
                error={item.error}
                selectMessage={item.selectMessage}
                validation={item.validation}
              />
            ) : (   */}
            <Input
              columnDataArr={(allRowsData || []).map(
                (obj) => obj.rowData[item.name]
              )}
              tableName={tableName}
              type={item.type}
              name={item.name}
              onChange={handleOnChange}
              value={rowData[item.name]}
              item={item.name}
              childHasError={(bool) => setRowHasError(bool)}
              error={item.error}
              validation={item.validation}
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
