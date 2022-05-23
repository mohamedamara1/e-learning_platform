import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Attachment from "./Attachment";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";
export default function PostForm(props) {
  const[postText, setpostText] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [attachements, setAttachements] = React.useState([]);
  const Input = styled('input')({
    display: 'none',
  });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleTextChange = event =>{
    setpostText(event.target.value);
    console.log(postText);
  }

  const handleUpload = event => {
    setAttachements(prevattachements => [...prevattachements, ...event.target.files]);
  }
  const handlePost = () => {    console.log(attachements);}

  return (
    
    <div className="my-8 shadow-lg">
      <Card sx={{}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.teacherFullName[0]}
            </Avatar>
          }
          title={props.teacherFullName}
        />
        <CardContent>
        <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          id="standard-multiline-static"
          label="Add A Post"
          multiline
          rows={4}
          placeholder="Write Something..."
          variant="standard"
          value={postText}
          onChange={handleTextChange}
        />
        </FormControl>
        <div className="flex flex-col items-end pt-2">
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleUpload}/>
                <Button size="small" variant="contained" endIcon={<UploadFileIcon />} component="span">
                  Upload
                </Button>
            </label>
        </div>
        <div className="flex flex-col items-end pt-2">
          <Button size="small" variant="contained" endIcon={<SendIcon />} onClick={handlePost}>
            Post
          </Button>
        </div>
        </CardContent>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  );
}