const fieldsArr = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    validation: (e) => {
      const name = e.target.value;
      if (name.length > 6) {
        return false;
      } else {
        return true;
      }
    },
    error: "Enter a good name",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    validation: (e) => {
      const name = e.target.value;
      if (name.length > 6) {
        return false;
      } else {
        return true;
      }
    },
    error: "Enter a good name",
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    validation: (e) => {
      const name = e.target.value;
      if (name.length < 6) {
        return false;
      } else {
        return true;
      }
    },
    error: "Haha",
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "text",
    validation: (e) => {
      const name = e.target.value;
      if (name.length < 6) {
        return false;
      } else {
        return true;
      }
    },
    error: "Haha",
  },
  {
    label: "Courses",
    name: "courses",
    type: "select",

    error: "Haha",
  },
];

export default fieldsArr;
