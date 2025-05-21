import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import ProjectScope from './Components/ProjectScope/ProjectScope'
function App() {
  return (
    <div>
      <NavBar />
      <div className='full_page_con'>
        <Hero />
        <ProjectScope />
      </div>
    </div>
  );
}

export default App;