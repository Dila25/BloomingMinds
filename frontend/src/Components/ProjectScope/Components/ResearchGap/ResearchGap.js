import React from 'react'
import './ResearchGap.css'

const researchGapCards = [
  {
    iconClass: 'research_gap_card_icon',
    topic: 'Lack of Personalization',
    pera: 'Most platforms offer one-size-fits-all content without adapting to individual learning needs, reducing effectiveness for learners with Down Syndrome.'
  },
  {
    iconClass: 'research_gap_card_icon_two',
    topic: 'Limited Multisensory Learning',
    pera: 'Tools often focus on just one mode (visual or audio) and miss out on engaging multiple senses, which is crucial for children with diverse learning styles.'
  },
  {
    iconClass: 'research_gap_card_icon_thre',
    topic: 'Poor Feedback & Tracking',
    pera: 'Real-time progress tracking and feedback are often missing, making it hard for educators and parents to support and monitor learners effectively.'
  }
];

function ResearchGap() {
  return (
    <div className='research_gap_con'>
      <div className='subCom_topic'>
        <p className='sub_topic'>Research Gap</p>
        <p className='sub_pera'>Following areas are the research gaps found in most of the recent researches.</p>
      </div>
      <div className='research_gap_card_con'>
        {researchGapCards.map((card, idx) => (
          <div className='research_gap_card' key={idx}>
            <div className={card.iconClass}></div>
            <p className='research_gap_card_topic'>{card.topic}</p>
            <p className='research_gap_card_pera'>{card.pera}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResearchGap
