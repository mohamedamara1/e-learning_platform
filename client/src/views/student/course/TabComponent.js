import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MaterialsList from "./MaterialsList";
import PracticeSection from "./PracticeSection";
import Timeline from "./Timeline";
import Button from "@mui/material/Button";

import { useGetCourse } from "../../../api/coursesApi";
import { useJoinConference } from "../../../api/conferencesApi";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

//gotta add bbb join button

export const TabComponent = (props) => {
  const { data: course, isLoading } = useGetCourse({
    courseId: props.courseId,
  });
  let { userId, accessTokenPayload } = useSessionContext();
  console.log(accessTokenPayload);
  const joinConference = useJoinConference();
  const handleJoinConference = () => {
    const data = {
      courseId: props.courseId,
    };
    joinConference.mutate(data, {
      onSuccess: (response) => {
        console.log("response", response);
        let path = response.data.url;
        // navigate(path);
        //  window.location.href = path;
        window.open(
          path,
          "_blank" // <- This is what makes it open in a new window.
        );
      },
    });
  };
  console.log(userId);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {!isLoading && course.isConferenceHappening && (
        <div className="flex justify-center mb-5">
          <Button onClick={handleJoinConference} color="secondary">
            Join Conference
          </Button>
        </div>
      )}

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
          <div className="w-full gap-2 lg:w-2/3 xl:w-1/2">
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
        <div className="flex justify-center ">
          <div className="w-full p-6 lg:w-2/3 xl:w-1/2 bg-bluu-3 rounded-2xl text-white-kids">
            <MaterialsList courseId={props.courseId} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex justify-center ">
          <div className="w-full p-6 lg:w-2/3 xl:w-1/2 bg-bluu-3 rounded-2xl text-white-kids">
            <PracticeSection courseId={props.courseId} />
          </div>
        </div>
      </TabPanel>
    </Box>
  );
};
