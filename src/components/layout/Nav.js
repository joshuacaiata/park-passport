import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Park Passport</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/disneyland'>Disneyland</Link>
                    </li>
                    <li>
                        <Link to='/magickingdom'>Magic Kingdom</Link>
                    </li>
                    <li>
                        <Link to='/epcot'>Epcot</Link>
                    </li>
                    <li>
                        <Link to='/hollywoodstudios'>Hollywood Studios</Link>
                    </li>
                    <li>
                        <Link to='/animalkingdom'>Animal Kingdom</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;