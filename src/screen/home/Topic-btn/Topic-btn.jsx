import { Link } from "react-router-dom";
import styles from "../Home.module.css";

function TopicBtn({ name, id }) {
   return (
      <Link to={`/choose`} state={{ whatTopic: id }}>
         <div className={styles.topicBtn}>
            <span>{name}</span>
         </div>
      </Link>
   );
}

export default TopicBtn;
