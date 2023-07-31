import './Navbar.scss';
import PropTypes from "prop-types";

export const Navbar = ({children}) => {
  return (
    <ul className='navbar'>
      {children}
    </ul>
  )
}


export const NavbarItem = ({link, name}) => {
  return (
    <li className='navbar__item'>
      <a href={link} className='navbar__link'>{name}</a>
    </li>
  )
}

Navbar.propTypes = {
  children: PropTypes.array,
};

NavbarItem.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
};
