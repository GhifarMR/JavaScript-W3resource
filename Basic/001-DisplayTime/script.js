const date = new Date();

const day = date.getDay();

const dayList = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const currentDay = dayList[day];

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const prepend = hour > 12 ? "PM" : "AM";

console.log(`Today is : ${currentDay}`);
console.log(`Current time is : ${hour}.${minute}.${second} ${prepend}`);