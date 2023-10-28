export default class Randomizer {
   static shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
   }
   static randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
   }
}

export function createOptions(question, correctAnswer, isSimple = false) {
   let listOfAnswers = [correctAnswer];

   listOfAnswers[1] = String(
      correctAnswer - Randomizer.randomInteger(1, 11)
   );
   if (Number(listOfAnswers[1]) < 1) {
      listOfAnswers[1] = String(
         correctAnswer - 1
      );
   }

   listOfAnswers[2] = String(
      Number(correctAnswer) + Randomizer.randomInteger(1, 11)
   );

   listOfAnswers[3] = correctAnswer

   do {
      listOfAnswers[3] = String(
         correctAnswer +
         Number(
            (Randomizer.randomInteger(0, 1) ? "-" : "") +
            Randomizer.randomInteger(5, 15)
         )
      );
   } while (listOfAnswers.includes(listOfAnswers[3]) && Number(listOfAnswers[3]) < 0)

   if (isSimple) {
      listOfAnswers[1] = String(correctAnswer - 1);
      listOfAnswers[2] = String(correctAnswer + 1);
      listOfAnswers[3] = String(
         correctAnswer +
         Number(
            (Randomizer.randomInteger(0, 1) ? "-" : "") +
            Randomizer.randomInteger(2, 5)
         ))
   }

   return { question, correctAnswer, options: Randomizer.shuffleArray(listOfAnswers) };
}
