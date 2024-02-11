const setHeat = (numberGuessed, numberToGuess) => {
  if (Math.abs(numberGuessed - numberToGuess) === 0) {
    return 'Correct';
  }
  if (Math.abs(numberGuessed - numberToGuess) === 1) {
    return 'Boiling';
  }
  if (Math.abs(numberGuessed - numberToGuess) <= 5) {
    return 'Hot';
  }
  if (Math.abs(numberGuessed - numberToGuess) <= 10) {
    return 'Warm';
  }
  if (Math.abs(numberGuessed - numberToGuess) <= 74) {
    return 'Cold';
  }
  if (Math.abs(numberGuessed - numberToGuess) >= 75) {
    return 'Freezing';
  }
  return '';
};

export default setHeat;
