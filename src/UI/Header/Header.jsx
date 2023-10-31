import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
   return (
      <nav className={styles.nav}>
         <Link to="/fast-math" className={styles.icon}>
            <img
               src="./favicon.svg"
               alt="icon"
               style={{ width: "25px", height: "25px" }}
            ></img>
            <span className={styles.navText}>Fast Math</span>
         </Link>
      </nav>
   );
}

export default Header;
