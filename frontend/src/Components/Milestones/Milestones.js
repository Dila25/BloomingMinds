import React from 'react'
import './Milestones.css'
function Milestones() {
  return (
    <div className='sub_container'>
      <div className='research_gap_con'>
        <div className='subCom_topic'>
          <p className='sub_topic'></p>
          <p className='topic'><span className='bline'>Milestones</span></p>
          <p className='sub_pera'>Following areas are the research gaps found in most of the recent researches.</p>
        </div>
        <div className='obj_card_con'>
          <div className='obj_card'>
            <p className='obj_topic'>Classification of Weligama Coconut Leaf Wilt Disease</p>
            <p className='obj_pera'>The first objective is to classify Weligama Coconut Leaf Wilt Disease (WCLWD) to provide a solution for distinguishing WCLWD uneven yellowing from other diseases. In addition, the symptom severity of WCLWD was determined using a Convolutional Neural Network to identify the disease's symptom severity level to inform the Coconut Research Institute of Sri Lanka (CRISL) to proceed with the necessary precautions to reduce the dispersion rate.</p>
          </div>
          <div className='obj_card'>
            <p className='obj_topic'> March 2021</p>
            <p className='obj_pera'>Project Proposal</p>
            <p>A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.</p>
            <p>Marks Allocated : 6</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Milestones
