import { useState } from "react";
import AnswerBtn from "./answer-btn/AnswerBtn";
import styles from "./../home/Home.module.css";
import useQuestionGenerator from "../../custom-hooks/useQuestionGenerator";
import Modal from "../../UI/Modal/Modal";

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
      <>
         <div>
            <h1 className="question">{currentQuestion.question}</h1>
            <ul className={styles.cardsList} style={{ marginTop: "20px" }}>
               {currentQuestion.options.map((option, index) => (
                  <AnswerBtn
                     key={index}
                     text={option}
                     myClick={() => handleAnswerClick(option)}
                  />
               ))}
            </ul>
         </div>
         <Modal
            isOpen={modalIsOpen}
            closeModal={() => {
               generateNewQuestion();
               openCloseModal(false);
               setScore(0);
            }}
         >
            <h1 className="question">
               Правильна відповідь {currentQuestion.correctAnswer}
            </h1>
            <p style={{ fontSize: "25px" }}>
               Ви назвали {score} правильних відповідей
            </p>
         </Modal>
      </>
   );
}

export default BacisTest;
