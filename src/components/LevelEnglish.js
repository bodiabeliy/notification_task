import React,{ Fragment } from "react";
import Stepper from './Stepper'
function LevelEnglish() {
 return (
  <Fragment>
   <div className="level-english__container">
    <div className="level-english__title">
      <h1>Уровень Английского</h1>
    </div>
   <div className="level-english__stepper">
   <Stepper />
   </div>
   </div>
  </Fragment>
 );
}

export default LevelEnglish;