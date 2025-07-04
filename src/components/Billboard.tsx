import arrowImg from '../img/arrow.svg';
import gearImg from '../img/gear.svg';

import '../style/billboard.css';

function Billboard() {
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
  );
}

export default Billboard;
