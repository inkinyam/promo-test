import './App.scss'
import { About } from './components/About/About';
import { Accordion, AccordionItem } from './components/Accordion/Accordion';
import { FAQ } from './components/FAQ/FAQ';
import { Lead } from './components/Lead/Lead';
import { Navbar, NavbarItem } from './components/Navbar/Navbar';
import { Prize } from './components/Prize/Prize';
import { Rules } from './components/Rules/Rules';

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

      <FAQ>
        <Accordion>
          <AccordionItem id='1' title='Как принять участие в акции?'>
              <ol>
                <li>
                  Для участия и включения в список кандидатов акции, которые получают право претендовать на получение 
                  акционных баллов, участнику акции необходимо совершить не менее 1 (одной) акционной покупки, в период 
                  проведения акции в акционных торговых точках (АЗС).
                </li>
                <li>
                  Акционная покупка должна быть совершена с использованием Карты Лояльности и оплачена наличными 
                  денежными средствами и/или банковской картой. Количество акционных покупок в сутки не ограничено.
                </li>
              </ol>
          </AccordionItem>

          <AccordionItem id='2' title='Какие сроки проведения акции?'>
              <p>Период проведения акции 01.08.2023 – 31.11.2023</p>
          </AccordionItem>

          <AccordionItem id='3' title='Какие призы я могу получить по акции?'>
              <ul>
                <li>
                  кружку кофе
                </li>
                <li>
                  1500 баллов
                </li>
              </ul>
          </AccordionItem>

          <AccordionItem id='4' title='Сколько я могу выиграть призов?'>
            <p>1</p>
          </AccordionItem>

          <AccordionItem id='5' title='Где размещены правила акции?'>
            <p>1</p>
          </AccordionItem>

          <AccordionItem id='6' title='Как я могу связаться с оператором Акции?'>
            <p>1</p>
          </AccordionItem>

          <AccordionItem id='7' title='Где я могу посмотреть участников розыгрышей?'>
            <p>1</p>
          </AccordionItem>
        </Accordion>
      </FAQ>
    </>
  )
}

export default App;
