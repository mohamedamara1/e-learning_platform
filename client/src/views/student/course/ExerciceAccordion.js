import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Attachment from "./Attachment";
import UploadButton from "./UploadButton";

export default function ExerciceAccordion(props) {
  var classNames = require("classnames");
  var className = classNames(props.margin);
  const handleSubmissionState = () => {
    switch (props.submissionState) {
      case "Missed":
        return "text-red-400";
      case "Submitted Deadline Respect":
        return "text-green-400";
      case "Submitted Late":
        return "text-black-400";
      default:
        break;
    }
  };
  return (
    <div className={className}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="flex justify-between w-full align-middle ">
            <div className="flex flex-col">
              {props.name}
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">
                  Added at: {props.publishDate}
                </span>

                {props.isAssignment == true ? (
                  <span className="text-sm text-gray-500">
                    Deadline: {props.deadlineDate}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className={handleSubmissionState()}>
                {props.submissionState}
              </div>
              {props.isAssignment ? <UploadButton /> : null}
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <div>{props.description}</div>
            </div>
          </Typography>
          {props.attachements.length != 0 ? (
            <div>
              {props.description ? <hr className="mt-4"></hr> : null}

              <div className="flex flex-row gap-4 flex-wrap">
                {props.attachements.map((attachement, index) => {
                  return (
                    <Attachment name={attachement.name} type={attachement.type} />
                  );
                })}
              </div>
            </div>
          ) : null}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
