import { useEffect, useRef, useState } from "react";
import genereteQuestion from "../../custom-hooks/useQuestionGenerator";
import Modal from "../../UI/Modal/Modal";
import styles from "./WriteTest.module.css";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { SimpleAnimation } from "../../assets/CustomData/animation";
import { translationData } from "../../data/translationData";
import { getLanguage } from "../../functions/getLanguage";
import { addRealEnter } from "../../functions/addEnter";
import { TestDialog } from "../../UI/Modal/Special/TestDialog";

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
      <LazyMotion features={domAnimation}>
         <m.form onSubmit={submitForm} {...SimpleAnimation}>
            <h1 className="question">
               {addRealEnter(currentQuestion.question)}
            </h1>
            <div className={styles.writeBlock}>
               <input
                  autoFocus
                  name="answer"
                  type="text"
                  inputMode="numeric"
                  placeholder={
                     translationData[getLanguage()].writeTest.placeholder +
                     "..."
                  }
                  value={text.replace(/[^0-9-]+/g, "")}
                  onChange={handleInputChange}
                  autoComplete="none"
                  ref={myInput}
               />
               <button className={styles.submitBtn} type="submit">
                  Ok
               </button>
            </div>
         </m.form>

         <TestDialog
            setText={setText}
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

export default WriteTest;
