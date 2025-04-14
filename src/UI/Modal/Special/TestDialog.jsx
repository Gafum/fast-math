import { translationData } from "../../../data/translationData";
import { getLanguage } from "../../../functions/getLanguage";
import Modal from "../Modal";

export const TestDialog = ({
   isOpen,
   generateNewQuestion,
   openCloseModal,
   setScore,
   setText,
   correctAnswer,
   score,
}) => {
   return (
      <Modal
         isOpen={isOpen}
         closeModal={() => {
            generateNewQuestion();
            openCloseModal(false);
            setScore(0);
            if (setText) {
               setText("");
            }
         }}
      >
         <h1 className="question">
            {translationData[getLanguage()].testDialog.rightAnswer.replace(
               "!!NUMBER!!",
               correctAnswer
            )}
         </h1>
         <p style={{ fontSize: "25px" }}>
            {translationData[getLanguage()].testDialog.score.replace(
               "!!NUMBER!!",
               score
            )}
         </p>
      </Modal>
   );
};
