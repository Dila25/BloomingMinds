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
                    <p className='card_left_sub_topic'>How to classify pest and diseases in coconut and provide surveillance to people in real time?</p>
                    <p className='card_left_pera'>Weligama Coconut Leaf Wilt Disease (WCLWD) and Coconut Caterpillar Infestation (CCI) are the most threatening disease and pest of coconut in Sri Lanka. Due to WCLWD about 300,000 palms were removed and an estimated 60,000 palms needed to be identified for removal. An economical yield loss will result if more than 30% defoliation is caused due to CCI. For efficient management of WCLWD and CCI, identification at an early stage and effective communication of growers and professionals is needed.
                    </p>
                </div>
                <div className='card_oright'>
                    <iframe src="https://www.youtube.com/embed/fHgyXi6gzHs?si=jqU5xlbHNhyrxBaC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='iframe_card'></iframe>
                    <p className='figure_name'>Product Demonstration - Solution</p>
                </div>
            </div>
            <p className='card_left_topic'>Proposed Solution</p>
            <p className='card_left_pera'>Coco Remedy uses mobile and web-based software to manage Weligama Coconut Leaf Wilt Disease (WCLWD) and Coconut Caterpillar Infestation (CCI), which devastate coconut cultivation. In WCLWD, yellowing of leaves which also associates with Magnesium deficiency makes it difficult to distinguish the diseased palms accurately. Similarly, the dried appearance of leaves due to CCI is difficult to distinguish from leaf scorching. Therefore, Deep Learning techniques like Convolutional Neural Networks (CNN) for feature extraction will be used to identify the diseases accurately. Coconut growers, Estate managers of plantation companies, Researches of Coconut Research Institute (CRISL), Coconut Development Officers (CDOs) of Coconut Cultivation Board (CCB), and the general public will be able to identify diseased palm accurately by capturing a photograph of leaf with symptoms. The location will be extracted by Geo Tags in order to gather anonymous data using OpenWeatherMapAPI for future predictions. The severity of WCLWD is calculated based on the multiple symptoms using CNN. Since caterpillars’ associates with the damaged leaves in CCI, counts of caterpillars are taken using OpenCV / YOLO object detection while the infected area is calculated using MASK R-CNN. Using the above-mentioned parameters progression level is determined. Real-time notifications are sent whenever an infected tree is found. Details of the infected trees, location and severity records enable the researches and CDOs to take remedial actions. Infected areas and danger zones which might be affected in the future can visualized through Google mapping technologies. Nearby users are notified to take precautions before their lands get affected.</p>
        </div>
    )
}

export default ResearchProblemAndSolution
