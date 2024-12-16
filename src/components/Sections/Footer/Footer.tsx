import { SECTIONS } from '../../../constants/sections'
import Social from '../../shared/Social/Social'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer background_secondary">
      <Social />
      <ul>
        {SECTIONS.map((item) => (
          <li key={item.value}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="legends">
        <p className="designed_by">Designed and developed by me with ❤️</p>
        <p className="copyright">© Javier Valverde | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
