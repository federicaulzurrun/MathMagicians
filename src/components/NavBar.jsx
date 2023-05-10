import { Link, NavLink } from 'react-router-dom';
import style from '../styles/NavBar.module.css';

const NavBar = () => (
  <nav className={style.navContainer}>
    <h1 className={style.title}>Math Magicians</h1>
    <div className={style.navLinkContainer}>
      <Link to="/" className={style.link}>Home</Link>
      <span className={style.line} />
      <NavLink to="/Calculator" className={style.link}>Calculator</NavLink>
      <span className={style.line} />
      <NavLink to="/Quotes" className={style.link}>Quotes</NavLink>
    </div>
  </nav>
);

export default NavBar;
