import React from 'react'


const Modal= ({open,image,name,origin,location,statuso,gender,Closer}) => {
   

    if (!open) return null
return ( 

 <div className="overlay" onClick={Closer}>
    <div className='container-for-modal'>
      <div id="top">
          <p onClick={Closer} className="close">x</p>
          <img src={image}></img>
      </div>
      <div className="modalContainer">
        <p>Name: {name}</p>
        <p>Gender: {gender} </p>
        <p>Location: {location}</p>
        <p>Status: {statuso}</p>  
        <p>Origin: {origin}</p>
      </div>
    </div>
</div>
)
}
export default Modal;