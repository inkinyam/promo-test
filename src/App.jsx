import './App.scss'
import { About } from './components/About/About';
import { Accordion, AccordionItem } from './components/Accordion/Accordion';
import { FAQ } from './components/FAQ/FAQ';
import { Lead } from './components/Lead/Lead';
import { Navbar, NavbarItem } from './components/Navbar/Navbar';
import { Prize } from './components/Prize/Prize';
import { Rules } from './components/Rules/Rules';
/* import { Winners } from './components/Winners/Winners'; */

function App() {
 
  return (
    <>
      <Lead>
        <Navbar>
          <NavbarItem link='#mechanics' name='Механика' />
          <NavbarItem link='#prizes' name='Призы' />
          <NavbarItem link='#faq' name='FAQ' />
        </Navbar>
      </Lead>

      <About />
      <Prize />
      <Rules />

     {/*  <Winners /> */}

      <FAQ>
        <Accordion>
          <AccordionItem id='1' title='Как принять участие в&nbsp;Акции?'>
              <ol>
                <li>
                   Для участия необходимо провести акцептование в&nbsp;период с&nbsp;05.08.2023 по&nbsp;31.10.2023&nbsp;в Мобильном приложении &laquo;АЗС ЛУКОЙЛ&raquo; в&nbsp;карточке акции &laquo;Марафон кофе&raquo;.
                </li>
                <li>
                   Для участия и&nbsp;включения в&nbsp;список кандидатов Акции, получающим право претендовать на&nbsp;получение Акционных баллов Участнику Акции необходимо совершить не&nbsp;менее&nbsp;1&nbsp;(одной) Акционной покупки, в&nbsp;период проведения Акции в&nbsp;Акционных торговых точках (АЗС).
                </li>
                <li>
                Акционная покупка должна быть совершена с&nbsp;использованием Карты Лояльности и&nbsp;оплачена наличными денежными средствами и/или банковской картой. Количество Акционных покупок в&nbsp;сутки не&nbsp;ограничено.
                </li>
              </ol>
          </AccordionItem>

          <AccordionItem id='2' title='Какие сроки проведения акции?'>
              <p>Общий период проведения Акции, включая выдачу призов: 05&nbsp;августа 2023 года по&nbsp;30&nbsp;ноября 2023&nbsp;года.</p>
          </AccordionItem>

          <AccordionItem id='3' title='Какие призы я&nbsp;могу получить по&nbsp;акции?'>
              <p>В&nbsp;рамках Акции Участник получает шанс на&nbsp;получение в&nbsp;количестве 1500 (тысяча пятьсот)* Акционных баллов путем зачисления на&nbsp;Карту Лояльности Участника.</p>
          </AccordionItem>

          <AccordionItem id='4' title='Сколько я&nbsp;могу выиграть призов?'>
            <p>Каждый Участник Акции может получить Акционные баллы только один раз за&nbsp;весь период проведения Акции.</p>
          </AccordionItem>

          <AccordionItem id='5' title='Где размещены правила акции?'>
            <p>Правила Акции размещены на&nbsp;Сайте Акции <a href='https://marafoncoffee.ru'>marafoncoffee.ru</a></p>
          </AccordionItem>

          <AccordionItem id='6' title='Как я&nbsp;могу связаться с&nbsp;оператором Акции?'>
            <p>Свой вопрос&nbsp;Вы можете задать по&nbsp;электронной почте <a href="mailto:hotline@lukoil.com">hotline@lukoil.com</a> или по&nbsp;телефону Единой Горячей Линии <a href="tel:88001000911" className="">88001000911</a>.</p>
          </AccordionItem>

          <AccordionItem id='7' title='Где я&nbsp;могу посмотреть участников розыгрышей?'>
            <p>Список Участников, Кандидатов на&nbsp;получение Акционных баллов, в&nbsp;рамках Акции, публикуется Оператором на&nbsp;Интернет-представительстве Программы в&nbsp;срок не&nbsp;позднее&nbsp;1 (одного) рабочего дня с&nbsp;Даты определения Кандидатов Акции и&nbsp;дублируется на&nbsp;Сайте Акции.</p>
          </AccordionItem>
        </Accordion>
      </FAQ>
    </>
  )
}

export default App;
