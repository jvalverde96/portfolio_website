import Button from '../../shared/Button/Button'
import { RiSendPlaneFill } from 'react-icons/ri'
import Social from '../../shared/Social/Social'

const Data = () => {
  return (
    <div className="data">
      <h2 className="section_subtitle">
        <span>Welcome</span> to my website{' '}
      </h2>
      <h1 className="section_title_left">
        Hi <span className="big_emoji">👋🏼</span>, I'm <br />
        <span>Javier Valverde</span>
      </h1>
      <h2 className="section_subtitle">Software Engineer 🧠</h2>
      <p className="description primary_text">
        Experienced full stack software engineer skilled in designing, building,
        and optimizing web applications from end to end. Proficient in modern
        front-end and back-end technologies, ensuring seamless performance and
        scalability.
      </p>

      <div className="buttons_container">
        <a href="#contact">
          <Button
            text="Contact Me"
            icon={<RiSendPlaneFill className="icon" />}
          />
        </a>
        <Social />
      </div>
    </div>
  )
}

export default Data
