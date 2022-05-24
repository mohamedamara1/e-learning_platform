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
import { useAddMaterial } from '../../../api/materialsApi';

export default function AddMaterialForm(props) {

  const [attachements, setAttachements] = React.useState([]);
  const[name, setname] = React.useState("");
  const [selectedUnit, setselectedUnit] = React.useState('');

  const handleSelect = (event) => {
    setselectedUnit(event.target.value);
  };

  const handleNameChange = event =>{
    setname(event.target.value);
  }
  const handleUpload = event => {
    setAttachements(prevattachements => [...prevattachements, ...event.target.files]);
    console.log(attachements);
  }
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

  const mutation = useAddMaterial(
    {
          name: name,
          courseId: props.courseId,
          url : "https://justtesting.com",
          materialUnitId: selectedUnit
     },
      attachements
    );

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
            value={name}
            onChange={handleNameChange}
          />
          <div className="flex flex-col items-center pt-2">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Material Unit"
          fullWidth
          onChange={handleSelect}
        >
          {props.materialUnits.map((materialUnit, index) => {
            return <MenuItem value={materialUnit.id}>{materialUnit.title}</MenuItem>
          })}
        </Select>
        </div>
          <div className="flex flex-col items-center pt-2">
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleUpload}/>
                <Button size="small" variant="contained" endIcon={<UploadFileIcon />} component="span">
                  Upload
                </Button>
            </label>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => {
           mutation.mutate()
         }}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}