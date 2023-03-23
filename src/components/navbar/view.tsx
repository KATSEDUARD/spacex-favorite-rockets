import { Navbar } from './Navbar';
import logo from './logo.png';
import { CustomButton } from '../customButton/view';
import { FavoritesLink } from '../favoritesButton/view';
import { constants } from '../../constants/constants';
import { Link, useLocation } from 'react-router-dom';

const { NAV_LINKS: { HOME, TOURS, ABOUT, HELP }, BUTTONS: { SIGN_IN } } = constants;

export function NavigationBar () {
    const location = useLocation();
    
    const active = location.pathname === '/favorites' ? 'favorites' : 'home';

    return <Navbar>
        <Link to="/"><img src={logo} alt="spacex" width={229} height={29} /></Link>
        <div className="links-wrapper">
            <Link to="/"><div className={`link link-animation ${active === 'home' ? 'active-link' : ''}`}>{HOME}</div></Link>
            <div className="link link-animation">{TOURS}</div>
            <div className="link link-animation">{ABOUT}</div>
            <div className="link link-animation">{HELP}</div>
        </div>
        <div className="right-section">
            <Link to="/favorites"><FavoritesLink isActive={active === 'favorites'} /></Link>
            <CustomButton label={SIGN_IN} />
        </div>
    </Navbar>;
};