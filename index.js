// add solution here
function theBeatlesPlay(musicians, instruments) {
  let newArr = [];

  for (let i = 0; i < musicians.length; i++){
    let name = musicians[i];
    let instrument = instruments[i];

    newArr.push(`${name} plays ${instrument}`);
  }
  return newArr;
}

function johnLennonFacts(factsArray) {
  let i = 0;
  let newArr = [];

  while (i < factsArray.length) {
    newArr.push(factsArray[i] + '!!!');
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let newArr = [];

  do {
    newArr.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return newArr;
}
