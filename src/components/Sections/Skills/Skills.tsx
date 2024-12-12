import {
  BACKEND_SKILLS,
  FRONTEND_SKILLS,
  OTHER_SKILLS,
} from '../../../constants/skills'
import Tooltip from '../../shared/Tooltip/Tooltip'
import LanguageBar from './LanguageBar'
import './skills.css'

const languages = [
  {
    label: 'Spanish',
    icon: '🇪🇸',
    percentage: 100,
  },
  {
    label: 'English',
    icon: '🇺🇸',
    percentage: 90,
  },
  {
    label: 'Japanesse',
    icon: '🇯🇵',
    percentage: 30,
  },
]

const Skills = () => {
  return (
    <section className="section background_primary" id="skills">
      <div className="container">
        <div className="skills_content primary_text">
          <h1 className="section_title">
            <span>Skills</span>
          </h1>
          <div className="skills_container">
            <div className="skill_box languages_container">
              <h2 className="section_subtitle">Languages</h2>
              {languages.map((language, index) => (
                <LanguageBar
                  key={index}
                  language={language.label}
                  percentage={language.percentage}
                  icon={language.icon}
                />
              ))}
            </div>
            <div className="skill_box">
              <h2 className="section_subtitle">
                Frontend <span>Skills</span>
              </h2>
              <div className="skills_icons_container">
                {FRONTEND_SKILLS.map((skill, index) => (
                  <Tooltip text={skill.name} key={index}>
                    <img
                      alt=""
                      src={skill.image}
                      width={skill.width}
                      height={skill.height}
                    />
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="skill_box">
              <h2 className="section_subtitle">
                Backend <span>Skills</span>
              </h2>
              <div className="skills_icons_container">
                {BACKEND_SKILLS.map((skill, index) => (
                  <Tooltip text={skill.name} key={index}>
                    <img
                      alt=""
                      src={skill.image}
                      width={skill.width}
                      height={skill.height}
                    />
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="skill_box">
              <h2 className="section_subtitle">
                Other <span>Skills</span>
              </h2>
              <div className="skills_icons_container">
                {OTHER_SKILLS.map((skill, index) => (
                  <Tooltip text={skill.name} key={index}>
                    <img
                      alt=""
                      src={skill.image}
                      width={skill.width}
                      height={skill.height}
                    />
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
