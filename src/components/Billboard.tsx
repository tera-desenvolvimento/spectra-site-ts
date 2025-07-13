import arrowImg from '../img/arrow.svg';
import gearImg from '../img/gear.svg';

import isMobileDevice from "../controllers/checkMobile.controller";

import '../style/billboard.css';

function Billboard() {
  if (!isMobileDevice()) {
    return (
      <div className="billboard-container">
        <div className="billboard-wrapper">
          <span>Inovação que acelera - Eficiência que conecta - Parcerias que crescem - Soluções sustentáveis - Adaptabilidade para o futuro</span>
          <b>Transformando <br /> negócios,<br /> simplificando <br /> o futuro.</b>
          <p>Gestão descomplicada para o sucesso do seu negócio. <br /> Conquiste clientes com agilidade onde você estiver.</p>
          <a href="#">Clique aqui para  falar com a gente <img src={arrowImg} /></a>
          <img src={gearImg} className='gear-icon' />
        </div>
      </div>
    )
  } else {
    return (
      <div className="billboard-container-mob">
        <div className="billboard-wrapper-mob">
          <b>Transformando <br /> negócios, <br /> simplificando <br /> o futuro.</b>
          <ul>
            <li>Inovação que acelera</li>
            <li>Eficiência que conecta</li>
            <li>Parcerias que crescem</li>
            <li>Soluções sustentáveis</li>
            <li>Adaptabilidade para o futuro</li>
          </ul>
          <p>Gestão descomplicada para o sucesso do seu negócio. <br /> Conquiste clientes com agilidade onde você estiver.</p>
          <a href="#">Clique aqui para  falar com a gente <img src={arrowImg} /></a>
          <img src={gearImg} className='gear-icon' />
        </div>
      </div>
    )
  }
}

export default Billboard;
