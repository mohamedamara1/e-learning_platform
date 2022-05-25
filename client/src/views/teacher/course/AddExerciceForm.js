import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { styled } from "@mui/material/styles";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function AddExerciceForm() {
  const [value, setValue] = React.useState(null);
  const [selected, setSelected] = React.useState(false);
    const Input = styled('input')({
        display: 'none',
      });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Exercice
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Exercice</DialogTitle>
        <DialogContent>
          <div className="flex items-center pt-2">
          <TextField
            size="small"
            autoFocus
            margin="dense"
            id="name"
            label="Exercice Name"
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
            label="Exercice Description"
            fullWidth
            variant="standard"
          />
          </div>
          <div className="flex flex-col items-center pt-2">
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Practice Unit"
          fullWidth
        >
          <MenuItem value={10}>Practice Unit N°1</MenuItem>
          <MenuItem value={20}>Practice Unit N°2</MenuItem>
          <MenuItem value={30}>Practice Unit N°3</MenuItem>
        </Select>
        
        </div>
        <div className="flex flex-col items-center pt-2">
        <ToggleButton
        size="small"
        fullWidth
        color="primary"
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
      Assignment
    </ToggleButton>
    <div className="flex flex-col items-center pt-2">
    {selected && (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
    size="small"
    fullWidth
      label="DeadLine"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
          )}
          
    </div>
        </div>
          <div className="flex flex-col items-end pt-2">
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button fullWidth size="small" variant="contained" endIcon={<UploadFileIcon />} component="span">
                  Upload
                </Button>
            </label>
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