import './App.css'
import { Navbar } from './components/Navbar'
import  Slider  from './components/Slider'
import  Slider2  from './components/Slider2'
import StudentImage from './assets/students.jpg'
import OutletImage from './assets/outlet.jpg'
import Cyber from './assets/cyber.png'
import AI from './assets/ai.png'
import Code from './assets/code.png'
import Footer from './components/Footer'

function App() {


  return (
    
    <div className='app'>
    
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
                <img className='domain-image' src={Cyber} alt="" />
                <h3 className='domain-title'>
                  Cloud et Cybersécurité
                </h3>
                <p className='domain-description'>
                  Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore,
                  devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les
                   cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.
                </p>
                
              
            </div>

            <div className='domain-item'>
              <img className='domain-image' src={AI} alt="" />
              <h3 className='domain-title'>
                Intelligence artificielle
              </h3>
              <p className='domain-description'>
                Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ?
                 Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez
                  HEI.
              </p>
              
                
              
            </div>

            <div className='domain-item'>
              <img className='domain-image' src={Code} alt="" />
              <h3 className='domain-title'>
                Ingénierie logicielle
              </h3>
              <p className='domain-description'>
                Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et
                 explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions
                  pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.
              </p>
                
              
            </div>
            </span>

        </section>

       <Footer />


    </div>
  )
}

export default App
