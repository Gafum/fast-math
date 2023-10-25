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
            <button className={styles.modal__btn} onClick={closeModal}>
               Закрити
            </button>
         </div>
      </div>
   );
}

export default Modal;
