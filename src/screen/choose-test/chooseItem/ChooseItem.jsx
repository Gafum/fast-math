import { Link } from "react-router-dom";
import styles from "../ChooseTest.module.css";
import { testList } from "../../../data/testList";

function ChooseItem({ where, whatTopic, text, myColor }) {
   function UnderLink() {
      return (
         <div className={styles.card} style={{ "--my-color": myColor }}>
            {text}
         </div>
      );
   }

   return (
      <>
         {where ? (
            <Link to={`/${where}/${whatTopic}`} style={{ width: "100%" }}>
               <UnderLink />
            </Link>
         ) : (
            <a
               href={testList.find(({ id }) => id === whatTopic).link}
               style={{ width: "100%" }}
            >
               <UnderLink />
            </a>
         )}
      </>
   );
}

export default ChooseItem;
