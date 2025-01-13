import './about.css'
import me from '../../../assets/me/about.png'
import Button from '../../shared/Button/Button'
import { FaCloudDownloadAlt } from 'react-icons/fa'

const AboutMe = () => {
  const calculateYearsPassed = () => {
    const today = new Date()
    const specific = new Date('2019-06-01')
    let yearsPassed = today.getFullYear() - specific.getFullYear()

    const hasNotPassedThisYear =
      today.getMonth() < specific.getMonth() ||
      (today.getMonth() === specific.getMonth() &&
        today.getDate() < specific.getDate())

    if (hasNotPassedThisYear) {
      yearsPassed--
    }

    return yearsPassed
  }

  return (
    <section className="section background_primary" id="about">
      <div className="container">
        <div className="about_content">
          <img alt="" src={me} />
          <div className="introduction">
            <h1 className="section_title">
              About <span>Me</span>
            </h1>
            <h2 className="section_subtitle">Full Stack Developer</h2>
            <p className="primary_text">
              Hi, I'm <span>Javier</span>! Based in Costa Rica{' '}
              <span className="small_emoji">🇨🇷</span> <br /> <br />
              Innovative and highly adaptable Full Stack Developer with{' '}
              <span>{calculateYearsPassed()}+</span> years of experience
              building, maintaining, and scaling impactful applications for
              global enterprises. Skilled in creating intuitive front-end
              interfaces and designing reliable, scalable back-end systems using
              a diverse set of technologies.{' '}
              <span className="small_emoji">🧠</span> <br /> <br /> Known for
              delivering high-quality, efficient solutions in fast-paced
              environments. A natural problem-solver, driven by curiosity and
              continuous learning. Delivers results in collaborative teams and
              high-pressure projects, ready to drive significant impact for
              top-tier companies. <span className="small_emoji">🧑🏻‍💻</span> <br />
              <br />
              When I’m not coding, you’ll find me exploring new countries,
              capturing moments through photography, enjoying car rides, diving
              into the latest tech, or practicing meditation. Let’s connect and
              work together! <span className="small_emoji">🤝🏼</span>
            </p>
            <div className="download_button_container">
              <a
                href="https://drive.google.com/uc?export=download&id=1yCCsWU14aSQy5MLRbL-nyrR_uOn7eNpZ"
                download
              >
                <Button
                  text="Download CV"
                  icon={<FaCloudDownloadAlt className="icon" />}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
