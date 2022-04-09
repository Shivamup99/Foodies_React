import React from 'react'

function CustomImg({imgSrc,pt}) {
  return (
    <div className='custom-image' style={{paddingTop:pt}}>
        <img src={imgSrc} alt=""/>
        </div>
  )
}

export default CustomImg