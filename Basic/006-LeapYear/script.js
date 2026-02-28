const isLapYear = (year) => {
  const check = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  check ? "this is lap year" : "this is not lap year";

  console.log(check);
};

isLapYear(2003);
isLapYear(2016);
isLapYear(2000);
isLapYear(2040);
isLapYear(1945);
