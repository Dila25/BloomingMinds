import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import './projectScope.css'
import ResearchGap from './Components/ResearchGap/ResearchGap'
import ResearchProblemAndSolution from './Components/ResearchProblemAndSolution/ResearchProblemAndSolution'
import ResearchObjectives from './Components/ResearchObjectives/ResearchObjectives'
import Methodology from './Components/Methodology/Methodology'
import Technologies from './Components/Technologies/Technologies'
const ProjectScope = forwardRef((props, ref) => {
  const researchGapRef = useRef(null);
  const researchProblemRef = useRef(null);
  const researchObjectivesRef = useRef(null);
  const methodologyRef = useRef(null);
  const technologiesRef = useRef(null);

  useImperativeHandle(ref, () => ({
    researchGapRef,
    researchProblemRef,
    researchObjectivesRef,
    methodologyRef,
    technologiesRef,
  }));

  return (
    <div className='sub_container'>
      <p className='topic'>Project <span className='bline'> Scope</span></p>
      <div className='pro_comp_con'>
        <div className='with_set' ref={researchGapRef}>
          <ResearchGap />
        </div>
        <div className='with_set' ref={researchProblemRef}>
          <ResearchProblemAndSolution />
        </div>
        <div className='with_set' ref={researchObjectivesRef}>
          <ResearchObjectives />
        </div>
        <div className='with_set' ref={methodologyRef}>
          <Methodology />
        </div>
        <div className='with_set' ref={technologiesRef}>
          <Technologies />
        </div>
      </div>
    </div>
  )
});

export default ProjectScope
