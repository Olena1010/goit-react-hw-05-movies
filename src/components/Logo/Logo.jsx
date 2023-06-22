import { NavLink } from 'react-router-dom';
import { IoIosFilm } from 'react-icons/io';
import { AppName, AppNameExpansion } from './Logo.styled';


const Logo = () => {
    return (
      <AppName>
        <IoIosFilm  />
        <NavLink to="/">Film</NavLink>
        <AppNameExpansion>Hub</AppNameExpansion>
      </AppName>
    );
}
export default Logo;