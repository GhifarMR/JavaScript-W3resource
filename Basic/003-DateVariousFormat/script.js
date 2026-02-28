const date = new Date();

const dd = date.getDate().toString().padStart(2, "0");
const mm = (date.getMonth() + 1).toString().padStart(2, "0");
const yyyy = date.getFullYear().toString();

console.log("dd/mm/yyyy")
console.log(`${dd}-${mm}-${yyyy}`);
console.log(" ")

console.log("mm/dd/yyyy")
console.log(`${mm}-${dd}-${yyyy}`);

