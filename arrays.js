var chocolateBars = [
  `snickers`,
  `hundred grand`,
  `kitkat`,
  `skittles`
];

function addElementToBeginningOfArray (array, element) {
  array = [`#{element}`, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  var array = array.unshift(`#{element}`)
}
