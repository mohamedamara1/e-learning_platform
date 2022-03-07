import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import materials_items from "../../../assets/json/materials_items.json";
import Post from "./Post";
import MaterialsList from "./MaterialsList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log("panel number " + index + "loaded");
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{value === index && children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabComponent(props) {
  console.log(materials_items);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Timeline" {...a11yProps(0)} />
          <Tab label="Materials" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flex justify-center">
          <div className=" w-full lg:w-2/3 xl:w-1/2 gap-2 ">
            {props.posts.map((post, index) => {
              return (
                <Post
                  author={post.author}
                  created_at={post.created_at}
                  text={post.text}
                  attachments={post.attachments}
                />
              );
            })}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className=" flex justify-center">
          <div className=" w-full lg:w-2/3 xl:w-1/2 bg-bluu-3 rounded-2xl text-white-kids p-6   ">
            <MaterialsList materials_items={materials_items} />
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
