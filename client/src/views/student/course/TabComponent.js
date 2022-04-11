import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MaterialsList from "./MaterialsList";
import practice_items from "../../../assets/json/assignments.json";
import PracticeSection from "./PracticeSection";
import Timeline from "./Timeline";
import { useGetCourse } from "../../../api/coursesApi";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  useEffect(() => {
    console.log("panel number " + index + "mounted");
  }, []);
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
          <Typography>{children}</Typography>
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

export const TabComponent = (props) => {
  const {
    data: course,
    error,
    isLoading,
  } = useGetCourse({ courseId: props.courseId });
  console.log(course);
  console.log("courseId", props.courseId);

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
          <Tab label="Practice" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flex justify-center">
          <div className=" w-full lg:w-2/3 xl:w-1/2 gap-2 ">
            <Timeline
              isLoading={isLoading}
              posts={!isLoading ? course.posts : null}
              courseId={props.courseId}
              teacherFullName={!isLoading ? course.teacher.fullName : null}
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className=" flex justify-center">
          <div className=" w-full lg:w-2/3 xl:w-1/2 bg-bluu-3 rounded-2xl text-white-kids p-6   ">
            <MaterialsList courseId={props.courseId} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className=" flex justify-center">
          <div className=" w-full lg:w-2/3 xl:w-1/2 bg-bluu-3 rounded-2xl text-white-kids p-6   ">
            <PracticeSection courseId={props.courseId} />
          </div>
        </div>
      </TabPanel>
    </Box>
  );
};
