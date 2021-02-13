import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
  
  return (
    <div className={styles.container}>
      <ul>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='about'><a>About</a></Link></li>
      </ul>

      
      {children}

    </div>
    
      
  )
}

export default Layout