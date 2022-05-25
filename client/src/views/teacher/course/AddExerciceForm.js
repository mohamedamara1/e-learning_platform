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
import { useAddExercice } from '../../../api/exercicesApi';

export default function AddExerciceForm(props) {
  const [attachements, setAttachements] = React.useState([]);
  const [selectedUnit, setselectedUnit] = React.useState('');

  const handleSelect = (event) => {
    setselectedUnit(event.target.value);
  };

  const[name, setname] = React.useState("");

  const[description, setdescription] = React.useState("");

  const [deadline, setdeadline] = React.useState(null);
  const [selected, setSelected] = React.useState(false);
    const Input = styled('input')({
        display: 'none',
      });
  const [open, setOpen] = React.useState(false);

  const handleUpload = event => {
    setAttachements(prevattachements => [...prevattachements, ...event.target.files]);
    console.log(attachements);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleNameChange = event =>{
    setname(event.target.value);
  }

  const handleDescriptionChange = event =>{
    setdescription(event.target.value);
  }

  const mutation = useAddExercice(
    {
          name: name,
          description: description,
          isAssignment : selected,
          deadlineTimeStamp : deadline,
          courseId: props.courseId,
          practiceUnitId: selectedUnit
     },
      attachements
    );
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
            value={name}
            onChange={handleNameChange}
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
            value={description}
            onChange={handleDescriptionChange}
          />
          </div>
          <div className="flex flex-col items-center pt-2">
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Practice Unit"
          fullWidth
          onChange={handleSelect}
        >
          {props.practiceUnits.map((practiceUnit, index) => {
            return <MenuItem value={practiceUnit.id}>{practiceUnit.title}</MenuItem>
          })}

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
      value={deadline}
      onChange={(deadline) => {
        setdeadline(deadline);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
          )}
          
    </div>
        </div>
          <div className="flex flex-col items-end pt-2">
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleUpload}/>
                <Button fullWidth size="small" variant="contained" endIcon={<UploadFileIcon />} component="span">
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