import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiSearch, FiUser, FiGrid, FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { useSearchContext } from "../Context/SearchContext";

export function Navbar() {
    const navLinks = [
        { name: "Home", path: "" },
        { name: "Users", path: "users" },
        { name: "Posts", path: "posts" },
        { name: "Albums", path: "albums" },
        { name: "Todos", path: "todos" },
    ];

    const location = useLocation();
    const { searchQuery, setSearchQuery } = useSearchContext();
    const [showSearch, setShowSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const searchableRoutes = ["/users", "/albums", "/todos"];

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="bg-slate-800 text-white dark:bg-gray-900 dark:text-white shadow-md fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">

                {/* Logo */}
                <div className="text-white flex items-center space-x-2">
                    <FiGrid size={24} className="text-blue-400" />
                    <h3>DataBoard</h3>
                </div>

                {/* Hamburger Toggle */}
                <div className="md:hidden">
                    <FiMenu size={24} className="cursor-pointer" onClick={toggleMenu} />
                </div>

                {/* Links */}
                <ul
                    className={`md:flex md:flex-row md:space-x-8 md:items-center
                    ${menuOpen ? "flex flex-col items-start space-y-2 px-4" : "hidden"}
                    md:space-y-0 md:px-0 absolute md:static top-16 left-0 right-0 
                    bg-slate-800 dark:bg-gray-900 md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out`}
                >
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-1 text-base font-medium no-underline transition-colors duration-200 ${
                                        isActive
                                            ? "text-blue-400"
                                            : "text-white hover:text-blue-300 dark:text-gray-300 dark:hover:text-blue-300"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Search + Dark Mode Toggle */}
                <div className="flex items-center gap-4 ml-4">
                    {/* Search Icon */}
                    <FiSearch
                        className="text-white dark:text-gray-300 text-xl cursor-pointer"
                        onClick={handleSearchClick}
                    />

                    {searchableRoutes.includes(location.pathname) && showSearch && (
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            className="absolute top-14 right-0 bg-white text-black rounded px-3 py-1 w-64 shadow outline-none z-50"
                        />
                    )}

                    {/* Dark Mode Toggle */}
                    <button onClick={toggleDarkMode} className="text-xl bg-transparent text-white dark:text-yellow-300">
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </button>
                </div>

            </div>
        </nav>
    );
}
