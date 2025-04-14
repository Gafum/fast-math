import { Fragment } from "react";

export function addRealEnter(question = "") {
   if (!question.includes("<br/>")) {
      return question;
   }

   return (
      <>
         {question.split("<br/>").map((text) => {
            return (
               <Fragment key={text}>
                  {text}
                  <br />
               </Fragment>
            );
         })}
      </>
   );
}
