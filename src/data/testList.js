import { getLanguage } from "../functions/getLanguage";
import Randomizer, { createOptions } from "../UI/Randomizer.servise";

export const testList = [
   {
      name: getLanguage().testList[0].name,
      id: "multiply-by-9",
      link: "https://youtu.be/s4qJ8ew6lio?si=vLCJLnd9V5ClGzou",
      createQuestions: () => {
         let a = Randomizer.randomInteger(1, 10);
         return createOptions({
            question: `${a} * 9 =`,
            correctAnswer: a * 9
         });
      },
      realExercises: [
         {
            question: "72 / x = 8",
            answer: "x = 9"
         }, {
            question: "9 * (7 + x) = 36",
            answer: "x = -3"
         }, {
            question: "5 * 9 - 27 / 3 = x",
            answer: "x = 36"
         },
         ...getLanguage().testList[0].realExercises,
      ]
   },
   {
      name: getLanguage().testList[1].name,
      id: "digit-numbers",
      link: "https://sites.google.com/roli.ho.ua/easy-math-digit-numbers?usp=sharing",
      createQuestions: () => {
         let a = Randomizer.randomInteger(11, 19),
            b = Randomizer.randomInteger(11, 19);

         return createOptions({
            question: `${a} * ${b} =`,
            correctAnswer: a * b
         });
      },
      realExercises: getLanguage().testList[1].realExercises
   },
   {
      name: getLanguage().testList[2].name,
      id: "two-digit",
      realLink: "https://www.youtube.com/watch?v=CtmRBlZ009w",
      link: "https://drive.google.com/file/d/1XV_9x-QagDWdIcUFNz12czK7OmUsik5I/view",
      createQuestions: () => {
         let a = Randomizer.randomInteger(10, 99),
            b = Randomizer.randomInteger(10, 99);

         return createOptions({
            question: `${a} * ${b} =`,
            correctAnswer: a * b
         });
      },
      realExercises: getLanguage().testList[2].realExercises
   },
   {
      name: getLanguage().testList[3].name,
      id: "division",
      link: "https://youtu.be/k5gMbFmZAG8?si=AYmyb0fAfZsk1Bva",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9),
            b = Randomizer.randomInteger(2, 9);

         return createOptions({
            question: `${a * b} / ${a} =`,
            correctAnswer: b
         });
      },
      realExercises: getLanguage().testList[3].realExercises
   },
   {
      name: getLanguage().testList[4].name,
      id: "square",
      link: "https://youtu.be/kBDGBD6GIKI?si=uQTgDZApwfOdOEqt",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9);
         let localQuestion = getLanguage().testList[4].question.replace("!!NUMBER!!", a)
         return createOptions({
            question: localQuestion,
            correctAnswer: Math.pow(a, 2)
         });
      },
      realExercises: getLanguage().testList[4].realExercises
   },
   {
      name: getLanguage().testList[5].name,
      id: "square-root",
      link: "https://narodna-osvita.com.ua/511-kvadratn-koren-dysn-chisla.html",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9);
         let localQuestion = getLanguage().testList[5].question.replace("!!NUMBER!!", Math.pow(a, 2))
         return createOptions({
            question: localQuestion,
            correctAnswer: a
         });
      },
      realExercises: [
         ...getLanguage().testList[5].realExercises,
         {
            question: "√(64) * √(4)",
            answer: "8 * 2 = 16"
         },
         {
            question: "√(x + 3) = 5",
            answer: "√(x + 3) = 5 => x + 3 = 25 => x = 22"
         }, {
            question: "√(x-2) = 11",
            answer: "x - 2 = 121 => x = 123"
         }
      ]
   },
   {
      name: getLanguage().testList[6].name,
      id: "percent",
      link: "https://youtu.be/XEPb9OxdudY?si=Vo3eycyGzZk3y-_5",
      createQuestions: () => {
         let number = Randomizer.randomInteger(1, 100), percent = 2, result, remainder;
         while (remainder % 1 !== 0) {
            percent++;

            result = (number * percent) / 100;

            remainder = result % number;

            if (percent >= 105) {
               percent = 25;
               number = 12;
               result = 3;
            }
         }
         if (percent == 100 || percent <= 10) {
            let a = Randomizer.randomInteger(1, 9);
            percent *= a;
            result *= a;
         }
         let localQuestion = getLanguage().testList[6].question.replace("!!NUMBER!!", number).replace("!!PERCENT!!", percent)
         return createOptions({
            question: localQuestion,
            correctAnswer: result
         });
      },
      realExercises: getLanguage().testList[6].realExercises
   },
   {
      name: getLanguage().testList[7].name,
      id: "log",
      link: "https://youtu.be/Vqe7X4VIX1c?si=FnaQFyIc074-dEyQ",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 5),
            b = Randomizer.randomInteger(1, 5);
         let localQuestion = getLanguage().testList[7].question.replace("!!NUMBER!!", a).replace("!!POWNUMBER!!", Math.pow(a, b))
         return createOptions({
            question: localQuestion,
            correctAnswer: b, isSimple: true
         });
      },
      realExercises: getLanguage().testList[7].realExercises
   },
   {
      name: getLanguage().testList[8].name,
      id: "easy-equation",
      link: "https://youtu.be/hoM0AHKTc7k?si=jVqya9SVDJ8Va0S2",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9),
            b = Randomizer.randomInteger(2, 9);

         let equation = Randomizer.randomInteger(0, 1) ?
            `${a} * x = ${a * b}` :
            `${a * b} / x = ${a}`


         let localQuestion = getLanguage().testList[8].question + equation
         return createOptions({
            question: localQuestion,
            correctAnswer: b,
            addSpecialQuestion: true
         });
      },
      realExercises: [
         {
            question: "2x + 3 = 7",
            answer: "x = 2"
         },
         {
            question: "2 / x = 5",
            answer: "x = 0,4"
         },
         {
            question: "x / 10 = 2,5",
            answer: "x = 25"
         },
         {
            question: "6x - 3 = 9",
            answer: "x = 2"
         },
         {
            question: "0,5(x - 4) = 1,5",
            answer: "x = 7"
         },
         ...getLanguage().testList[8].realExercises
      ]
   },
   {
      name: getLanguage().testList[9].name,
      id: "equation",
      link: "https://youtu.be/6dihno5V-5Y?si=WomknX_WyCkEGmFc",
      createQuestions: () => {
         let result = Randomizer.randomInteger(1, 50),
            a = 2,
            b = 1,
            x = 0,
            equation = "";

         if (Randomizer.randomInteger(0, 1)) {
            a = result + Randomizer.randomInteger(1, 50);
            b = Randomizer.randomInteger(1, 50);
            x = a - result + b;
            equation = Randomizer.randomInteger(0, 1) ?
               `${a} + ${b} - x = ${result}` :
               `${a} - x + ${b} = ${result}`
         } else {
            a = result - Randomizer.randomInteger(1, 50);
            b = Randomizer.randomInteger(1, 50);
            x = result - (a - b);
            equation = a < 0 ? `x - ${Math.abs(a)} - ${b} = ${result}` :
               Randomizer.randomInteger(0, 1) ?
                  `${a} - ${b} + x = ${result}` :
                  `${a} + x - ${b} = ${result}`
         }

         let localQuestion = getLanguage().testList[9].question + equation
         return createOptions({
            question: localQuestion,
            correctAnswer: x,
            addSpecialQuestion: true
         });
      },
      realExercises: [
         {
            question: "3x + 5 = 11",
            answer: "x = 2"
         }, {
            question: "7 + x - 3 = 10",
            answer: "x = 6"
         },
         {
            question: "12 - x + 5 = 17",
            answer: "x = 0"
         },
         {
            question: "4x + 2 = 14",
            answer: "x = 3"
         },
         {
            question: "2(5x + 6) = 20",
            answer: "x = 0,8"
         },
         ...getLanguage().testList[9].realExercises
      ]
   },
   {
      name: getLanguage().testList[10].name,
      id: "quadratic-equation",
      link: "https://www.youtube.com/watch?v=XlRO2uduCKc",
      createQuestions: () => {
         let root1 = Randomizer.randomInteger(-10, 10);
         let root2 = Randomizer.randomInteger(-10, 10);

         while (root1 === root2 || root1 === 0 || root2 === 0) {
            root1 = Randomizer.randomInteger(-10, 10);
            root2 = Randomizer.randomInteger(-10, 10);
         }

         const sumOfRoots = root1 + root2;
         const productOfRoots = root1 * root2;

         let localQuestion = getLanguage().testList[10].question + `x^2 ${(sumOfRoots > 0 ? "- " : "+ ") + Math.abs(sumOfRoots)}x ${(productOfRoots > 0 ? "+ " : "- ") + Math.abs(productOfRoots)} = 0`
         return createOptions({
            question: localQuestion,
            correctAnswer: root1 + root2,
            addSpecialQuestion: true
         });
      },
      realExercises: [
         {
            question: "x^2 - 10 = 5x + 14",
            answer: "x1 = -3; x2 = 8"
         },
         {
            question: "x^2 - 8x + 15 = 0",
            answer: "x1 = 3; x2 = 5"
         },
         {
            question: "x^2 - 4x + 3 = 0",
            answer: "x1 = 1; x2 = 3"
         },
         ...getLanguage().testList[10].realExercises
      ]
   },
   {
      name: getLanguage().testList[11].name,
      id: "average-mean",
      link: "https://formula.co.ua/uk/content/mean.html",
      createQuestions: () => {
         let answer = Randomizer.randomInteger(2, 20), question = "";

         if (Randomizer.randomInteger(0, 1)) { // What should user find
            let remainder, divider = 1;

            while (remainder !== 0) {
               divider++;

               remainder = answer % divider;

               if (divider >= 100) {
                  remainder = 0;
                  answer = 12
                  divider = 3
               }
            }

            question =
               getLanguage().testList[11].question[0].replace("!!FIRST!!", answer / divider).replace("!!SECOND!!", answer * divider)
         } else {
            let application = Randomizer.randomInteger(1, 15);
            question =
               getLanguage().testList[11].question[1]
                  .replace("!!FIRST!!", answer - application).replace("!!SECOND!!", answer + application);
         }

         return createOptions({
            question: question,
            correctAnswer: answer,
            addSpecialQuestion: true
         });
      },
      realExercises: getLanguage().testList[11].realExercises
   }
];