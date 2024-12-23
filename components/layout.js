import Link from 'next/link';
import Image from 'next/image';
import Logo from'../public/logo.svg';



export default function Layout({children}) {
  
  return (
   <div className='body'>
   <nav>
        <Link href="/web">
          <p className='nav-web'>web</p>
        </Link>
        <Link href="/video">
          <p className='nav-video'>video</p>
        </Link>
        <Link href="/">
          <p><Image src={Logo.src} height={90} width={90} alt="Home Logo"  /></p>   
        </Link>
        <Link href="/image">
          <p className='nav-image'>image</p>
        </Link>
        <Link href="/board">
          <p className='nav-board'>board</p>
        </Link>
   </nav>
   <main>{children}</main>
   
   <footer>
   <p>&copy; Juan Pablo Baez {new Date().getFullYear()}</p>  
   </footer>
   
   </div>
  )
}

