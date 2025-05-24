import React from 'react'
import './projectScope.css'
import ResearchGap from './Components/ResearchGap/ResearchGap'
import ResearchProblemAndSolution from './Components/ResearchProblemAndSolution/ResearchProblemAndSolution'
import ResearchObjectives from './Components/ResearchObjectives/ResearchObjectives'
import Methodology from './Components/Methodology/Methodology'
import Technologies from './Components/Technologies/Technologies'
function ProjectScope() {
  return (
    <div className='sub_container'>
      <p className='topic'>Project <span className='bline'> Scope</span></p>
      <div className='pro_comp_con'>
        <ResearchGap />
        <ResearchProblemAndSolution />
        <ResearchObjectives />
        <Methodology />
        <Technologies />
      </div>
    </div>
  )
}

export default ProjectScope
