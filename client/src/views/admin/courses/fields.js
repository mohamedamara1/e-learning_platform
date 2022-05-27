const fieldsArr = [
  {
    label: "Name",
    name: "name",
    type: "text",
    validation: (e) => {
      const name = e.target.value;
      if (name.length < 1) {
        return false;
      } else {
        return true;
      }
    },
    error: "Enter a good name",
  },
  {
    label: "Subject",
    name: "subject",
    type: "select",
    error: "Enter a good name",
  },
  {
    label: "Class",
    name: "class",
    type: "select",
    error: "Haha",
  },
  {
    label: "Teacher",
    name: "teacher",
    type: "select",
    error: "Haha",
  },
];

export default fieldsArr;
