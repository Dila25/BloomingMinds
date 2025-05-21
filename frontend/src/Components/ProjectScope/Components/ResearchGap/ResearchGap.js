import React from 'react'
import './ResearchGap.css'

const researchGapCards = [
  {
    iconClass: 'research_gap_card_icon',
    topic: 'Identification & classification',
    pera: 'There are no records of a smart solution for coconut pest and disease identification and classification in Sri Lanka. Symptoms of coconut disorders show similar characteristic appearance and therefore it is a challenge to provide a solution.'
  },
  {
    iconClass: 'research_gap_card_icon_two',
    topic: 'Identification & classification',
    pera: 'There are no records of a smart solution for coconut pest and disease identification and classification in Sri Lanka. Symptoms of coconut disorders show similar characteristic appearance and therefore it is a challenge to provide a solution.'
  },
  {
    iconClass: 'research_gap_card_icon_thre',
    topic: 'Identification & classification',
    pera: 'There are no records of a smart solution for coconut pest and disease identification and classification in Sri Lanka. Symptoms of coconut disorders show similar characteristic appearance and therefore it is a challenge to provide a solution.'
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
