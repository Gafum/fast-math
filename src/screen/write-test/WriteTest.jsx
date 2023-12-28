import { useState } from "react";
import genereteQuestion from "../../custom-hooks/useQuestionGenerator";
import Modal from "../../UI/Modal/Modal";

function WriteTest() {
   const [text, setText] = useState("");
   const { currentQuestion, generateNewQuestion } = genereteQuestion();
   const [score, setScore] = useState(0);

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

   return (
      <>
         <form onSubmit={submitForm}>
            <h1 className="question">{currentQuestion.question}</h1>
            <input
               autoFocus
               name="answer"
               style={{ marginTop: "25px" }}
               type="text"
               inputMode="numeric"
               placeholder="Введіть текст"
               value={text.replace(/[^0-9-]+/g, "")}
               onChange={handleInputChange}
               autoComplete="none"
            />
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
               Ви назвали {score} правильних відповідей
            </p>
         </Modal>
      </>
   );
}

export default WriteTest;
