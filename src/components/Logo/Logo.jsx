import { NavLink } from 'react-router-dom';
import { AppName, AppNameExpansion } from './Logo.styled';


const Logo = () => {
    return (
      <AppName>
        <NavLink to="/">Film</NavLink>
        <AppNameExpansion>Hub</AppNameExpansion>
      </AppName>
    );
}
export default Logo;