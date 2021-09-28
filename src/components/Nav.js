import { NavLink } from "react-router-dom";

const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to="/yoga">Yoga</NavLink>
            </li>
            <li>
                <NavLink to="/trecking">Trecking</NavLink>
            </li>
            <li>
                <NavLink to="/surfing">Surfing</NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;
