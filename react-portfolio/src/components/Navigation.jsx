import { Link } from "react-router-dom";

export default function Navigation () {
  return (
    <nav className="bg-gray fixed top-0 left-0 right-0 px-4 w-screen py-3.5">
        <div className="flex flex-wrap justify-between items-center">
            <a href="/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Houston Davis</span>
            </a>
            <div className="flex justify-between items-center w-auto" id="">
                <ul className="flex flex-row space-x-4 mr-10">
                    
                    <li>
                        <Link to='/' href="/" className="block" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link to='/About' href="About" className="block">About Me</Link>
                    </li>
                    <li>
                        <Link to='/Portfolio' href="Portfolio" className="block">Portfolio</Link>
                    </li>
                    <li>
                        <a href="https://github.com/HDavis147" className="block" aria-current="page">GitHub</a>
                    </li>
                    <li>
                        <Link to='/Contact' href="Contact" className="block">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}