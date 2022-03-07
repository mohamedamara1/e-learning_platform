import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const Attachment = (props) => {
  return (
    <div className="flex flex-row gap-4 m-6 border wrap p-4 w-max rounded-lg">
      {props.type == "pdf" ? <PictureAsPdfIcon /> : null}
      <h2>{props.name}</h2>
    </div>
  );
};

export default Attachment;
