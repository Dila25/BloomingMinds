import React from 'react'
import './Methodology.css'
function Methodology() {
    return (
        <div className='research_gap_con'>
            <div className='subCom_topic'>
                <p className='sub_topic'>Methodology</p>
                <p Solution>The proposed adaptive e-learning platform consists of five main components. They are:

Cognitive, linguistic, visual, and motor challenges analysis

Personalized content adaptation based on VARK learning styles

Handwriting and speech recognition using machine learning models

Multi-sensory interactive learning modules development

User feedback collection and performance evaluation</p>
            </div>
            <div className='research_gap_card_con'>
                <div className='card_left'>
                    <div className='meth_img_card'>

                    </div>
                </div>
                <div className='card_oright'>
                    <p>Fig X illustrates the overall system architecture of the proposed solution designed to provide an individualized and engaging learning experience for children with Down Syndrome. As shown in the diagram, users access the platform through a user-friendly interface where they interact with personalized lessons and activities tailored to their learning style and progress.

The system collects input data from user interactions and speech or handwriting samples, which are processed by the backend server deploying machine learning algorithms such as CNN, LSTM, SVM, and Reinforcement Learning models. These models analyze learning patterns and provide personalized content adjustments in real time.

Simultaneously, interactive multi-sensory modules deliver content in auditory, visual, reading/writing, and kinesthetic formats to support diverse learning needs. The platform tracks user progress and engagement, storing data securely for continuous adaptation.

Finally, educators and caregivers provide feedback through integrated surveys and reports, allowing the system to evaluate and improve learning outcomes continuously.

</p>
                </div>
            </div>
        </div>
    )
}

export default Methodology
