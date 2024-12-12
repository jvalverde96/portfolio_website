import { useAppContext } from '../../../context/useAppContext'

interface NavLinkProps {
  value: string
  children: React.ReactNode
}

const NavLink = ({ value, children }: NavLinkProps) => {
  const { disableObserver, enableObserver, currentSection } = useAppContext()

  const handleClick = () => {
    disableObserver() // Disable observer
    setTimeout(() => enableObserver(), 1000) // Re-enable after 1 second
  }

  return (
    <a
      className={`nav_link ${
        value === currentSection ? 'nav_link_active' : ''
      }`}
      href={`#${value}`}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default NavLink
