import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import ExerciceAccordion from "./ExerciceAccordion";
export default function PracticeSection(props) {
  console.log(props.practice_items);

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        height: "max-content",
        flexGrow: 1,
      }}
    >
      {props.practice_items.map((chapter_exercices, index) => {
        return (
          <TreeItem
            nodeId={index}
            label={chapter_exercices.title}
            sx={{
              color: "#679436",
              fontSize: "large",
            }}
          >
            {chapter_exercices.exercices.map((exercice, nested_index) => {
              return (
                <ExerciceAccordion
                  margin="m-4"
                  id={exercice.exerciceId}
                  title={exercice.exerciceTitle}
                  text={exercice.exerciceText}
                  publishDate={exercice.publishDate}
                  isAssignment={exercice.isAssignment}
                  deadlineDate={exercice.deadlineDate}
                  submissionState={exercice.submissionState}
                  attachments={exercice.attachments}
                />
              );
            })}
          </TreeItem>
        );
      })}
    </TreeView>
  );
}
