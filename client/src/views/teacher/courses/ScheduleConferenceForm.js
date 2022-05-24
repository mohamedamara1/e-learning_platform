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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import {
  useCreateConference,
  useJoinConference,
} from "../../../api/conferencesApi";
import { MenuItem } from "@mui/material";
import { format, compareAsc } from "date-fns";
import { getUnixTime } from "date-fns";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const durations = [
  { label: "15 mins", value: 15 },
  { label: "30 mins", value: 30 },
  { label: "45 mins", value: 45 },
  { label: "1 hour", value: 60 },
  { label: "1.5 hours", value: 90 },
  { label: "2 hours", value: 120 },
];

export default function ScheduleConferenceForm(props) {
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);
  const [checkedInstant, setCheckedInstant] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const createConference = useCreateConference();
  const joinConference = useJoinConference();

  let navigate = useNavigate();

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
  const handleCreateConference = () => {
    const data = {
      ...formik.values,
      courseId: props.courseId,
    };
    createConference.mutate(data, {
      onSuccess: (resp) => {
        console.log(resp);
        if (resp.status === 200) {
          setSubmitionCompleted(true);
          setAlert(true);
          setAlertContent("Conference created successfully");
        }

        //    setSubmitionCompleted(true);
      },
    });
    //  setOpen(false);
  };

  const handleJoinConference = () => {
    const data = {
      courseId: props.courseId,
    };
    joinConference.mutate(data, {
      onSuccess: (response) => {
        console.log("response", response);
        let path = response.data.url;
        // navigate(path);
      //  window.location.href = path;
        window.open(
          path,
          '_blank' // <- This is what makes it open in a new window.
        );
      },
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      welcomeMessage: "",
      datetime: getUnixTime(Date.now()),
      duration: "60",
      instant: false,
    },
    onSubmit: handleCreateConference,
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Required"),
      welcomeMessage: Yup.string().required("Required"),
      //        comment: Yup.string().required("Required"),
    }),
  });

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
              <DialogContentText>Conference Info</DialogContentText>
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

                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedInstant}
                          onChange={() => {
                            setCheckedInstant(!checkedInstant);
                            formik.setFieldValue("instant", !checkedInstant);
                          }}
                        />
                      }
                      label="Create instant conference"
                    />
                  </FormGroup>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label="Data and time of the conference"
                      ampm={false}
                      defaultValue={formik.values.datetime}
                      onChange={(newDateTime) => {
                        console.log(new Date(newDateTime).getTime() / 1000);
                        formik.setFieldValue(
                          "datetime",
                          new Date(newDateTime).getTime() / 1000
                        );
                      }}
                      renderInput={(params) => <TextField {...params} />}
                      minDate={new Date()}
                      disabled={checkedInstant}
                    />
                  </LocalizationProvider>
                  <TextField
                    error={formik.errors.duration && formik.touched.duration}
                    label="Duration"
                    name="duration"
                    type="number"
                    select
                    defaultValue={formik.values.duration}
                    onBlur={formik.handleBlur}
                    helperText={
                      formik.errors.duration &&
                      formik.touched.duration &&
                      formik.errors.duration
                    }
                    onChange={(newValue) => {
                      formik.setFieldValue("duration", newValue.target.value);
                    }}
                    //   margin="nomal"
                    fullWidth
                    margin="dense"
                    size="small"
                    disabled={checkedInstant}
                  >
                    {durations.map((duration) => (
                      <MenuItem key={duration.value} value={duration.value}>
                        {duration.label}
                      </MenuItem>
                    ))}
                  </TextField>
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
            <DialogTitle id="form-dialog-title">Success!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {alert ? (
                  <Alert severity="success">{alertContent}</Alert>
                ) : (
                  <></>
                )}
              </DialogContentText>
              <DialogActions>
                <Button onClick={handleJoinConference}>Join Conference</Button>
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
