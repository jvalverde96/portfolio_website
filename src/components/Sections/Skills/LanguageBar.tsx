import './skills.css'

interface LanguageBarProps {
  language: string
  percentage: number
  icon: string
}

const LanguageBar = ({ language, percentage, icon }: LanguageBarProps) => {
  return (
    <div>
      <div className="language_item">
        <div>
          {language} <span className="large_emoji">{icon}</span>
        </div>
        <p>{percentage}%</p>
      </div>
      <div className="bar_container">
        <div className="bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default LanguageBar
