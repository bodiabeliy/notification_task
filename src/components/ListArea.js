import React, {Fragment} from 'react';
import ListEvent from './ListEvent'
function ListArea(props) {
 return (
  <Fragment>
    <div className="list-contant__list-area">
     <div className="list-area__wrapper">
     {props.notes.map(note => {
     return (
      <ListEvent notes_detailes={note}/>
     )
     })}
     </div>
     <div className="list-area__text-btn">
      <h3>
      ALL NOTIFICATIONS
      </h3>
     </div>
    </div>
  </Fragment>
 );
}

export default ListArea;