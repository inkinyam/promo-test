import './Lead.scss';
import PropTypes from "prop-types";
import cupImg from '../../assets/cup.png';
import { useLayoutEffect } from 'react';

export const Lead = ({children}) => {


useLayoutEffect(()=> {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}, [])

  return (
    <section className='lead'>
        {children}

        <div className="lead__textblock">
          <h1 className='lead__title'>Марафон кофе</h1>
          <p className="lead__description">Покупайте кофейные напитки* на АЗС «ЛУКОЙЛ» и получайте 1500 баллов на карту программы лояльности</p>
          <p className="lead__dates">01.08.2023 – 31.11.2023</p>
        </div>
        <div className="lead__imgbox">
          <div className="container">
            <div className="lead__line top">
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
            </div>
            <div className="lead__line top one">
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
            </div>
          </div>

          <div className="container">
            <div className="lead__line top">
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
            </div>
            <div className="lead__line top one">
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
              <img src={cupImg} alt="cup" className="" />
            </div>
          </div>

        </div>
        
    </section>
  )
}

Lead.propTypes = {
  children: PropTypes.any,
};
