// This is a global file for javascript across the project

import domtoimage from "dom-to-image";

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
const onDownload = (imageFormat, fileName, id) => {
  let node = document.getElementById(id);

  if (imageFormat === "jpeg") {
    domtoimage.toJpeg(node).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `${fileName}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  }

  if (imageFormat === "png") {
    domtoimage.toPng(node).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      link.click();
    });
  }
};

// Method for create a confirmation box before doing some action
const get_confirmation = (method) => {
  let r = window.confirm("Are you sure want delete the image?");
  if (r === true) {
    method();
  }
};

// Named export of functions
export { getDateTime, onDownload, get_confirmation };
