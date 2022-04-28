import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

import { useGetCourses } from "../../../api/coursesApi";
import { useGetTeachers } from "../../../api/usersApi";
import { useGetClasses } from "../../../api/classesApi";
import { useGetSubjects } from "../../../api/subjectsApi";

const useGetItems = (name) => {
  switch (name) {
    case "class":
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useGetClasses({ userId: "test" });
    case "teacher":
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useGetTeachers({ userId: "test" });
    case "subject":
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useGetSubjects({ userId: "test" });
    default:
      return {
        data: [],
        error: null,
        isLoading: false,
      };
  }
};

const InputSelect = ({
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
  const {
    data: items,
    error: itemsError,
    isLoading: loadingItems,
  } = useGetItems(name);
  console.log(items);

  const [hasError, setError] = useState(false);

  const [itemId, setItemId] = React.useState("");

  const handleSelectChange = (event) => {
    console.log(event);
    const {
      target: { value },
    } = event;
    setItemId(value);
    props.onChange(event);
  };

  useEffect(() => {
    if (previousData) {
      console.log(previousData);
      setItemId(previousData.id);
      console.count("render input select");
      props.onChange({
        target: {
          name,
          value: previousData.id,
        },
      });
    }
  }, []);

  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <InputLabel id="demo-simple-select-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name={name}
        value={itemId}
        onChange={handleSelectChange}
      >
        {!loadingItems ? (
          name === "teacher" ? (
            items.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {`${item.fullName}`}
              </MenuItem>
            ))
          ) : (
            items.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {`${item.name}`}
              </MenuItem>
            ))
          )
        ) : (
          <div>loading items</div>
        )}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
