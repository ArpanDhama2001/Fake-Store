const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const deliveryDate = () => {
  let date = new Date();
  let day = date.getDate();
  let monthNumber = date.getMonth();
  let year = date.getFullYear();

  if (year % 4 !== 0) {
    if (monthNumber === (3 || 5 || 8 || 10)) {
      if (day > 28) {
        day = (day + 2) % 30;
      } else day = day + 2;
    } else if (monthNumber === 1) {
      if (day > 26) {
        day = (day + 2) % 28;
      } else day = day + 2;
    } else {
      if (day > 29) {
        day = (day + 2) % 31;
      } else day = day + 2;
    }
  } else {
    if (monthNumber === 1) {
      if (day > 27) {
        day = (day + 2) % 29;
      } else day = day + 2;
    }
  }
  return `${months[monthNumber]} ${day}, ${year}`;
};
