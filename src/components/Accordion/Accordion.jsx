import PropTypes from "prop-types";
import './Accordion.scss';
import { AccordionContext } from "../../context/AccordionContext";
import { useCallback, useContext, useState } from "react";


export const Accordion = ({ children }) => {
  const [activeItem, setActiveItem] = useState(undefined);

  
  const switchItem = useCallback((id) => {
    setActiveItem((activeId) => (activeId === id ? undefined : id));
  }, []);

  return (
    <AccordionContext.Provider value={{ activeItem, switchItem }}>
      <section className="accordion">
        <h2 className="accordion__title">FAQ</h2>

        <ul className="accordion__list">
          {children}
        </ul>
      </section>
    </AccordionContext.Provider>
  )
}


export const AccordionItem = ({ title, children, id }) => {

  const { activeItem, switchItem } = useContext(AccordionContext);

  return (
    <li className={(activeItem === id)? "item opened" : "item"}  id={id} onClick={()=> {switchItem(id)}}>
      <div className="item__header">
        <button className='item__icon'>
          <span></span>
          <span></span>
        </button>
        <h3 className='item__title'>{title}</h3>
      </div>

      <div className='item__content'>
        <div className='item__wrapper'>{children}</div>
      </div>
    </li>
  )
}

Accordion.propTypes = {
  children: PropTypes.array,
};

AccordionItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  id: PropTypes.any,
};
