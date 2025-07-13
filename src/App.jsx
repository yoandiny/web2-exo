import './App.css'
import { Navbar } from './components/Navbar'
import  Slider  from './components/Slider'
import  Slider2  from './components/Slider2'
import StudentImage from './assets/students.jpg'
import OutletImage from './assets/outlet.jpg'

function App() {


  return (
    
    <div className='app'>
    <title>Accueil - HEI | Haute Ecole d'Informatique de Madagascar</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <Navbar />
      <Slider />

      <section id='about'>


          <img className='about-image' src={StudentImage} alt="" />
        
        <div className="about-text-container">
          <h2 className='about-text'>A propos de nous</h2>
        <div className="icon-container">
          <i class='bx bxs-graduation'></i>
          <h2> +3ans</h2>
          </div>
        <p className='about-description'>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts,
           de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>

        <div className="icon-container">
          <i class='bx bxs-user'></i>
           <h2>  +250 étudiants</h2>
        </div>
        <p className='about-description'>
          Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée
          par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.
        </p>

        <div className="icon-container">
          <i class='bx bxs-medal' ></i>
           <h2> Notre mission</h2>
        </div>
        <p className='about-description'>
          Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle,
          la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
        </p>
        </div>

      </section>
      <section id='team'>
          <h2 className='team-title'>L'équipe pédagogique</h2>
          <p className='team-description'>
            Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité,
            de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont
            engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de
            nos étudiants, elle a été soigneusement sélectionnée.
          </p>
        <Slider2/>

        </section>

        <section id='outlet'>
          <span className='outlet-text-container'>
            <h3 className='outlet-title'>Quelques débouchés</h3>
            <p className='outlet-description'>
              Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation
               (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers
                du futur…<br />
            <br/>Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
            </p>
          </span>
          <img className='outlet-image' src={OutletImage} alt="" />
        </section>
        <section id='domains'>
          <h2 className='domains-title'>
            Domaines
          </h2>
          <p className='domains-subtitle'>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et
            de l’avenir :</p>
            <span className="domains-container">
              <div className='domain-item'>
                <i class='bx bxs-code-alt'></i>
                
              
            </div>

            <div className='domain-item'>
                
              
            </div>

            <div className='domain-item'>
                
              
            </div>
            </span>

        </section>

        <section id='program'>

        </section>


    </div>
  )
}

export default App
