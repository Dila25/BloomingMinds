import React from 'react'
import './Downloads.css'
import Documents from './Components/Documents/Documents'
import Presentations from './Components/Presentations/Presentations'
function Downloads() {
  return (
    <div className='sub_container'>
      <p className='topic'>Downloads</p>
      <div className='pro_comp_con'>
        <Documents />
        <Presentations />
      </div>
    </div>
  )
}

export default Downloads
