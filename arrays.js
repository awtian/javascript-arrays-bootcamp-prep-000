var chocolateBars = [
  `snickers`,
  `hundred grand`,
  `kitkat`,
  `skittles`
];

function addElementToBeginningOfArray (array, element) {
  return [element, ...array];
};

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element);
};

function addElementToEndOfArray (array, element) {
  return [...array, element];
};

function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element);
};

function accessElementInArray (array, index) {
  return console.log(array[index]);
};

function destructivelyRemoveElementFromBeginningOfArray (array) {
   return array.shift()
}

var superheroines = ["catwoman", "she-hulk", "mystique"];

console.log(superheroines.push("wonder woman"))
