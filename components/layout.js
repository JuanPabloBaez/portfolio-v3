import Link from 'next/link';
import Image from 'next/image';
import Logo from'../public/logo.svg';



export default function Layout({children}) {
  
  return (
   <div className='body'>
   <nav>
        <Link href="/web">
          <a className='nav-web'>web</a>
        </Link>
        <Link href="/video">
          <a className='nav-video'>video</a>
        </Link>
        <Link href="/">
          <a><img src={Logo.src}  alt="Home Logo"  /></a>   
        </Link>
        <Link href="/image">
          <a className='nav-image'>image</a>
        </Link>
        <Link href="/board">
          <a className='nav-board'>board</a>
        </Link>
   </nav>
   <main>{children}</main>
   
   <footer>
    2002 web: Juan Pablo Baez
   </footer>
   
   </div>
  )
}

