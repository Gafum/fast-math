import { useEffect, useRef, useState } from "react";
import genereteQuestion from "../../custom-hooks/useQuestionGenerator";
import Modal from "../../UI/Modal/Modal";
import styles from "./WriteTest.module.css";
import { addRealEnter } from "../basic-test/BasicTest";

function WriteTest() {
   const [text, setText] = useState("");
   const { currentQuestion, generateNewQuestion } = genereteQuestion();
   const [score, setScore] = useState(0);
   const myInput = useRef();

   const [modalIsOpen, openCloseModal] = useState(false);

   const handleInputChange = (event) => {
      let inputValue = event.target.value.replace(/[^0-9-]+/g, "");

      setText(inputValue);
   };

   const submitForm = (event) => {
      event.preventDefault();
      if (text.length == 0 || !text) {
         return;
      }

      if (text == currentQuestion.correctAnswer) {
         setScore(score + 1);
         setText("");
         generateNewQuestion();
      } else {
         openCloseModal(true);
      }
   };

   useEffect(() => {
      myInput.current.focus();
   }, [currentQuestion]);

   return (
      <>
         <form onSubmit={submitForm}>
            <h1 className="question">
               {addRealEnter(currentQuestion.question)}
            </h1>
            <div className={styles.writeBlock}>
               <input
                  autoFocus
                  name="answer"
                  type="text"
                  inputMode="numeric"
                  placeholder="Введіть текст"
                  value={text.replace(/[^0-9-]+/g, "")}
                  onChange={handleInputChange}
                  autoComplete="none"
                  ref={myInput}
               />
               <button className={styles.submitBtn} type="submit">
                  Ok
               </button>
            </div>
         </form>
         <Modal
            isOpen={modalIsOpen}
            closeModal={() => {
               setText("");
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

export default WriteTest;
