import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const Attachment = (props) => {
  const iconSwitch = () => {
    switch (props.fileExtension) {
      case "pdf":
        return <PictureAsPdfIcon />;
      default:
        return props.fileExtension;
    }
  };
  return (
    <div className="flex flex-row gap-4 m-6 border wrap p-4 w-max rounded-lg">
      {iconSwitch()}
      <h2>{props.name}</h2>
    </div>
  );
};

export default Attachment;
