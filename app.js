"use strict";

const dateForm = document.querySelector(".date_form");
const dateInput = document.querySelectorAll(".date__input");

const availableDates = [
  "2022-09-20",
  "2022-09-21",
  "2022-09-22",
  "2022-09-23",
  "2022-09-24",
  "2022-09-25",
  "2022-09-26",
  "2022-09-27",
  "2022-09-28",
  "2022-09-29",
  "2022-09-30",
  "2022-10-01",
  "2022-10-02",
  "2022-10-03",
  "2022-10-04",
  "2022-10-05",
];

dateInput.forEach((date) => {
  date.addEventListener("change", (e) => {
    const matchDate = availableDates.find((item) => item === date.value);
    if (!matchDate) {
      alert(`No Booking available to this ${date.value}`);
    } else {
      alert(`Booking available to this date ${date.value}`);
    }
  });
});
