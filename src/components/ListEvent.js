import React, {Fragment} from 'react';

function ListEvent({notes_detailes}) {
 return (
  <Fragment>
   <div className="notes__container">
    <div className="notes-status__section">
      <img src={notes_detailes.statusIcon} alt="" />
    </div>
    <div className="notes-body__section">
      <p>{notes_detailes.text}</p>
      <p style={{color:'#0B8156'}}>{notes_detailes.statusCompled}</p>
      <span className='notes-body__span'>{notes_detailes.timeCondition}</span>
    </div>
   </div>
  </Fragment>
 );
}

export default ListEvent;