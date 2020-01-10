const testArray = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote",
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage"
];

const findIndex = (array) => {
  for(let i =0; i<array.length; i++) {
    if (array[i][0] === 'a') {
      console.log(array[i], i)
      return i
    } else {
      console.log("Couldn't find a")
    }
  }
}

console.log('findIndex(testArray)', findIndex(testArray))
