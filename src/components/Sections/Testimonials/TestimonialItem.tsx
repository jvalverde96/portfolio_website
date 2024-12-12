import { RiDoubleQuotesL } from 'react-icons/ri'

type TestimonialItemProps = {
  name: string
  role: string
  text: string
  image: string
}

const TestimonialItem = ({ name, role, text, image }: TestimonialItemProps) => {
  return (
    <div className="testimonial_item">
      <span>
        <RiDoubleQuotesL />
      </span>
      <div className="testimonial_item_heading">
        <img src={image} alt="" />
        <div>
          <h2 className="section_subtitle">{name}</h2>
          <h3>{role}</h3>
          <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
        </div>
      </div>
      <p className="primary_text">{text}</p>
    </div>
  )
}

export default TestimonialItem
