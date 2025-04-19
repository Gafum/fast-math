export default class Randomizer {
   static shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
   }
   static randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
   }
}

