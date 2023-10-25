import React from 'react'


const ModalLoc= ({open,name,type,dimension,Closer}) => {
   

    if (!open) return null
return ( 

 <div className="overlay" onClick={Closer}>
    <div id="top">
        <p onClick={Closer} className="close">x</p>
        <img height={"500px"} src="https://i.imgur.com/rtOElaO.jpg"></img>
   </div>
    <div className="modalContainer">
      <p>Name: {name}</p>
      <p>Type: {type} </p>
      <p>Dimension: {dimension}</p>
    </div>
    
  
</div>
)
}
export default ModalLoc;