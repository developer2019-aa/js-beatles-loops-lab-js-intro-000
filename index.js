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