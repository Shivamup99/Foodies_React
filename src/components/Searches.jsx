import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
function Searches() {
    const searches =['pizza','burger','cookies','drink','sandwich','ice-creem']
  return (
    <>
    <div className="previous-searches section">
        <h2>Previously Fillter</h2>
        <div className="privous-searches-container">
           {searches.map((search,index)=>(
               <div className='search-item' style={{animationDelay: index*.2 +'s'}} key={index}>
                {search}
                </div>
           ))} 
            </div>
            <div className="search-box">
              <input type='text' placeholder='Search ....'/>
              <button className='btn'>
                <FontAwesomeIcon icon ={faSearch}/>
                </button>
              </div>
        </div>
    </>
  )
}

export default Searches