import React, {useState, Fragment} from 'react'
import LevelEnglish from './components/LevelEnglish'
import ListArea from './components/ListArea'
function App() {
  const [open, setOpen] = useState(false);

  const ShowDialogList = () => {
    setOpen(true);
  };
//   const HideDialogList = () => {
//    setOpen(false);
//  };

 // list array
    // noteType - is type of write notes 
   // (1 - needs complection; 2 - have done task; 3 - comment)
 //
 const listOfEvents = [
  {
    statusIcon: './images/toRightArrow.svg', 
    text: 'New task request from Костянтин Костянтинопольський', 
    timeCondition: '14:23',
    noteType:1
  },
  {
    statusIcon: './images/ok.svg',
    text: 'Shareholder’s, Optionee’s & Investor’s Documents Analysis изменен статус на',
    timeCondition: '15:19 21 April',
    statusCompled: 'Done',
    noteType:2
  },
  {
    statusIcon: './images/toRightArrow.svg',
    text: 'New task request from Костянтин Костянтинопольський', 
    timeCondition: '14:23 18 April',
    noteType:1
  },
   {
    statusIcon: './images/chat.svg',
    text: 'Новый комментарий от Костянтин Костянтинопольський Minutes Book Analysis',
    timeCondition: '14:23 15 April',
    noteType:3
  }
  
 ]

  return (
    <div className="App">
      <div className="list-contant__wrapper">
        <div className="list-contant__show-btn">
          <button
           className='show-btn__bell'
           onClick={ShowDialogList}
           >
            <img src="./images/bell.svg" alt="" />
          </button>
        </div>
        {open === false ?
          <p>Click to bell for open dialog list...</p>
          :
          <Fragment>
            <ListArea notes={listOfEvents}/>
          </Fragment>
        }
      </div>
      <LevelEnglish />
    </div>
  );
}

export default App;
