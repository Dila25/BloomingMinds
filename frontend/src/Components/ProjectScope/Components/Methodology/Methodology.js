import React from 'react'
import './Methodology.css'
function Methodology() {
    return (
        <div className='research_gap_con'>
            <div className='subCom_topic'>
                <p className='sub_topic'>Methodology</p>
                <p Solution>Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is </p>
            </div>
            <div className='research_gap_card_con'>
                <div className='card_left'>
                    <div className='meth_img_card'>

                    </div>
                </div>
                <div className='card_oright'>
                    <p>Fig 4 illustrates the overall system diagram of the proposed solution which was intended to provide a smart approach for stakeholders, researchers, and Coconut Development Officers (CDOs) to detect the coconut diseases and pest infestations that may affect the coconut industry. As shown in the diagram, the registered users of the system can capture or upload the images which are suspicious. The images are sent to the Amazon Web Services (AWS) backend server where the flask server is deployed. These images are processed in the flask server by the designed DCNN models for disease identification. If WCLWD is found, the symptom severity will be determined using CNN models. Simultaneously, if CCI is identified, the images will go through the Mask-R-CNN model to determine the progression level while the number of caterpillars are extracted using the YOLOv5 object detection algorithm. Images will be classified using the CNN models of Mg deficiency and LSD at the same time.</p>
                </div>
            </div>
        </div>
    )
}

export default Methodology
