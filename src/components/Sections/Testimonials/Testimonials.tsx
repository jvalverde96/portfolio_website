import TestimonialItem from './TestimonialItem'
import './testimonials.css'

const TestimonialsData = [
  {
    id: 1,
    name: 'Ian Clark',
    role: 'Proyect Manager',
    text: `I had the privilege of working closely with Javier Valverde Solano, and I wholeheartedly recommend him as an exceptional full-stack developer. Javier was a valuable team member, showcasing unparalleled expertise in both front-end and back-end development.\n His collaborative nature and willingness to go above and beyond to help the team succeed are exemplary. No matter the obstacles faced, Javier remained steadfast and always found innovative ways to get the job done.`,
    image: require('../../../assets/testimonials/ian.jpeg'),
  },
  {
    id: 2,
    name: 'Don Gregori',
    role: 'CEO, First Factory',
    text: 'Javier was a team player who was willing to try out new assignments and technologies to advance his own breadth of knowledge and benefit the larger organization. He showed patience, was proactive and demonstrated solid communication skills.',
    image: require('../../../assets/testimonials/don.jpeg'),
  },
  // {
  //   id: 3,
  //   name: 'Brian Dewey',
  //   role: 'CEO, Koloni',
  //   text: 'Magnam quia atque perspiciatis placeat corrupti eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. t amet consectetur adipisicing elit. t amet consectetur adipisicing elitt amet consectetur adipisicing elit',
  //   image: require('../../../assets/testimonials/brian.jpeg'),
  // },
  {
    id: 3,
    name: 'Yordan García',
    role: 'Software Engineer',
    text: `Javier's initiative and proactive approach were evident in every project we tackled together. He was always the first to step up for challenging tasks and consistently delivered high-quality results. In addition to his technical expertise, Javier's soft skills are equally impressive. He is an excellent listener, an empathetic team player, and always willing to support his colleagues. His positive attitude and dedication to continuous learning make him an exceptional professional.`,
    image: require('../../../assets/testimonials/yordan.jpeg'),
  },
  {
    id: 5,
    name: 'Ankita Kamble',
    role: 'UI/UX Designer',
    text: `I had the pleasure of working with Javier, and he is among the most talented developers I’ve collaborated with. His technical skills and problem-solving abilities always stood out, and he consistently delivered high-quality work.
Javier is not only talented but also a great team player. He is always willing to share knowledge, help others, and ensure the team’s success. I appreciated his design recommendations and his ability to pay attention to detail. 
I highly recommend Javier to any team. He is skilled, dependable, and a great person to work with.`,
    image: require('../../../assets/testimonials/ankita.jpeg'),
  },
  {
    id: 4,
    name: 'Andrés Romero',
    role: 'Software Engineer',
    text: 'I’ve had the pleasure of working with Javier on several projects, during which he consistently demonstrated his exceptional skills as a software engineer. He excels in both frontend and backend technologies and is always prepared to tackle any challenge that comes his way. If you’re looking for a true team player, I highly recommend Javier as an excellent addition to your team.',
    image: require('../../../assets/testimonials/andres.jpeg'),
  },
]

const Testimonials = () => {
  return (
    <section className="section background_primary" id="testimonials">
      <div className="container">
        <div className="testimonials_content">
          <div>
            <h1 className="section_title">Testimonials</h1>
            <h2 className="section_subtitle">
              What People Say About <span>Me</span>
            </h2>
          </div>
          <div className="testimonials_container">
            {TestimonialsData.map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
