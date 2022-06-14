import logo from '../../../models/img/logo.png'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar () {
    return (
        <>
            <div className={style.header}>
                <div className={style.logo}>
                <Link to="/">
                    <img src={logo} alt='logo'/>
                </Link>
                </div>
                <div className={style.menu}>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/projects">projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">contacts</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>
                </div>
            </div>
        </>
    )
}