import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/next.svg"
import MenuIcon from "@/public/hamburger-menu.svg"

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black py-8 text-white'>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-7 xs:px-9 sm:px-18'>
        <Link href="">
          <p className="font-serif text-2xl text-gradient_blue-purple underline">
            React Mastery
          </p>
        </Link>

        <Image
          src={MenuIcon}
          width={35 }
          height={ 35 }
          alt='menu'
          className='block md:hidden'
        />

        <ul className='flex-center gap-x-5 max-md:hidden md:gap-x-12'>
          <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link
              href="https://nextjs.org/"
              target='_blank'
            >
              Next.JS Docs
            </Link>
          </li>
          <li className='body-text !font-bold'>
            <Link
              href="https://react.dev/"
              target='_blank'
            >
              React Docs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
