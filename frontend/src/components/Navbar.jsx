import React, { useEffect } from "react"
import {Link} from "react-router-dom"
import {FaBlog} from "react-icons/fa6"

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false)
  const [isSticky, setSticky] = React.useState(false)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  const navItem = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" }
  ]
  return (
    <header>
      <nav>
        <div>
          {/* logo */}
          <Link to="/"><FaBlog /> Books</Link>
        </div>
      </nav>
    </header>
  )

}

export default Navbar