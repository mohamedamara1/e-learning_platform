import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableCell,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Chip,
  Box,
  OutlinedInput,
} from "@mui/material";
import Select from "@mui/material/Select";

import { merge } from "lodash";

import { useTheme } from "@mui/material/styles";
import { useGetClasses } from "../../../../api/classesApi";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
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
  function getStyles(name, classesId, theme) {
    return {
      fontWeight:
        classesId.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const {
    data: classes,
    error: classesError,
    isLoading: loadingClasses,
  } = useGetClasses({ userId: "test" });

  const [hasError, setError] = useState(false);
  const theme = useTheme();

  const [classId, setClassId] = React.useState("");

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
  const handleSelectChange = (event) => {
    console.log(event);
    const {
      target: { value },
    } = event;
    setClassId(value);
    props.onChange(event);
  };

  useEffect(() => {
    if (previousData && type === "select") {
      console.log(previousData);
      setClassId(previousData.id);
      console.count("render input select");
      props.onChange({
        target: {
          name: "class",
          value: previousData.id,
        },
      });
    }
  }, []);

  return (
    <>
      {type === "select" ? (
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel id="demo-simple-select-label">Class</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="class"
            value={classId}
            onChange={handleSelectChange}
          >
            {!loadingClasses ? (
              classes.map((studentsClass) => (
                <MenuItem key={studentsClass.id} value={studentsClass.id}>
                  {`${studentsClass.name}`}
                </MenuItem>
              ))
            ) : (
              <div>loading classes</div>
            )}
          </Select>
        </FormControl>
      ) : (
        <input
          type={type}
          name={name}
          value={previousData || ""}
          onChange={handleOnChange}
        />
      )}
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
    // editData ? Object.assign({}, initializeObj, editData) : initializeObj
    editData ? merge(initializeObj, editData) : initializeObj
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
