function writeCards(names, event) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}

// Insert names in the array
const namesArray = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";

// Call the function
const thankYouMessages = writeCards(namesArray, eventName);

// Log the result
console.log(thankYouMessages);

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
