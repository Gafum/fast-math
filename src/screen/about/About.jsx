import { Link } from "react-router-dom";
import { testList } from "../../data/testList";
import styles from "./About.module.css";
import { useEffect } from "react";

function AboutPage() {
   function ReturnLink({ link, txt }) {
      return (
         <li>
            <a href={link} target="_blank">
               {txt} : {link}
            </a>
         </li>
      );
   }

   return (
      <div className={styles.aboutPage}>
         <p>
            Ласкаво просимо до <strong>Fast Math!</strong>
         </p>
         <p>
            Fast Math - це освітній веб-сайт, створений для покращення навичок
            швидкого рахунку серед учнів, які здають освітні тести. Наша мета -
            зробити навчання математики захоплюючим та ефективним.
         </p>
         <p>
            На Fast Math ви знайдете різноманітні вправи, такі як "простий
            тест", "вписати відповідь", "правда-хиба" та інші. Ми також надаємо
            можливість перевірити свої знання за допомогою реальних завданнь з
            ЗНО ( НМТ ) та ДПА.
         </p>
         <p>
            Наша команда вірить у те, що математика може бути захопливою, і ми
            робимо все можливе, щоб зробити ваш процес навчання цікавим та
            корисним. Долучіться до нашої освітньої спільноти та розвивайте свої
            математичні здібності разом із Fast Math!
         </p>
         <p>
            <strong>Використані джерела:</strong>
         </p>
         <ul className={styles.listOfLinks}>
            {testList.map(({ link, realLink, name }) => {
               if (realLink) {
                  return <ReturnLink key={name} link={realLink} txt={name} />;
               }
               return <ReturnLink key={name} link={link} txt={name} />;
            })}
         </ul>
         <Link to="/">
            <img
               src="/fast-math/favicon.svg"
               alt="icon"
               width="50px"
               height="50px"
            />
         </Link>
      </div>
   );
}

export default AboutPage;
