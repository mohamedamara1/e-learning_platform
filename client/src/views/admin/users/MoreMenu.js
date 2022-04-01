import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// component
import { HiDotsVertical } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";

// ----------------------------------------------------------------------

export default function MoreMenu({
  isAdding,
  isEditingTable,
  handleEditRow,
  handleDeleteRow,
}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        disabled={isAdding || isEditingTable}
        ref={ref}
        onClick={() => setIsOpen(true)}
      >
        <HiDotsVertical />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          disabled={isAdding || isEditingTable}
          onClick={handleDeleteRow}
          sx={{ color: "text.secondary" }}
        >
          <ListItemIcon>
            <IoTrashOutline width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Delete"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>

        <MenuItem
          disabled={isAdding || isEditingTable}
          onClick={handleEditRow}
          sx={{ color: "text.secondary" }}
        >
          <ListItemIcon>
            <MdModeEdit width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Edit"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
