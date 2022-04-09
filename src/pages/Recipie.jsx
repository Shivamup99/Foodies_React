import React from 'react'
import RecipiCard from '../components/RecipiCard'
import Searches from '../components/Searches'
function Recipie() {
  return (
    <>
   <Searches/>
   <div className="recipies-container">
     <RecipiCard/>
     </div>
   </>
  )
}

export default Recipie