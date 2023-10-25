import TopicBtn from "./Topic-btn/Topic-btn";
import styles from "./Home.module.css";
import { testList } from "../../data/testList";

function Home() {
   return (
      <div className={styles.cardsList}>
         {testList.map((element) => (
            <TopicBtn key={element.id} name={element.name} id={element.id} />
         ))}
      </div>
   );
}

export default Home;
