import React, {Fragment, useState} from 'react';
import ListEvent from './ListEvent'


function ListArea(props) {
  const [notifications, setNotifications] = useState(false);

  const AllNotifications = () => {
    setNotifications(true);
  };
  const HideNotifications = () => {
    setNotifications(false);
 };

 return (
  <Fragment>
    <div className="list-contant__list-area">
     <div 
      className="list-area__wrapper"
      style={{
        height: notifications === false? '100%':'300px',
        overflowY: notifications === false? 'auto': 'none'
      }}
      >
     {props.notes.map(note => {
     return (
      <ListEvent notes_detailes={note}/>
     )
     })}
     </div>
     <div className="list-area__text-btn">
     {notifications === true?
        <h3 onClick={HideNotifications}>
          ALL NOTIFICATIONS
         </h3>
       :
       <h3 onClick={AllNotifications}>
          HIDE NOTIFICATIONS
       </h3>
     }
     </div>
    </div>
  </Fragment>
 );
}

export default ListArea;