import { Link } from "react-router-dom";
import styles from "./Modal.module.css";
import { getLanguage } from "../../functions/getLanguage";

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
               <Link className={styles.modal__btn} to="/">
                  {getLanguage().testDialog.btn.close}
               </Link>
               <button
                  className={`${styles.modal__btn} ${styles.modal__btn_blue}`}
                  onClick={closeModal}
               >
                  {getLanguage().testDialog.btn.repeat}
               </button>
            </div>
         </div>
      </div>
   );
}

export default Modal;
