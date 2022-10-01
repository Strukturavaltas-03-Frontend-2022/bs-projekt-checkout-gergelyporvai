"use strict";

const stateArray = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  "North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming",
];

const megyeArray = [
  "Baranya",
  "Bács-Kiskun",
  "Békés",
  "Borsod-Abaúj-Zemplén",
  "Csongrád-Csanád",
  "Fejér",
  "Győr-Moson-Sopron",
  "Hajdú-Bihar",
  "Heves",
  "Jász-Nagykun-Szolnok",
  "Komárom-Esztergom",
  "Nógrád",
  "Pest",
  "Somogy",
  "Szabolcs-Szatmár-Bereg",
  "Tolna",
  "Vas",
  "Veszprém",
  "Zala",
];

const selectCountry = document.querySelector("#inputCountry");
const selectState = document.querySelector("#inputState");

const changeStates = () => {
  if (selectCountry.value === "1") {
    selectState.innerHTML = ``;
    stateArray.forEach((item) => {
      const stateOption = document.createElement("option");
      selectState.appendChild(stateOption);
      stateOption.textContent = `${item}`;
    });
  } else if (selectCountry.value === "2") {
    selectState.innerHTML = ``;
    megyeArray.forEach((item) => {
      const stateOption = document.createElement("option");
      selectState.appendChild(stateOption);
      stateOption.textContent = `${item}`;
    });
  } else selectState.innerHTML = `<option selected>Choose...</option>`;
};

selectCountry.addEventListener("change", () => changeStates());
