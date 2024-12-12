import './button.css'

interface ButtonProps {
  text: string
  icon?: JSX.Element | null
  loading?: boolean
}

const Button = ({ text, icon = null, loading = false }: ButtonProps) => {
  return (
    <button
      disabled={loading}
      type="submit"
      className={`button ${icon && 'icon_button'} ${
        loading && 'loading_button'
      }`}
    >
      {text} {icon && icon}
    </button>
  )
}

export default Button
