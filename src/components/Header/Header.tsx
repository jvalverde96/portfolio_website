import { useEffect, useState } from 'react'
import './header.css'
import '../../App.css'
import useWindowSize from '../../hooks/useWindowSize'
import { SECTIONS } from '../../constants/sections'
import { useAppContext } from '../../context/useAppContext'
import NavLink from '../shared/NavLink/NavLink'

const Header = () => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false)

  const { setCurrentSection } = useAppContext()

  const { width } = useWindowSize()

  useEffect(() => {
    if (width > 768) {
      setOpenHamburgerMenu(false)
    }
  }, [width])

  return (
    <>
      <header className="header background_primary">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">
            <h1>
              Jav<span>ier.</span>
            </h1>
          </a>
          {openHamburgerMenu && <div className="overlay"></div>}
          <div
            className={openHamburgerMenu ? 'nav_menu show_menu' : 'nav_menu'}
          >
            {openHamburgerMenu && (
              <div className="nav_logo_mobile">
                <a href="index.html" className="nav_logo nav_logo_mobile">
                  <h1>
                    Jav<span>ier.</span>
                  </h1>
                </a>
              </div>
            )}
            <ul className="nav_list">
              {SECTIONS.map((item) => (
                <li
                  key={item.value}
                  onClick={() => {
                    setCurrentSection(item?.value)
                    setOpenHamburgerMenu(false)
                  }}
                >
                  <NavLink value={item.value}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setOpenHamburgerMenu((prev) => !prev)}
            className={`hamburger_menu ${
              openHamburgerMenu ? 'hamburger_animation' : ''
            }`}
          >
            <div
              className={`hamburger_bar ${
                openHamburgerMenu ? 'hamburger_bar_hidden' : ''
              }`}
            />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
