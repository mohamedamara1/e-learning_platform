import React, { useState } from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
//import withStyles from "@mui/material/";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

export default function ScheduleConferenceForm() {
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      welcomeMessage: "",
      date: Date.now(),
      time: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Required"),
      welcomeMessage: Yup.string().required("Required"),
      //        comment: Yup.string().required("Required"),
    }),
  });

  const handleClickOpen = () => {
    setSubmitionCompleted(false);
    setOpen(true);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreateConference = (e) => {
    console.log(e.target);
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Schedule Conference
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {!isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">
              Schedule Conference
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Send us a comment!</DialogContentText>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col items-center gap-4 mt-4 ">
                  <TextField
                    error={formik.errors.title && formik.touched.title}
                    label="Conference Title"
                    name="title"
                    defaultValue={formik.values.title}
                    onBlur={formik.handleBlur}
                    helperText={
                      formik.errors.title &&
                      formik.touched.title &&
                      formik.errors.title
                    }
                    onChange={(newValue) => {
                      formik.setFieldValue("title", newValue.target.value);
                    }}
                    //   margin="nomal"
                    autoFocus
                    fullWidth
                    margin="dense"
                    size="small"
                  />

                  <TextField
                    error={
                      formik.errors.welcomeMessage &&
                      formik.touched.welcomeMessage
                    }
                    label="Welcome Message"
                    name="welcomeMessage"
                    defaultValue={formik.values.welcomeMessage}
                    onBlur={formik.handleBlur}
                    helperText={
                      formik.errors.welcomeMessage &&
                      formik.touched.welcomeMessage &&
                      formik.errors.welcomeMessage
                    }
                    onChange={(newValue) => {
                      formik.setFieldValue(
                        "welcomeMessage",
                        newValue.target.value
                      );
                      console.log(newValue.target.value);
                      console.log(formik.values);
                    }}
                    fullWidth
                    margin="dense"
                    size="small"
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      size="small"
                      fullWidth
                      label="Conference Date"
                      value={formik.values.date}
                      onChange={(newDate) => {
                        formik.setFieldValue("date", newDate);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                      label="Conference Time"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>

                <DialogActions>
                  <Button
                    type="button"
                    className="outline"
                    onClick={formik.handleReset}
                    disabled={!formik.dirty || formik.isSubmitting}
                  >
                    Reset
                  </Button>
                  <Button type="submit" disabled={formik.isSubmitting}>
                    Submit
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </React.Fragment>
        )}
        {isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Thanks!</DialogTitle>
            <DialogContent>
              <DialogContentText>Thanks</DialogContentText>
              <DialogActions>
                <Button type="button" className="outline" onClick={handleClose}>
                  Back to app
                </Button>
              </DialogActions>
            </DialogContent>
          </React.Fragment>
        )}
      </Dialog>
    </React.Fragment>
  );
}
