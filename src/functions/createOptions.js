import Randomizer from "../Servises/Randomizer.servise";
import { getLanguage } from "./getLanguage";

export function createOptions({ question, correctAnswer, isSimple = false, addSpecialQuestion = false }) {
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

   let thirdAnswer = correctAnswer;

   do {
      thirdAnswer = String(
         correctAnswer +
         Number(
            (Randomizer.randomInteger(0, 1) ? "-" : "") +
            Randomizer.randomInteger(5, 15)
         )
      );
   } while (listOfAnswers.includes(thirdAnswer))

   listOfAnswers[3] = thirdAnswer;

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
   let localQuestion = question
   if (addSpecialQuestion) {
      localQuestion = getLanguage().generalTest.specialQuestion + " " + question + " ?"
   }

   return { question: localQuestion, correctAnswer, options: Randomizer.shuffleArray(listOfAnswers) };
}