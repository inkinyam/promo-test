import './About.scss';
import cardImg1 from '../../assets/cardimg1.png';
import cardImg2 from '../../assets/cardimg2.png';

export const About = () => {
  return (
    <section className='about' id='mechanics'>
      <h2 className="about__title">Как участвовать?</h2>

      <ul className='about__cards'>
        <li className="card">
          <img className="card__img" src={cardImg1} alt="Изображнение стаканчика кофе" />
          <div className="card__texblock">
            <h3 className="card__title">Покупайте кофе</h3>
            <p className="card__text">с картой лояльности «Заправься выгодой»</p>
            <p className="card__description">*за исключением дополнительного эспрессо шота</p>
          </div>
        </li>
        <li className="card">
          <img  className="card__img" src={cardImg2} alt="Изображнение стаканчика кофе" />
          <div className="card__texblock">
            <h3 className="card__title">Увеличивайте шансы на победу</h3>
            <p className="card__text">1500 баллов получит тот, кто купит кофе больше других участников в своем регионе с 05.08.2023 – 30.11.2023</p>
            <p className="card__description">*В каждом регионе определенное количество мест</p>
          </div>
        </li>
      </ul>
      <p className="about__description">Для участия необходимо провести акцептование в период с 05.08.2023 по 31.10.2023 в Мобильном приложении «АЗС ЛУКОЙЛ» в карточке акции «Марафон кофе».</p>
    </section>
  )
}