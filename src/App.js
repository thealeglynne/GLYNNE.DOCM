import './App.css';
import VideoDesktop from "./videos/welcome GLYNNE.mp4"
import VideoMobile from "./videos/bienbenido a GLYNNE.mp4";
import MiniaturaDesktop from "../src/img/miniatura.png"
import MiniaturaMobile from "../src/img/1_c92a5528-84ca-41f1-a82f-99bfe28db230.png";

import {  FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
function App() {

  const getVideoSource = () => {
    if (window.innerWidth < 500) {
      return VideoMobile
    } else {
      return VideoDesktop;
    }
  };
  const getPosterSource = () => {
    if (window.innerWidth < 500) {
      return MiniaturaMobile;
    } else {
      return MiniaturaDesktop;
    }
  };

  const handlePlayClick = () => {
    // Aquí puedes implementar la lógica para iniciar la reproducción del video cuando se hace clic en el botón.
    const video = document.querySelector('.responsive-video');
    video.play();
  };

  return (
    <div className="App">
      <section className="section1">
        <nav>
          <ul>
            <li><a href="#prosses">PROSSES</a></li>
            <li><a href="#tools">TOOLS</a></li>
            <li><a href="#footer">CONTACT</a></li>
          </ul>
        </nav>
        <div className="content">
          <div className="video-container">
            <video className="responsive-video" controlsList="nodownload" poster={getPosterSource()} autoPlay={false}>
              <source src={getVideoSource()} type="video/mp4" />
              {/* Agrega más formatos de video si es necesario */}
            </video>
            <button className="play-button" onClick={handlePlayClick}></button>
          </div>
        </div>
      </section>

    <section id="prosses" className="section2">
      <div className="container2">
      <h1 className="titulo">Potenciando el Crecimiento del Comercio Electronico: Nuestros Procesos de Marketing Digital en GLYNNE </h1>
      <p className="textoProsses">En GLYNNE, nuestro enfoque en el desarrollo de marketing digital para el crecimiento del comercio electrónico se basa en tres procesos fundamentales:

Investigación y Análisis: Comenzamos por entender a fondo tu empresa y el mercado objetivo. Realizamos un análisis exhaustivo de la competencia y las tendencias del mercado para identificar oportunidades y desafíos. También evaluamos el comportamiento del cliente y sus preferencias para adaptar nuestras estrategias.<br/>

Estrategia Personalizada: Con los datos recopilados, creamos una estrategia de marketing digital personalizada para tu negocio de desarrollo de software. Esto incluye la selección de las plataformas y canales más adecuados, como redes sociales, SEO, SEM, email marketing y más. Diseñamos campañas atractivas y mensajes persuasivos para llegar a tu audiencia y aumentar las conversiones.<br/>

</p>
</div> 
    </section>
    <section id="tools" className="section3">
      <div className="container3">
      <h1 className="titulo">Investigación y Análisis: </h1>
      <p className="textoProsses3">Comenzamos por entender a fondo tu empresa y el mercado objetivo. Realizamos un análisis exhaustivo de la competencia y las tendencias del mercado para identificar oportunidades y desafíos. También evaluamos el comportamiento del cliente y sus preferencias para adaptar nuestras estrategias.</p>
</div> 
    </section>
    <section className="section4">
      <div className="container4">
      <h1 className="titulo">Estrategia Personalizada </h1>
      <p className="textoProsses">Con los datos recopilados, creamos una estrategia de marketing digital personalizada para tu negocio de desarrollo de software. Esto incluye la selección de las plataformas y canales más adecuados, como redes sociales, SEO, SEM, email marketing y más. Diseñamos campañas atractivas y mensajes persuasivos para llegar a tu audiencia y aumentar las conversiones. </p>
</div> 
    </section>

    <section className="section5">
      <div className="container5">
      <h1 className="titulo">Optimización Continua </h1>
      <p className="textoProsses">Nuestra labor no termina con la implementación de la estrategia. Monitorizamos constantemente los resultados y realizamos ajustes para optimizar el rendimiento. Utilizamos datos y métricas para tomar decisiones informadas y asegurarnos de que tu comercio electrónico alcance su máximo potencial de crecimiento.

</p>
</div> 
    </section>

    

    <section className="section6">
      <div className="container6">
     
      <p className="textoProsses">En GLYNNE, nuestro compromiso es impulsar el éxito de tu empresa de desarrollo de software a través de soluciones de marketing digital efectivas y orientadas al crecimiento del comercio electrónico. Juntos, alcanzaremos nuevos niveles de éxito en el mercado digital actual. </p>
</div> 
    </section>

    <div id='footer' className='footer'>
        <div className="cardFOOTER">
          <div className="SobrecardFOOTER">
            <div className="footerLinks">
              <a href="https://www.linkedin.com/in/alexander-quiroga-90a781245/a" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="footerIcon" />
                lINKEDIN
              </a>
              <a href="https://github.com/thealeglynne" target="_blank" rel="noopener noreferrer">
                <FaGithub className="footerIcon" />
                GITHUB
              </a>
              <a href="https://www.instagram.com/glynne1224/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="footerIcon" />
                INSTAGRAM
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094430292906" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="footerIcon" />
                FACEBOOK
              </a>
              <a href="https://wa.me/+573142142188" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="footerIcon" />
                (+57) 3142142188
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
  );
}

export default App;
