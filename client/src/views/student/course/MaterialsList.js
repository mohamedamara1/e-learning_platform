import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

export default function MaterialsList(props) {
  console.log(props.materials_items);

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
      {props.materials_items.map((category_files, index) => {
        return (
          <TreeItem
            nodeId={index}
            label={category_files.category}
            sx={{
              color: "#679436",
              fontSize: "large",
            }}
          >
            {category_files.items.map((file, nested_index) => {
              return (
                <TreeItem
                  nodeId={index + "" + nested_index}
                  label={file.file_name}
                  sx={{
                    color: "#f1faee",
                    fontSize: "large",
                  }}
                />
              );
            })}
          </TreeItem>
        );
      })}
    </TreeView>
  );
}
