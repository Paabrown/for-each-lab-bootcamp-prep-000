function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var beatles = ["john", "paul", "george", "ringo"]

  beatles.forEach(callback)

  return beatles
}

function doToArray(array, callback) {
  array.forEach(callback)

  return array
}
