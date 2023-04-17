let currentEditValue;

const editModeStatus = (method, value) => {
  if (method == "set") {
    currentEditValue = value;
    console.log(1);
    console.log(currentEditValue);
  } else if (method == "get") {
    console.log(2);
    console.log(currentEditValue);
    return currentEditValue;
  } else {
    console.log(3);
  }
};
const updateEditModeDisplay = () => {
  let currentValue = editModeStatus("get", "value");

  if (currentValue == "display") {
    console.log("I should display edit mode");
  } else if (currentValue == "hide") {
    console.log("I should not display edit mode");
  } else {
    console.log("Error");
  }
};

export { editModeStatus, updateEditModeDisplay };
