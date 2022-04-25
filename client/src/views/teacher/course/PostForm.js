import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Attachment from "./Attachment";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';
export default function PostForm(props) {
  const [expanded, setExpanded] = React.useState(false);
  const Input = styled('input')({
    display: 'none',
  });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <div className="my-8 shadow-lg">
      <Card sx={{}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.teacherFullName}
            </Avatar>
          }
          title={props.teacherFullName}
        />
        <CardContent>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
          id="filled-multiline-flexible"
          label="Write something..."
          multiline
          maxRows={4}
          variant="filled"
        />
        </FormControl>

        <div  className="flex flex-col items-end ">

          </div>
        </CardContent>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  );
}
