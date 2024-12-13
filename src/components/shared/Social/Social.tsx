import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import './social.css'
import Tooltip from '../Tooltip/Tooltip'

interface SocialItem {
  icon: JSX.Element
  href: string
  tooltip: string
}

const socials: SocialItem[] = [
  {
    icon: <FaGithub className="icon" />,
    href: 'https://github.com/jvalverde96',
    tooltip: 'GitHub',
  },
  {
    icon: <FaLinkedinIn className="icon" />,
    href: 'https://www.linkedin.com/in/javier-valverde-solano/',
    tooltip: 'LinkedIn',
  },
  {
    icon: <MdEmail className="icon" />,
    href: 'mailto:curly.dev.96@gmail.com',
    tooltip: 'Email',
  },
]

const Social = () => {
  return (
    <div className="socials_container">
      {socials.map((item, index) => (
        <Tooltip text={item.tooltip} key={index}>
          <a href={item.href} target="blank" className="socials_icons">
            {item.icon}
          </a>
        </Tooltip>
      ))}
    </div>
  )
}

export default Social
