import React, {useState} from 'react';
import ModalLoc from './ModalLoc'


const Location = ({ name, type, dimension }) => {
  const displayCard = () => {
    
    setOpenModal(true)
  }
  const [openModal, setOpenModal] = useState(false)
    return (
  <div>
      <div>
      <ModalLoc
      Closer={()=>setOpenModal(false)}
      open={openModal}
      name={name}
      type={type}
      dimension={dimension}
     />
      </div>
    <div  onClick={displayCard} className="card" style={{width: "10rem"}}>
        <img src="https://i.imgur.com/rtOElaO.jpg" />
        <div className="card-body">
          <p className="card-text">
          {name} {type}
          </p>
        </div>
      </div>
  </div>
    );
  };
  
  export default Location;
  