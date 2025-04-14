import { useState } from "react";
import useQuestionGenerator from "../../custom-hooks/useQuestionGenerator";
import AnswerBtn from "../basic-test/answer-btn/AnswerBtn";
import styles from "./TrueFalseTest.module.css";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { SimpleAnimation } from "../../assets/CustomData/animation";
import { translationData } from "../../data/translationData";
import { getLanguage } from "../../functions/getLanguage";
import { addRealEnter } from "../../functions/addEnter";
import { TestDialog } from "../../UI/Modal/Special/TestDialog";

function TrueFalseTest() {
   const { currentQuestion, generateNewQuestion } = useQuestionGenerator();
   const [score, setScore] = useState(0);

   const [modalIsOpen, openCloseModal] = useState(false);

   const lang = getLanguage();

   function handleAnswerClick(selectedAnswer) {
      if (selectedAnswer) {
         setScore(score + 1);
         generateNewQuestion();
      } else {
         openCloseModal(true);
      }
   }

   function formQuestionTF(question = "", rightAnswer = 23) {
      let result = question.toLowerCase();
      if (
         question.startsWith(translationData[lang].generalTest.specialQuestion)
      ) {
         result =
            question
               .slice(
                  translationData[lang].generalTest.specialQuestion.length,
                  question.length - 1
               )
               .trim() +
            " " +
            translationData[lang].trueFalse.equal;
      }
      return `${translationData[lang].trueFalse.questionStart} ${result} ${rightAnswer} ?`;
   }

   return (
      <LazyMotion features={domAnimation}>
         <m.div {...SimpleAnimation}>
            <h1 className="question">
               {addRealEnter(
                  formQuestionTF(
                     currentQuestion.question,
                     currentQuestion.options[0]
                  )
               )}
            </h1>
            <div className={styles.selectedList}>
               <AnswerBtn
                  myColor={"#2C6A91"}
                  text={translationData[lang].trueFalse.true}
                  myClick={() =>
                     handleAnswerClick(
                        currentQuestion.options[0] ==
                           currentQuestion.correctAnswer
                     )
                  }
               />
               <AnswerBtn
                  myColor={"#912C2C"}
                  text={translationData[lang].trueFalse.false}
                  myClick={() =>
                     handleAnswerClick(
                        currentQuestion.options[0] !==
                           currentQuestion.correctAnswer
                     )
                  }
               />
            </div>

            <TestDialog
               generateNewQuestion={generateNewQuestion}
               openCloseModal={openCloseModal}
               setScore={setScore}
               score={score}
               correctAnswer={currentQuestion.correctAnswer}
               isOpen={modalIsOpen}
            />
         </m.div>
      </LazyMotion>
   );
}

export default TrueFalseTest;
