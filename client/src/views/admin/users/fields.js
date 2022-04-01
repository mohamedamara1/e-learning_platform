const fieldsArr = [
  {
    label: "Name",
    name: "name",
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
    validation: (e) => {
      const name = e.target.value;
      if (name.length > 6) {
        return false;
      } else {
        return true;
      }
    },
    error: "Haha",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    validation: (e) => {
      const name = e.target.value;
      if (name.length > 6) {
        return false;
      } else {
        return true;
      }
    },
    error: "Haha",
  },
];

export default fieldsArr;
