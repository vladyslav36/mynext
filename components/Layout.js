import Link from 'next/link'

const Layout = ({ children }) => {
  
  return (
    <>
    <Link href='/'><a>Home</a></Link>
      <Link href='about'><a>About</a></Link>
      {children}
      </>
  )
}

export default Layout