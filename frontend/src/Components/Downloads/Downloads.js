import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import './Downloads.css'
import Documents from './Components/Documents/Documents'
import Presentations from './Components/Presentations/Presentations'

const Downloads = forwardRef((props, ref) => {
  const documentsRef = useRef(null);
  const presentationsRef = useRef(null);

  useImperativeHandle(ref, () => ({
    documentsRef,
    presentationsRef,
  }));

  return (
    <div className='color_con'>
      <div className='sub_container'>
        <p className='topic'>Downloads</p>
        <div className='pro_comp_conM'>
          <div className='with_set' ref={documentsRef}>
            <Documents />
          </div>
          <div className='with_set' ref={presentationsRef}>
            <Presentations />
          </div>
        </div>
      </div>
    </div>
  )
});

export default Downloads
