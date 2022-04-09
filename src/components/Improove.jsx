import React from 'react'

function Improove() {
    const list =[
        "Learn new recepies",
        "Experiment with food",
        "write your own recepies",
        "Know nutition facts",
        "Get cooking tips",
        "Get special somthing"
    ]
  return (
    <>
    <div className="section improve-skills">
    <div className="col img">
       <img src="/img/gallery/16.png" alt=""/>
       </div>
    <div className="col typography">
     <h1 className="title">How Can I Help You</h1>
     {list.map((item,index)=>(
         <p className='skill-item' key={index}>{item}</p>
     ))}
     <button className='btn'>singup now </button>
    </div>
    </div>
    </>
  )
}

export default Improove