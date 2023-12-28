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
         }, {
            question: "Марія має 7 коробок з іграшками. У кожній коробці 9 іграшок. Скільки іграшок усього у Марії?",
            answer: "7 коробок * 9 іграшок/коробка = 63 іграшки"
         }, {
            question: "На складі є 54 кілограми яблук. Їх потрібно розкласти у ящики так, щоб в кожному ящику було рівно по 9 кілограмів яблук. Скільки ящиків потрібно?",
            answer: "54 кілограми / 9 кілограмів/ящик = 6 ящиків"
         }
      ]
   },
   {
      name: "Множення чисел від 10 до 20",
      id: "digit-numbers",
      link: "https://sites.google.com/roli.ho.ua/easy-math-digit-numbers?usp=sharing",
      createQuestions: () => {
         let a = Randomizer.randomInteger(11, 19),
            b = Randomizer.randomInteger(11, 19);

         return createOptions(`${a} * ${b} =`, a * b);
      },
      realExercises: [
         {
            question: "Знайдіть добуток чисел 14 і 18.",
            answer: "Добуток = 252"
         },
         {
            question: "Обчисліть 15 помножити на 12.",
            answer: "Результат = 180"
         },
         {
            question: "Який результат множення 19 на 12?",
            answer: "Відповідь: 228"
         }, {
            question: "У магазині було 15 коробок з конфетами, в кожній коробці було по 14 конфет. Скільки конфет було всього?",
            answer: "Відповідь: 210 конфет"
         },
         {
            question: "У саду росло 13 яблунь, і в кожному дереві було по 19 яблук. Скільки яблук було всього?",
            answer: "Відповідь: 247 яблук"
         }
      ]
   },
   {
      name: "Множення двоцифрових чисел",
      id: "two-digit",
      link: "https://youtu.be/CGZJhSnDeNI?si=z5TYKcnqb4viRY3k",
      createQuestions: () => {
         let a = Randomizer.randomInteger(10, 99),
            b = Randomizer.randomInteger(10, 99);

         return createOptions(`${a} * ${b} =`, a * b);
      },
      realExercises: [
         {
            question: "Обчисліть 23 * 15",
            answer: "Відповідь: 345"
         },
         {
            question: "Добуток 47 і 12",
            answer: "Відповідь: 564"
         },
         {
            question: "x / 56 = 33",
            answer: "x = 1848"
         },
         {
            question: "У магазині було 25 ящиків і в кожному ящику було по 78 яблук. Скільки яблук було всього?",
            answer: "Відповідь: 1950 яблук"
         },
         {
            question: "У книжковому магазині було 30 книг, а в кожній книзі було по 52 сторінки. Скільки сторінок було всього?",
            answer: "Відповідь: 1560 сторінок"
         }
      ]
   },
   {
      name: "Вправи на ділення",
      id: "division",
      link: "https://youtu.be/k5gMbFmZAG8?si=AYmyb0fAfZsk1Bva",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9),
            b = Randomizer.randomInteger(2, 9);

         return createOptions(`${a * b} / ${a} =`, b);
      },
      realExercises: [
         {
            question: "Обчисліть 42 / 7",
            answer: "Відповідь: 6"
         },
         {
            question: "18 / x = 3",
            answer: "Відповідь: 6"
         },
         {
            question: "(20+4*2)/4 = ",
            answer: "Відповідь: 7"
         },
         {
            question: "У магазині було 35 яблук, і їх рівномірно розділили між 5 дітьми. Скільки яблук отримав кожен?",
            answer: "7 яблук на кожного"
         },
         {
            question: "Якщо у вас є 48 цукерок, і ви хочете поділити їх між 4 друзями рівномірно, скільки цукерок отримає кожен?",
            answer: "12 цукерок на кожного"
         }
      ]
   },
   {
      name: "Квадрати натуральних чисел",
      id: "square",
      link: "https://youtu.be/kBDGBD6GIKI?si=uQTgDZApwfOdOEqt",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9);

         return createOptions(`Квадрат числа ${a} =`, Math.pow(a, 2));
      },
      realExercises: [
         {
            question: "Обчисліть квадрат числа 3",
            answer: "Відповідь: 9"
         },
         {
            question: "(3+2)^2",
            answer: "Відповідь: 25"
         },
         {
            question: "(25/5*3-7)^2",
            answer: "Відповідь: 64"
         },
         {
            question: "Площа квадратного поля становить 64 квадратних метри. Яка довжина одного його боку?",
            answer: "Відповідь: 8 метрів"
         },
         {
            question: "У ванні є 4 квадратні плитки, кожна ребро якої має довжину 2 метри. Яка загальна площа плиток?",
            answer: "Відповідь: 16 квадратних метрів"
         },
      ]
   },
   {
      name: "Корені натуральних чисел",
      id: "square-root",
      link: "https://narodna-osvita.com.ua/511-kvadratn-koren-dysn-chisla.html",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9);

         return createOptions(`Корінь квадратний від числа ${Math.pow(a, 2)} =`, a);
      },
      realExercises: [
         {
            question: "Знайдіть корінь квадратний від числа 49",
            answer: "7"
         },
         {
            question: "√(64) * √(4)",
            answer: "8 * 2 = 16"
         },
         {
            question: "√(x + 3) = 5",
            answer: "√(x + 3) = 5 => x + 3 = 25 => x = 22"
         },
         {
            question: "Площа квадрата дорівнює 484 см2. Знайди сторону квадрата.",
            answer: "22 см"
         },
         {
            question: "√(x-2)=11",
            answer: "x - 2 = 121 => x = 123"
         }
      ]
   },
   {
      name: "Пошук відсотків від числа",
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
         return createOptions(`${percent}% від ${number} =`, result);
      },
      realExercises: [
         {
            question: "Знайди 120% від числа 45",
            answer: "54"
         },
         {
            question: "Знайти 12% від числа 450",
            answer: "54"
         },
         {
            question: "Бригада за планом пивинна була засіяти 980 га пшеницею. План вона виконала на 115%. Скільки гектарів засієно пшеницею?",
            answer: "1127 га"
         },
         {
            question: "Площа поля становить 420 га. Житом засіяли 15 % поля. Скільки гектарів поля залишилось незасіяним?",
            answer: "357 га"
         },
         {
            question: "За квиток у кінотеатр заплатили 64 грн. Яка вартість квитка без знижки, якщо знижку зробили в 20%?",
            answer: "80 грн"
         },
      ]
   },
   {
      name: "Вправи на логарифми",
      id: "log",
      link: "https://youtu.be/Vqe7X4VIX1c?si=FnaQFyIc074-dEyQ",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 5),
            b = Randomizer.randomInteger(1, 5);

         return createOptions(`Логарифм ${Math.pow(a, b)} за основи ${a} =`, b, true);
      },
      realExercises: [
         {
            question: "Знайдіть логарифм 9 за основи 9",
            answer: "1"
         },
         {
            question: "Знайдіть логарифм 125 за основи 5",
            answer: "3"
         },
         {
            question: "Знайдіть логарифм 9 за основи √3",
            answer: "4"
         },
         {
            question: "Скільки разів треба помножити число 2 саме на себе, щоб вийшло 32?",
            answer: "5"
         },
         {
            question: "Скільки разів треба помножити число 3 саме на себе, щоб вийшло 243?",
            answer: "5"
         },
      ]
   },
   {
      name: "Лінійні рівняння",
      id: "easy-equation",
      link: "https://youtu.be/hoM0AHKTc7k?si=jVqya9SVDJ8Va0S2",
      createQuestions: () => {
         let a = Randomizer.randomInteger(2, 9),
            b = Randomizer.randomInteger(2, 9);
         return createOptions(Randomizer.randomInteger(0, 1) ?
            `${a} * x = ${a * b},  x =` :
            `${a * b} / x = ${a},  x =`, b);
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
            question: "0,5(x-4)=1,5",
            answer: "x = 7"
         }
      ]
   },
   {
      name: "Прості рівняння",
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
         return createOptions(equation + ", x =", x);
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
         }
      ]
   },
   {
      name: "Квадратні рівняння",
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

         return createOptions(`x^2 ${(sumOfRoots > 0 ? "- " : "+ ") + Math.abs(sumOfRoots)}x ${(productOfRoots > 0 ? "+ " : "- ") + Math.abs(productOfRoots)} = 0, x1 + x2 =`, root1 + root2);
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
         {
            question: "x^2 + 3x -4 = 0 Обчисліть суму коренів рівняння ",
            answer: "Відповідь: -3"
         },
         {
            question: "x^2 + 6x -55 = 0 Обчисліть добуток коренів рівняння ",
            answer: "Відповідь: -55"
         },
      ]
   },
   {
      name: "Середні величини",
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

            question = `Чому дорівнює середнє геометричне ${answer / divider} і ${answer * divider}?`;
         } else {
            let application = Randomizer.randomInteger(1, 15);
            question = `Чому дорівнює середнє арифметичне ${answer - application} і ${answer + application}?`;
         }


         return createOptions(question, answer);
      },
      realExercises: [
         {
            question: "Знайдіть середнє геометричне чисел 4 і 36.",
            answer: "Середнє геометричне = 12"
         }, {
            question: "Знайдіть середнє арифметичне чисел 8 і 12.",
            answer: "Середнє арифметичне = 10"
         }, {
            question: "Знайдіть середнє геометричне між числами 9 та 36.",
            answer: "Середнє геометричне = 18"
         }, {
            question: "Задано числа: 12, 15, 18, та x. Якщо середнє арифметичне цих чисел дорівнює 16, то знайдіть значення x.",
            answer: "x = 21"
         }, {
            question: "Якщо середній бал трьох учасників турніру дорівнює 8 балів, і перший учасник отримав 10 балів, а другий - 8 балів, то який бал отримав третій учасник?",
            answer: "Третій учасник отримав 6 балів"
         }
      ]
   }

];