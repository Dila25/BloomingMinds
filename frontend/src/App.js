import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import ProjectScope from './Components/ProjectScope/ProjectScope'
import Milestones from './Components/Milestones/Milestones';
import Downloads from './Components/Downloads/Downloads';
import AboutUs from './Components/AboutUs/AboutUs';
function App() {
  return (
    <div>
      <NavBar />
      <div className='full_page_con'>
        <Hero />
        <ProjectScope />
        <Milestones/>
        <Downloads/>
        <AboutUs/>
      </div>
    </div>
  );
}

export default App;