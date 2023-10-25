import { Link } from "react-router-dom";
import styles from "../ChooseTest.module.css";
import { testList } from "../../../data/testList";

function ChooseItem({ where, whatTopic, text, myColor }) {
   function UnderLink() {
      return (
         <div className={styles.card} style={{ backgroundColor: myColor }}>
            {text}
         </div>
      );
   }

   return (
      <>
         {where ? (
            <Link
               to={`/${where}`}
               state={{ whatTopic }}
               style={{ width: "100%" }}
            >
               <UnderLink />
            </Link>
         ) : (
            <a
               href={testList.find(({ id }) => id === whatTopic).link}
               target="_blank"
               style={{ width: "100%" }}
            >
               <UnderLink />
            </a>
         )}
      </>
   );
}

export default ChooseItem;
