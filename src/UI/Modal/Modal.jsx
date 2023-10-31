import { Link } from "react-router-dom";
import styles from "./Modal.module.css";

function Modal({ isOpen, closeModal, children }) {
   return (
      <div
         className={`${styles.modal} ${isOpen ? styles.active : ""}`}
         onClick={closeModal}
      >
         <div
            className={styles.modal__content}
            onClick={(e) => e.stopPropagation()}
         >
            {children}
            <div className={styles.modal__btns}>
               <Link className={styles.modal__btn} to="/fast-math">
                  Закрити
               </Link>
               <button
                  className={`${styles.modal__btn} ${styles.modal__btn_blue}`}
                  onClick={closeModal}
               >
                  Повторити
               </button>
            </div>
         </div>
      </div>
   );
}

export default Modal;
