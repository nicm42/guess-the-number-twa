import setHeat from './setHeat';

export default () => ({
  min: 1,
  max: 100,
  guess: '',
  numberOfGuesses: 0,
  guessData: [],
  showCongrats: false,

  getGuess() {
    this.guess =
      Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    console.log(this.guess);
  },

  getHeat(input) {
    const heating = setHeat(input, this.guess);
    this.numberOfGuesses += 1;
    const newGuessData = {
      guessNumber: this.numberOfGuesses,
      guesses: input,
      heat: heating,
    };
    this.guessData.push(newGuessData);
    if (heating === 'Correct') {
      this.showCongrats = true;
    }
  },
});
