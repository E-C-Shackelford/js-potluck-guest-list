// invite button
const addGuestButton = document.querySelector(".invite");
// invite button label
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full
const guestFull = document.querySelector(".alert");

// ***** Add an Event Listener & Create an Element *****

addGuestButton.addEventListener("click", function () {
  // write a variable called guest to capture the value of what is entered in the guestInput input
  const guest = guestInput.value;
  // console.log(guest);

  if (guest !== "") {
    addToList(guest);
  }
  clearInput();
  updateGuestCount();
});

// ***** Clear the Input Box *****

// the input box is functioning, but the user must clear out the box each time they want to add a new name

const clearInput = function () {
  // you can’t just set guestInput to an empty string — you need to select its value property because it’s a text input field
  guestInput.value = "";
};

// create a function just for adding a guest to the list
const addToList = function (guest) {
  const listItem = document.createElement("li");
  // change the innerText of the listItem to the guest variable
  listItem.innerText = guest;
  guestList.append(listItem);
};

// ***** Limit the Guest List to 8 Guests *****

const updateGuestCount = function () {
  // target and update the number attending at the bottom of the page
  const guests = document.querySelectorAll(".guest-list li");

  guestCount.innerText = guests.length;

  // prevent more than 8 guests from being added to the list
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};
