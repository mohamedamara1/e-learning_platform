import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { styled } from "@mui/material/styles";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function ScheduleConferenceForm() {
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Schedule Conference
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule Conference</DialogTitle>
        <DialogContent>
          <div className="flex  items-center pt-2">
          <TextField
            size="small"
            autoFocus
            margin="dense"
            id="name"
            label="Conference Title"
            fullWidth
            variant="standard"
          />
          </div>
          <div className="flex flex-col items-center pt-2">
          <TextField
            size="small"
            autoFocus
            margin="dense"
            id="name"
            label="Conference Description"
            fullWidth
            variant="standard"
          />
          </div>
    <div className="flex flex-col items-center pt-2">
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
    size="small"
    fullWidth
      label="Conference Date"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>        
    </div >
          <div className="flex flex-col items-end pt-2">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
          label="Conference Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}