"use strict";

const dateForm = document.querySelector(".date_form");
const dateInput = document.querySelectorAll(".date__input");

dateInput.forEach((date) => {
  date.addEventListener("change", (e) => {
    alert(`No Booking available to this date ${date.value}`);
  });
});
