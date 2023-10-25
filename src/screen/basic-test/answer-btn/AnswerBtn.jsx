import styles from "../../home/Home.module.css";

function AnswerBtn({ text, myClick, myColor = undefined }) {
   return (
      <div
         className={styles.topicBtn}
         onClick={myClick}
         style={{ backgroundColor: myColor }}
      >
         <span>{text}</span>
      </div>
   );
}

export default AnswerBtn;
