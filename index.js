// Code your solutions in this file
function writeCards(array, eventName) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you #{array[i]}, for the wonderful #{eventName} gift!`);
  }
  return newArray;
}

function countdown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}
