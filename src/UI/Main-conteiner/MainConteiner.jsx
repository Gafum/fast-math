import styles from "./MainConteiner.module.css";

function MainConteiner({ children }) {
   return <div className={styles.mainConteiner}>{children}</div>;
}

export default MainConteiner;
