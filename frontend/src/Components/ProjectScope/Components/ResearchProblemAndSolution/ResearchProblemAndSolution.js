import React from 'react'
import './ResearchProblemAndSolution.css'
function ResearchProblemAndSolution() {
    return (
        <div className='research_gap_con'>
            <div className='subCom_topic'>
                <p className='sub_topic'>Research Problem & Solution</p>
                <p Solution>Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is </p>
            </div>
            <div className='research_gap_card_con'>
                <div className='card_left'>
                    <p className='card_left_topic'>Proposed Problem</p>
                    <p className='card_left_sub_topic'>How can auditory learning be enhanced for individuals with Down syndrome using real-time interactive technology?</p>
                    <p className='card_left_pera'>In Sri Lanka, approximately 1 in every 800 births is a child with Down syndrome, contributing to an estimated 15,000–20,000 individuals living with the condition across the country. Studies show that up to 70% of individuals with Down syndrome have moderate to severe hearing loss or auditory processing delays, which critically affect their speech development, comprehension, and learning capabilities.
                    </p>
                </div>
                <div className='card_oright'>
                    <iframe src="https://www.youtube.com/embed/fHgyXi6gzHs?si=jqU5xlbHNhyrxBaC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='iframe_card'></iframe>
                    <p className='figure_name'>Product Demonstration - Solution</p>
                </div>
            </div>
            <p className='card_left_topic'>Proposed Solution</p>
            <p className='card_left_pera'>The proposed solution, Blooming Minds, is an adaptive, machine learning-driven e-learning platform specifically designed to support children with Down Syndrome (DS) by addressing their unique cognitive, linguistic, visual, and motor learning needs. Built upon the VARK (Visual, Auditory, Reading/Writing, Kinesthetic) learning theory, the platform offers personalized, multi-sensory learning activities that adapt in real-time to each child’s learning style and progress. Utilizing advanced machine learning techniques such as Convolutional Neural Networks (CNN) for handwriting and speech recognition, Long Short-Term Memory (LSTM) for sequence prediction, Support Vector Machine (SVM) and Random Forest (RF) for performance modeling, and Reinforcement Learning (RL) for dynamic difficulty adjustment, Blooming Minds provides engaging and interactive modules tailored to the abilities of children with DS. The platform features nine interactive modules, real-time feedback, and comprehensive progress tracking dashboards for educators, parents, and caregivers, ensuring continuous monitoring and personalized interventions. By integrating multi-domain learning and leveraging real-world data from local and international sources, Blooming Minds offers a scientifically grounded and practical solution that enhances the learning experience and developmental outcomes for children with Down Syndrome in Sri Lanka and beyond.</p>
        </div>
    )
}

export default ResearchProblemAndSolution
