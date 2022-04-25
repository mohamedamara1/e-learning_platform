import React, { useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import ExerciceAccordion from "./ExerciceAccordion";
import { useGetExerciceUnitsByCourseIdIncludeExercicesQuery } from "../../../api/exercicesApi";

export default function PracticeSection(props) {
  useEffect(() => {
    console.count("practice tab render");
  });
  const {
    data: practiceUnits,
    error,
    isLoading,
  } = useGetExerciceUnitsByCourseIdIncludeExercicesQuery({
    courseId: props.courseId,
  });
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
      {isLoading ? (
        <h1>Loading exercices!</h1>
      ) : (
        practiceUnits.map((practiceUnit, index) => {
          return (
            <TreeItem
              nodeId={index}
              label={practiceUnit.title}
              sx={{
                color: "#679436",
                fontSize: "large",
              }}
            >
              {practiceUnit.exercices.map((exercice, nested_index) => {
                return (
                  <ExerciceAccordion
                    margin="m-4"
                    id={exercice.exerciceId}
                    name={exercice.name}
                    description={exercice.description}
                    createdAt="default date "
                    isAssignment={exercice.isAssignment}
                    submissionState={exercice.isAssignment ? "Missed" : null}
                    deadlineDate={exercice.deadlineTimestamp}
                    attachements={exercice.exerciceAttachements}
                  />
                );
              })}
            </TreeItem>
          );
        })
      )}
    </TreeView>
  );
}
