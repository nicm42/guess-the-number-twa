export default () => ({
  min: '1',
  max: '100',
  guess: '',

  getGuess() {
    guess =
      Math.floor(Math.random() * (Number(this.max) - Number(this.min) + 1)) +
      Number(this.min);
    console.log(guess);
  },
});
