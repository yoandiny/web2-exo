import './App.css'
import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import StudentImage from './assets/students.jpg'

function App() {


  return (
    <div className='app'>
    <title>Accueil - HEI | Haute Ecole d'Informatique de Madagascar</title>
      <Navbar />

      <Slider />

      <section id='about'>
        <div className="about-image-container">
          <img src={StudentIma} alt="" />
        </div>
        <div className="about-text-container">
          <h2 className='about-text'>A propos de nous</h2>
        <h3>+3ans</h3>
        <p>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts,
           de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>
        </div>

      </section>
    </div>
  )
}

export default App
