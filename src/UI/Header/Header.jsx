import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
   return (
      <nav className={styles.nav}>
         <Link to="/" className={styles.icon}>
            <img
               src="/fast-math/favicon.svg"
               alt="icon"
               style={{ width: "25px", height: "25px" }}
            ></img>
            <span className={styles.navText}>Fast Math</span>
         </Link>
         <Link to="/about" className={styles.aboutBtn}>
            <span>?</span>
         </Link>
      </nav>
   );
}

export default Header;
