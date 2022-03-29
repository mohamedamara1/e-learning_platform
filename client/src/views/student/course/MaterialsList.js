import React, { useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useGetMaterialUnitsByCourseIdIncludeMaterialsQuery } from "../../../api/materialsApi";

export default function MaterialsList(props) {
  useEffect(() => {
    console.count("materials tab render");
  });
  const {
    data: materialUnits,
    error,
    isLoading,
  } = useGetMaterialUnitsByCourseIdIncludeMaterialsQuery({
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
        <h1>Loading materials!</h1>
      ) : (
        materialUnits.map((materialUnit, index) => {
          return (
            <TreeItem
              nodeId={index}
              label={materialUnit.title}
              sx={{
                color: "#679436",
                fontSize: "large",
              }}
            >
              {materialUnit.courseMaterials.map(
                (courseMaterial, nested_index) => {
                  return (
                    <TreeItem
                      nodeId={index + "" + nested_index}
                      label={courseMaterial.name}
                      sx={{
                        color: "#f1faee",
                        fontSize: "large",
                      }}
                      key={nested_index}
                    />
                  );
                }
              )}
            </TreeItem>
          );
        })
      )}
    </TreeView>
  );
}
