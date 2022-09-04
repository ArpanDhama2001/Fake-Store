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

export const deliveryDate = (focus: number) => {
  let date = new Date();
  let day = date.getDate();
  let monthNumber = date.getMonth();
  let year = date.getFullYear();

  if (focus) {
    if (year % 4 !== 0) {
      if (monthNumber === (3 || 5 || 8 || 10)) {
        if (day > 29) {
          day = (day + 1) % 30;
        } else day = day + 1;
      } else if (monthNumber === 1) {
        if (day > 27) {
          day = (day + 1) % 28;
        } else day = day + 1;
      } else {
        if (day > 30) {
          day = (day + 1) % 31;
        } else day = day + 1;
      }
    } else {
      if (monthNumber === 1) {
        if (day > 28) {
          day = (day + 1) % 29;
        } else day = day + 1;
      }
    }
  } else {
    if (year % 4 !== 0) {
      if (monthNumber === (3 || 5 || 8 || 10)) {
        if (day > 25) {
          day = (day + 5) % 30;
        } else day = day + 5;
      } else if (monthNumber === 1) {
        if (day > 23) {
          day = (day + 5) % 28;
        } else day = day + 5;
      } else {
        if (day > 26) {
          day = (day + 5) % 31;
        } else day = day + 5;
      }
    } else {
      if (monthNumber === 1) {
        if (day > 24) {
          day = (day + 5) % 29;
        } else day = day + 5;
      }
    }
  }
  return `${months[monthNumber]} ${day}, ${year}`;
};
