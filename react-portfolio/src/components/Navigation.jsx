import { Link } from "react-router-dom";

export default function Navigation () {
  return (
    <nav className="bg-gray fixed top-0 left-0 right-0 px-4 w-screen py-3.5">
        <div className="flex flex-wrap justify-between items-center">
            <a href="#" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Houston Davis</span>
            </a>
            <div className="flex justify-between items-center w-auto" id="">
                <ul className="flex flex-row space-x-4 mr-10">
                    
                    <li>
                        <a href="#" className="block" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block">About Me</a>
                    </li>
                    <li>
                        <a href="#" className="block">Portfolio</a>
                    </li>
                    <li>
                        <a href="https://github.com/HDavis147" className="block" aria-current="page">GitHub</a>
                    </li>
                    <li>
                        <a href="#" className="block">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}