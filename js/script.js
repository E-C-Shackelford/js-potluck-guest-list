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

// select element with assign class, which only appears when the guest list is full
const assignButton = document.querySelector(".assign");

// select element with assigned-items class, which targets the list that will populate with the guest’s name and assigned dish
const assignedItems = document.querySelector(".assigned-items");

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

// ***** build an array, and then select elements and loop through the array *****

const assignItems = function () {
  const potluckItems = [
    "mixed fruit plater",
    "mixed veggie plater",
    "lemon-ginger hummus and pumpkin-chia seed crackers",
    "gazpacho soup",
    "guacamole and blue corn chips",
    "salsa",
    "veggie nori rolls",
    "roasted tomato and carmelized sweet onion tart",
    "garbanzo based pasta salad with summer veggies and lemon-tahini dressing",
    "canneli bean, bell pepper, and lemon-basil quinoa salad",
    "cilantro-pepita pesto with black forbidden rice and veggie salad",
    "roasted veggie kabobs with sundried tomato dipping sauce",
  ];

  // select all list elements inside the unordered list with a class of “guest-list”
  const allGuests = document.querySelectorAll(".guest-list li");

  // loop over the allGuests array using guest as the variable
  for (let guest of allGuests) {
    // generate a number between 0 and the length of potluckItems to select a random element from the array
    // use Math.floor() function since it returns the largest integer less than or equal to a given number
    // use Math.random() function since it returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);

    // in the value position, add the item from the potluckItems array at the index position of randomPotluckIndex
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    // create a new "li" element
    let listItem = document.createElement("li");

    // set the innerText of listItem to a string with the guest name and item they're bringing
    // use guest.innerText to access the name inside the li element because if you instead just use guest without innerText, you’d grab the actual list element instead of the text
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
  }
};
