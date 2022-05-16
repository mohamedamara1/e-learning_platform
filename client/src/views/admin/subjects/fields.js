const fieldsArr = [
  {
    label: "Name",
    name: "name",
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
    label: "Coefficient",
    name: "coefficient",
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
];

export default fieldsArr;
