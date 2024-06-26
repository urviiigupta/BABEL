import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../src/assets/babellogomain1.png'

const Navbar=()=>{
    return (
        <nav className={styles.nav}>
            <div>
            <img src={logo} alt="" className={styles.logo}/>
            </div>
            <ul>
            <li><Link to="/home" className={styles.removea}>HOME</Link></li>
            <li><Link to="/product" className={styles.removea}>PRODUCT</Link></li>
            <li><Link to="/aboutus" className={styles.removea}>ABOUT US</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar