import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <div className='hero_back'>
      <div className='hero_container'>
        <div className='hero_colum'>
          <div className='hero_colum_lft'>
            <div className='hero_colum_lft_img'></div>
            <p className='lft_cont_topic'><span className='logoB'>B</span>looming<span className='logoM'> M</span>inds</p>
            <p className='lft_pera'>Boost e-learning for Down syndrome learners using <br/>VARK theory. Multisensory methods improve accessibility and engagement.</p>
            <button class="lernbtn">Learn More
            </button>
          </div>
        </div>
        <div className='hero_colum'>
          <div className='hero_colum_righ'>
            <div className='hero_colum_righ_section_one'>
              <div className='hero_colum_righ_card_one hero_colum_righ_card'>
              </div>
              <div className='hero_colum_righ_card_two hero_colum_righ_card'>
              </div>
            </div>
            <div className='hero_colum_righ_section_two'>
              <div className='hero_colum_righ_card_thre hero_colum_righ_card'></div>
              <div className='hero_colum_righ_card_four hero_colum_righ_card'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
