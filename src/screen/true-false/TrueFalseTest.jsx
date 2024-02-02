import { useState } from "react";
import useQuestionGenerator from "../../custom-hooks/useQuestionGenerator";
import AnswerBtn from "../basic-test/answer-btn/AnswerBtn";
import styles from "./TrueFalseTest.module.css";
import Modal from "../../UI/Modal/Modal";

function TrueFalseTest() {
   const { currentQuestion, generateNewQuestion } = useQuestionGenerator();
   const [score, setScore] = useState(0);

   const [modalIsOpen, openCloseModal] = useState(false);

   function handleAnswerClick(selectedAnswer) {
      if (selectedAnswer) {
         setScore(score + 1);
         generateNewQuestion();
      } else {
         openCloseModal(true);
      }
   }

   return (
      <>
         <h1 className="question">
            {currentQuestion.question + " " + currentQuestion.options[0]}
         </h1>
         <div className={styles.selectedList}>
            <AnswerBtn
               myColor={"#2C6A91"}
               text={"Правда"}
               myClick={() =>
                  handleAnswerClick(
                     currentQuestion.options[0] == currentQuestion.correctAnswer
                  )
               }
            />
            <AnswerBtn
               myColor={"#912C2C"}
               text={"Хиба"}
               myClick={() =>
                  handleAnswerClick(
                     currentQuestion.options[0] !==
                        currentQuestion.correctAnswer
                  )
               }
            />
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
               Ви відповіли вірно на {score} запитань!
            </p>
         </Modal>
      </>
   );
}

export default TrueFalseTest;
