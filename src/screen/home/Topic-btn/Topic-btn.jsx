import { Link } from "react-router-dom";
import styles from "../Home.module.css";

function TopicBtn({ name, id, color }) {
   return (
      <Link to={`/choose/${id}`}>
         <div className={styles.topicBtn} style={{ "--my-color": color }}>
            <span>{name}</span>
         </div>
      </Link>
   );
}

export default TopicBtn;
