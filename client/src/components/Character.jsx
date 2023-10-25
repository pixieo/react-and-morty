import React, {useState} from 'react';
import Modal from './Modal'

const Character = ({ name, gender, image, originName, locationName, statuso, species}) => {
const displayCard = () => {
    
    setOpenModal(true)
  }

  const [openModal, setOpenModal] = useState(false)
  
  return (
  <div>
        <div>
            <Modal 
            Closer={()=>setOpenModal(false)}
            open={openModal}
            name={name}
            image={image}
            origin={originName}
            gender={gender}
            statuso={statuso}
            species={species}
            location={locationName} />
        </div>
      <div
          onClick={displayCard}
          className="card"
          style={{ width: "10rem" }}
        >
          
          <img src={image} className="card-img-top" alt="Character named "/>
          <div className="card-body">
            <p className="card-text">Name: {name} </p>
            <p>Gender: {gender} </p>
          </div>
      </div>
    </div>
  );
};

export default Character;
