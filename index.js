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

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(factsArray) {
  let i = 0;
  let newArr = [];
  while (i < factsArray.length) {
    newArr.push(factsArray[i] + '!!!');
    i++;
  }
  return newArr;
}
