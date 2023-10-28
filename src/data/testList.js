import Randomizer, { createOptions } from "../UI/Randomizer.servise";

export const testList = [
   {
      name: "Множення на 9",
      id: "multiply-by-9",
      link: "https://youtu.be/s4qJ8ew6lio?si=vLCJLnd9V5ClGzou",
      createQuestions: () => {
         let a = Randomizer.randomInteger(1, 10);
         return createOptions(`${a} * 9 =`, a * 9);
      },
   },
   {
      name: "Множення чисел від 10 до 20",
      id: "digit-numbers",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
      createQuestions: () => {
         let a = Randomizer.randomInteger(11, 19),
            b = Randomizer.randomInteger(11, 19);

         return createOptions(`${a} * ${b} =`, a * b);
      },
   },
   {
      name: "Множення двоцифрових чисел",
      id: "two-digit",
      link: "https://youtu.be/xBkRObRuuVc?si=cFz9FdNkiJVGGgjU",
      createQuestions: () => {
         let a = Randomizer.randomInteger(10, 99),
            b = Randomizer.randomInteger(10, 99);

         return createOptions(`${a} * ${b} =`, a * b);
      },
   },
   {
      name: "Вправи на ділення",
      id: "division",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9),
            b = Randomizer.randomInteger(2, 9);

         return createOptions(`${a * b} / ${a} =`, b);
      }

   },
   {
      name: "Квадрати натуральних чисел",
      id: "square",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9);

         return createOptions(`Квадрат числа ${a} =`, Math.pow(a, 2));
      },
   },
   {
      name: "Корені натуральних чисел",
      id: "square-root",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9);

         return createOptions(`Корінь квадратний від числа ${Math.pow(a, 2)} =`, a);
      },
   },
   {
      name: "Пошук відсотків від числа",
      id: "percent",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
      createQuestions: () => {
         let number = Randomizer.randomInteger(1, 100), percent = 2, result, remainder;
         while (remainder % 1 !== 0) {
            percent++;

            result = (number * percent) / 100;

            remainder = result % number;
         }
         if (percent == 100 || percent <= 10) {
            let a = Randomizer.randomInteger(1, 9);
            percent *= a;
            result *= a;
         }


         return createOptions(`${percent}% від ${number} =`, result);
      }

   },
   {
      name: "Вправи на логарифми",
      id: "log",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 5),
            b = Randomizer.randomInteger(1, 5);

         return createOptions(`Логарифм ${Math.pow(a, b)} за основи ${a} =`, b, true);
      }

   },
   {

      name: "Лінійні рівняння",
      id: "easy-equation",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9),
            b = Randomizer.randomInteger(2, 9);
         return createOptions(Randomizer.randomInteger(0, 1) ?
            `${a} * x = ${a * b},  x =` :
            `${a * b} / x = ${a},  x =`, b);
      }
   },
   {
      name: "Прості рівняння",
      id: "equation",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
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
         return createOptions(equation + ", x =", x);
      }

   },
   {
      name: "Квадратні рівняння",
      id: "quadratic-equation",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
      createQuestions: () => {
         let root1 = Randomizer.randomInteger(-10, 10);
         let root2 = Randomizer.randomInteger(-10, 10);
         while (root1 === root2 && root1 === 0 && root2 === 0) {
            root1 = Randomizer.randomInteger(-10, 10);
            root2 = Randomizer.randomInteger(-10, 10);
         }


         const sumOfRoots = root1 + root2;
         const productOfRoots = root1 * root2;

         return createOptions(`x^2 ${(sumOfRoots > 0 ? "- " : "+ ") + Math.abs(sumOfRoots)}x ${(productOfRoots > 0 ? "+ " : "- ") + Math.abs(productOfRoots)} = 0, x1 + x2 =`, root1 + root2);
      },
   },
   {
      name: "Середнє число",
      id: "average-mean",
      link: "https://youtu.be/z5rETox69t8?si=qW5Hj0l9Y6Onqw98",
      createQuestions: () => {
         let answer = Randomizer.randomInteger(2, 20), question = "";

         if (Randomizer.randomInteger(0, 1)) { // What should user find
            let remainder, divider = 1;

            while (remainder !== 0) {
               divider++;

               remainder = answer % divider;
            }

            question = `Чому дорівнює середнє геометричне ${answer / divider} і ${answer * divider}?`;
         } else {
            let application = Randomizer.randomInteger(1, 15);
            question = `Чому дорівнює середнє арифметичне ${answer - application} і ${answer + application}?`;
         }


         return createOptions(question, answer);
      },
   }

];