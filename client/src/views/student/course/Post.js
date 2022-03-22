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
export default function Post(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="my-8 shadow-lg">
      <Card sx={{}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.teacherFullName[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.teacherFullName}
          subheader={props.createdAt}
        />
        <CardContent>
          <Typography variant="body3" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body3" color="text.secondary">
            {props.attachements ? (
              <div>
                <hr></hr>
                <div className="flex flex-row flex-wrap">
                  {props.attachements.map((attachement, index) => {
                    return (
                      <Attachment
                        name={attachement.attachement.name}
                        fileExtension={attachement.attachement.fileExtension}
                      />
                    );
                  })}
                </div>
              </div>
            ) : null}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
