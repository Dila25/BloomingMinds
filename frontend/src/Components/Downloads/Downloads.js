import React from 'react'
import './Downloads.css'
import Documents from './Components/Documents/Documents'
import Presentations from './Components/Presentations/Presentations'
function Downloads() {
  return (
    <div className='color_con'>
      <div className='sub_container'>
        <p className='topic'>Downloads</p>
        <div className='pro_comp_conM'>
          <Documents />
          <Presentations />
        </div>
      </div>
    </div>
  )
}

export default Downloads
