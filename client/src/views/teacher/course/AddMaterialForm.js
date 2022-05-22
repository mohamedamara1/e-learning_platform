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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function AddMaterialForm() {

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
        Add Material
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Material</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Material Name"
            fullWidth
            variant="standard"
          />
          <div className="flex flex-col items-center pt-2">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Material Unit"
          fullWidth
        >
          <MenuItem value={10}>Material Unit N°1</MenuItem>
          <MenuItem value={20}>Material Unit N°2</MenuItem>
          <MenuItem value={30}>Material Unit N°3</MenuItem>
        </Select>
        </div>
          <div className="flex flex-col items-center pt-2">
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button size="small" variant="contained" endIcon={<UploadFileIcon />} component="span">
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