const fieldsArr = [
  {
    label: "First Name",
    name: "firstName",
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
];

export default fieldsArr;
