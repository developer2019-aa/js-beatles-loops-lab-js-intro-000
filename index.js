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
  while (i < facts.length) {
    newArr.push(facts[i] + '!!!');
    i++;
  }
  return newArr;
}
