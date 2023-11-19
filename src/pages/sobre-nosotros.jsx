import jpablo from '../assets/images/perfil/pablo.jpeg';
import camila from '../assets/images/perfil/cami.jpeg';
import anuel from '../assets/images/perfil/emma.jpeg';

import './sobre-nosotros.css';

const About = () => {
  return (
    <section className="content about">
      <h2 className="title text-main-800">Conócenos</h2>
      <p>
        ¿Buscas de un consumo bueno y a su vez barato, en donde se equilibre y disminuyan los
        costos en proporción con las demás actividades del común, siendo asequible para el
        ahorro y buena distribución del dinero que ingresa a cada familia? para ello esta...
      </p>
      <h2 className="nom  text-main-800"> COP MARKET</h2>
      <p>
        Te ayudará a comparar los productos entre los principales supermercados de San Antonio
        de Prado para el seguimiento de precios en la canasta familiar, llegando a la
        conclusión de cuales establecimientos son más asequibles ante el consumidor.
      </p>
      <div className="box-container">
        <div className="box">
          <img src={anuel} alt="" />
          <h3>EMMANUEL MUÑOZ</h3>
          <h4>(16 años) </h4>
          <h5>Egresado Colegio Empresarial </h5>
          <p>
            Aspirante a ingerieria de sistemas en el Instituto Tecnológico Metropolitano de
            Medellín.
          </p>
          <div className="stars">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star"> </i>
            <i className="fa fa-star"> </i>
          </div>
        </div>
        <div className="box">
          <img src={camila} alt="" />
          <h3>CAMILA CANO</h3>
          <h4>(16 años) </h4>
          <h5>Egresada Colegio Empresarial </h5>
          <p> Aspirante a ingenieria en diseño industrial en la universidad EAFIT</p>
          <div className="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              width="20"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>

            <i className="fa fa-star"> </i>
            <i className="fa fa-star"> </i>
          </div>
        </div>
        <div className="box">
          <img src={jpablo} alt="" />
          <h3>JUAN PABLO BEDOYA</h3>
          <h4>(16 años)</h4>
          <h5>Egresado Colegio Empresarial</h5>
          <p>Aspirante a ingerieria de sistemas en la universidad de Antioquia.</p>
          <div className="stars">
            <i className="fa fa-star"> </i>
            <i className="fa fa-star"> </i>
            <i className="fa fa-star"> </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
