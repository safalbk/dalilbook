
import { useState } from "react";
import LogoIcon from "../../assets/react.svg"; // adjust path as needed
import LogoIcon2 from "../../assets/images/account.png"; // adjust path as needed

// import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Menu } from 'lucide-react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // initialize navigate function

    const linkClasses = ({ isActive }) =>
        `font-medium text-md px-4 ${isActive ? "text-[#424242] font-bold bg-[#F5F5F5] p-2 rounded-lg" : "text-[#757575]/70 p-2 "
        }`;

    return (
        <nav className="bg-[#f7f8fa]  fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="bg-[#f7f8fa] h-16 items-center flex justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 text-3xl text-[#424242] font-bold px-4 md:ml-10">
                    {/* <img src={LogoIcon} alt="Mpire Logo" className="w-40 h-19 object-contain" /> */}

                    <span>دليل Book</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex mr-24">
                    <NavLink to="/" className={linkClasses}>
                        Dashboard
                    </NavLink>
                    <NavLink to="/topics" className={linkClasses}>
                        Topics
                    </NavLink>
                    <NavLink to="/notes" className={linkClasses}>
                                            Notes
                                        </NavLink>
                    <NavLink to="/videos" className={linkClasses}>
                        Videos
                    </NavLink>
                    <NavLink to="/images" className={linkClasses}>
                        Images
                    </NavLink>
                    <NavLink to="/e-books" className={linkClasses}>
                        E-books
                    </NavLink>
                    {/* <NavLink to="/services" className={linkClasses}>
            Services
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink> */}
                    {/* <button
                        onClick={() => navigate("/")}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md mx-4"
                    >
                        Get Started    </button> */}

                    <span className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center ">
                                            <img src={LogoIcon2} alt="Mpire Logo" className="w-10 h-10 rounded-full object-contain" />

                    </span>

                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden h-9 mx-2"
                >
                    <Menu size={32} />
                    {/* <GiHamburgerMenu size={32} /> */}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isOpen ? "block" : "hidden"} bg-white my-1 md:hidden`}
            >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-[#757575] font-medium text-lg px-4 block my-2 w-full h-16 flex items-center ${isActive ? "bg-[#F5F5F5] text-gray-800 font-bold" : ""
                        }`
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/topics"
                    className={({ isActive }) =>
                        `text-[#757575]  font-medium text-lg px-4 block my-2 w-full h-16 flex items-center ${isActive ? "bg-[#F5F5F5] text-gray-800 font-bold" : ""
                        }`
                    }
                >
                    Topics
                </NavLink>
                 <NavLink
                    to="/notes"
                    className={({ isActive }) =>
                        `text-[#757575]  font-medium text-lg px-4 block my-2 w-full h-16 flex items-center ${isActive ? "bg-[#F5F5F5] text-gray-800 font-bold" : ""
                        }`
                    }
                >
                    Notes
                </NavLink>
                <NavLink
                    to="/videos"
                    className={({ isActive }) =>
                        `text-[#757575]  font-medium text-lg px-4 block my-2 w-full h-16 flex items-center ${isActive ? "bg-[#F5F5F5] text-gray-800 font-bold" : ""
                        }`
                    }
                >
                    Videos
                </NavLink>
                <NavLink
                    to="/e-books"
                    className={({ isActive }) =>
                        `text-[#757575]  font-medium text-lg px-4 block my-2 w-full h-16 flex items-center ${isActive ? "bg-[#F5F5F5] text-gray-800 font-bold" : ""
                        }`
                    }
                >
                    E-books
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;