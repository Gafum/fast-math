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
];