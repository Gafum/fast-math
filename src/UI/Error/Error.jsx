import { useNavigate } from "react-router-dom";
import { getLanguage } from "../../functions/getLanguage";
import styles from "../../screen/choose-test/ChooseTest.module.css";

export const Error = () => {
   const navigate = useNavigate();
   return (
      <div>
         <h1 className="question">{getLanguage().error.themaIsNotFound}</h1>
         <button
            className={styles.card}
            style={{ marginTop: 35 }}
            onClick={() => navigate("/")}
         >
            {getLanguage().error.btnText}
         </button>
      </div>
   );
};
