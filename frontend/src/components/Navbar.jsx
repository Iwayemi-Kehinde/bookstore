import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isSticky, setSticky] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const navItem = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 bg-blue-300" : ""}`}>
        <div className="flex justify-between item-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex item-center gap-2"
          >
            <FaBlog className="inline-block" /> Books
          </Link>
          {/* nav item for large device */}
          <ul className="md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => {
              return (
                <Link
                  key={path}
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {link}
                </Link>
              );
            })}
          </ul>
          {/* btn for lg devices */}
          <div className="space-x-12 hidden lg:flex item-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>
          {/*menu button for mobile devices */}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* navItems for sm devices */}

        <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItem.map(({ link, path }) => {
            return (
              <Link
                key={path}
                to={path}
                className="block text-base text-white uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
