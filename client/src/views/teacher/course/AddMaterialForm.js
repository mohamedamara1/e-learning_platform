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
import InputLabel from '@mui/material/InputLabel';
import { useAddMaterial } from '../../../api/materialsApi';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function AddMaterialForm(props) {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const formData = new FormData();
  const [file, setfile] = React.useState([]);
  const[name, setname] = React.useState("");
  const [selectedUnit, setselectedUnit] = React.useState('');
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClick = () => {
    setOpenAlert(true);
  };

  const handleSelect = (event) => {
    setselectedUnit(event.target.value);
  };

  const handleNameChange = event =>{
    setname(event.target.value);
  }
  const handleUpload = event => {
    setfile(event.target.files[0]);
    /*console.log(attachements);
    console.log(formData);*/
  }
    const Input = styled('input')({
        display: 'none',
      });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  const mutation = useAddMaterial(
      formData
    );

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Material
      </Button>

      <Dialog open={open} onClose={handleCloseForm}>
        <DialogTitle>Add Material</DialogTitle>
        <DialogContent>
        <form action="/profile" method="post" enctype="multipart/form-data">
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
            
                <Input name="file" accept="image/*" id="contained-button-file" type="file" onChange={handleUpload}/>
             
                <Button size="small" variant="contained" endIcon={<UploadFileIcon />} component="span">
                  Upload
                </Button>
            </label>
            </div>
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={() => {
            formData.append('file', file);
            formData.append('name', name);
            formData.append('courseId', props.courseId);
            formData.append('url', "");
            formData.append('materialUnitId', selectedUnit);
            handleClick();
            handleCloseForm();
           mutation.mutate()
         }}>Add</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Material Added Succesfully!
        </Alert>
      </Snackbar>
    </div>
  );
}