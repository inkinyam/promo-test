import './Lead.scss';
import PropTypes from "prop-types";
import cupsImg from '../../assets/cups2.png';

export const Lead = ({children}) => {
  return (
    <section className='lead'>
        {children}

        <div className="lead__textblock">
          <h1 className='lead__title'>Марафон кофе</h1>
          <p className="lead__description">Покупайте кофейные напитки* на АЗС «ЛУКОЙЛ» и получайте 1500 баллов на карту программы лояльности</p>
          <p className="lead__dates">01.08.2023 – 31.11.2023</p>
        </div>
        <img className='lead__img' src={cupsImg} alt="изображение стаканчиков" />
    </section>
  )
}

Lead.propTypes = {
  children: PropTypes.any,
};
