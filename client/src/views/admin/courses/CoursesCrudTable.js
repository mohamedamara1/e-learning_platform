import { filter } from "lodash";

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
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import CourseListHead from "./CourseListHead";

import CourseListToolbar from "./CourseListToolbar";
import MoreMenu from "./MoreMenu";
import RegularRow from "./RegularRow";
import fieldsArr from "./fields";
import EditableRow from "./EditableRow";
import {
  useAddCourse,
  useDeleteCourse,
  useGetCourses,
  useUpdateCourse,
} from "../../../api/coursesApi";

//
const TABLE_HEAD = [
  { id: "name", label: "Name", align: "left" },
  { id: "subject", label: "Subject", align: "left" },
  { id: "class", label: "Class", align: "left" },
  { id: "teacher", label: "Teacher", align: "left" },
  { id: "" },
];
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function applySortFilter(array, comparator, query) {
  console.count("applySortFilter executed");
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0].rowData, b[0].rowData);
    if (order !== 0) return order;
    return a[1].rowData - b[1].rowData;
  });
  if (query) {
    return filter(
      array,
      (_user) =>
        _user.rowData.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export const CoursesCrudTable = () => {
  const {
    status,
    data: courses,
    error,
    isFetching,
    isLoading: loadingCourses,
  } = useGetCourses();

  const addCourse = useAddCourse();
  const updateCourse = useUpdateCourse();
  const deleteCourse = useDeleteCourse();

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditingTable, setIsEditingTable] = useState(false);
  const [allRowsData, setAllRowsData] = useState(
    (loadingCourses ? [] : courses).map((item) => ({
      isEditing: false,
      rowData: item,
    }))
  );
  const [editingIndex, setEditingIndex] = useState(null);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    setAllRowsData(
      applySortFilter(allRowsData, getComparator(order, orderBy), filterName)
    );
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = allRowsData.map((row) => row.rowData.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - courses.length) : 0;

  /*  const filteredUsers = applySortFilter(
    USERLIST,
    getComparator(order, orderBy),
    filterName
  );*/
  useEffect(() => {
    if (filterName === "") {
      setAllRowsData(
        (courses || []).map((item) => ({
          isEditing: false,
          rowData: item,
        }))
      );
    } else {
      setAllRowsData(
        applySortFilter(allRowsData, getComparator(order, orderBy), filterName)
      );
    }
  }, [filterName]);
  useEffect(() => {
    if (courses)
      setAllRowsData(
        (courses || []).map((item) => ({
          isEditing: false,
          rowData: item,
        }))
      );
  }, [courses]);
  useEffect(() => {
    console.log("render");
  });
  // const isUserNotFound = filteredUsers.length === 0;

  const handleSave = async (row) => {
    if (isEditingTable) {
      updateCourse.mutate(row, {
        onSuccess: (updatedCourse) => {
          const newAllRowsData = allRowsData.map((item, i) => {
            if (i === editingIndex) {
              return {
                isEditing: false,
                rowData: updatedCourse.data,
              };
            }
            return item;
          });
          console.log(newAllRowsData);
          setAllRowsData(newAllRowsData);
          setEditingIndex(null);
          setIsEditingTable(false);
        },
      });
    } else {
      addCourse.mutate(row, {
        onSuccess: (response) => {
          setAllRowsData([
            { isEditing: false, rowData: response.data },
            ...allRowsData,
          ]);
          setIsAdding(false);
        },
      });
    }
  };

  const handleCancel = (index) => {
    if (isEditingTable) {
      const arr = allRowsData.map((item, i) => {
        if (i === index) {
          return {
            isEditing: false,
            rowData: item.rowData,
          };
        } else return item;
      });
      setAllRowsData(arr);
      setEditingIndex(null);
      setIsEditingTable(false);
    } else {
      setIsAdding(false);
    }
  };

  const handleDeleteRow = (index) => {
    deleteCourse.mutate(allRowsData[index].rowData.id, {
      onSuccess: () => {
        const arr = allRowsData.filter((item, i) => i !== index);
        setAllRowsData(arr);
      },
    });

    /*const arr = allRowsData.filter((item, i) => i !== index);
    setAllRowsData(arr);*/
  };

  const handleDeleteSelected = () => {
    //  const arr = allRowsData.filter((item, i) => i !== index);
    const arr = allRowsData.filter(
      (item) => !selected.includes(item.rowData.id)
    );
    setAllRowsData(arr);
    setSelected([]);
  };
  const handleEditRow = (index) => {
    const arr = allRowsData.map((item, i) => {
      if (i === index) {
        return {
          isEditing: true,
          rowData: item.rowData,
        };
      } else return item;
    });
    setAllRowsData(arr);
    setEditingIndex(index);
    setIsEditingTable(true);
  };
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          Courses
        </Typography>

        <Button
          disabled={isAdding || isEditingTable}
          onClick={() => setIsAdding(true)}
          variant="contained"
          startIcon={<AiOutlinePlus />}
        >
          Add Course
        </Button>
      </Stack>

      <Card>
        <CourseListToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
          handleDeleteSelected={handleDeleteSelected}
        />
        <TableContainer sx={{ minwidth: 800 }}>
          <Table>
            <CourseListHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={allRowsData.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            />
            {loadingCourses ? (
              <h1>loading</h1>
            ) : (
              <TableBody>
                {isAdding && (
                  <EditableRow
                    allRowsData={allRowsData}
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                    fieldsArr={fieldsArr}
                  />
                )}
                {allRowsData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(({ isEditing, rowData }, i) => {
                    const { id } = rowData;
                    const isItemSelected = selected.indexOf(id) !== -1;
                    return isEditing ? (
                      <EditableRow
                        key={i}
                        isEditing={isEditing}
                        editingIndex={editingIndex}
                        allRowsData={allRowsData}
                        editData={rowData}
                        handleSave={handleSave}
                        handleCancel={handleCancel}
                        fieldsArr={fieldsArr}
                      />
                    ) : (
                      <RegularRow
                        key={i}
                        index={i}
                        rowData={rowData}
                        isAdding={isAdding}
                        isEditingTable={isEditingTable}
                        handleEditRow={handleEditRow}
                        handleDeleteRow={handleDeleteRow}
                        handleClick={handleClick}
                        isItemSelected={isItemSelected}
                      />
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
};

export default CoursesCrudTable;
