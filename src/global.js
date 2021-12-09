// This is a global file for javascript across the project

// to get current timestamp
const getDateTime = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  if (month.toString().length === 1) {
    month = "0" + month;
  }
  if (day.toString().length === 1) {
    day = "0" + day;
  }
  if (hour.toString().length === 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length === 1) {
    minute = "0" + minute;
  }
  if (second.toString().length === 1) {
    second = "0" + second;
  }
  let dateTime =
    year + "-" + month + "-" + day + "_" + hour + "." + minute + "." + second;
  return dateTime;
};

// Method for downloading the image
const onDownload = (file_name, id) => {
  // We have to pass the file_name and id for downloading an image
  const link = document.createElement("a");
  link.download = file_name;
  link.href = document.getElementById(id).src;
  link.click();
};

// Named export of functions
export { getDateTime, onDownload };
