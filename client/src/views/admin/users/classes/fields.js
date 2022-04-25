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
    label: "Population",
    name: "population",
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
