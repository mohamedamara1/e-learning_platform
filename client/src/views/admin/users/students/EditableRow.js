import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableCell,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Chip,
  Box,
  OutlinedInput,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useGetClasses } from "../../../../api/classesApi";
import { maxWidth } from "@mui/system";

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

  const [classesId, setClassesId] = React.useState([]);

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
    setClassesId(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    props.onChange(event);
  };

  useEffect(() => {
    if (previousData && type === "select") {
      console.log(previousData);
      setClassesId(previousData.map((studentsClass) => studentsClass.id));
      console.count("render input select");
      props.onChange({
        target: {
          name: "classes",
          value: previousData.map((studentsClass) => studentsClass.id),
        },
      });
    }
  }, []);

  return (
    <>
      {type === "select" ? (
        <FormControl sx={{ m: 1, width: "50%" }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="select-classes"
            id="select-classes-id"
            name="classes"
            multiple
            value={classesId}
            onChange={handleSelectChange}
            input={<OutlinedInput id="select-multiple-chip" label="Classes" />}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                  width: "100%",
                }}
              >
                {!loadingClasses
                  ? selected.map((selectedClassId) => (
                      <Chip
                        key={selectedClassId}
                        label={
                          classes.find(
                            (studentsClass) =>
                              studentsClass.id === selectedClassId
                          )?.name
                        }
                        sx={{}}
                      />
                    ))
                  : null}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {!loadingClasses ? (
              classes.map((studentsClass) => (
                <MenuItem key={studentsClass.id} value={studentsClass.id}>
                  {`${studentsClass.name}-${studentsClass.studentsClass.name}`}
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
