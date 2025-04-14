import { useState } from "react";
import AnswerBtn from "./answer-btn/AnswerBtn";
import styles from "./../home/Home.module.css";
import useQuestionGenerator from "../../custom-hooks/useQuestionGenerator";
import { SimpleAnimation } from "../../assets/CustomData/animation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { addRealEnter } from "../../functions/addEnter";
import { TestDialog } from "../../UI/Modal/Special/TestDialog";

function BacisTest() {
   const { currentQuestion, generateNewQuestion } = useQuestionGenerator();
   const [score, setScore] = useState(0);

   const [modalIsOpen, openCloseModal] = useState(false);

   function handleAnswerClick(selectedAnswer) {
      if (selectedAnswer == currentQuestion.correctAnswer) {
         setScore(score + 1);
         generateNewQuestion();
      } else {
         openCloseModal(true);
      }
   }

   return (
      <LazyMotion features={domAnimation}>
         <m.div {...SimpleAnimation}>
            {currentQuestion && (
               <h1 className="question">
                  {addRealEnter(currentQuestion.question)}
               </h1>
            )}
            <ul className={styles.cardsList} style={{ marginTop: "20px" }}>
               {currentQuestion.options.map((option, index) => (
                  <AnswerBtn
                     key={index}
                     text={option}
                     myClick={() => handleAnswerClick(option)}
                     myColor={"#444"}
                  />
               ))}
            </ul>
         </m.div>

         <TestDialog
            generateNewQuestion={generateNewQuestion}
            openCloseModal={openCloseModal}
            setScore={setScore}
            score={score}
            correctAnswer={currentQuestion.correctAnswer}
            isOpen={modalIsOpen}
         />
      </LazyMotion>
   );
}

export default BacisTest;
