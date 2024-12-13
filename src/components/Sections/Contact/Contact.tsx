import { FormEvent, useRef, useState } from 'react'
import Button from '../../shared/Button/Button'
import './contact.css'
import emailjs from '@emailjs/browser'
import { toast, Zoom } from 'react-toastify'

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    setLoading(true)
    e.preventDefault()

    const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID
    const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    if (!formRef.current || !emailServiceId || !emailTemplateId || !publicKey) {
      setLoading(false)
      return
    }

    const fields = ['name', 'email', 'phone_number', 'subject', 'message']

    const formElements = formRef.current.elements as any

    const missingFields = fields.reduce<string[]>((accumulator, current) => {
      return formElements[current]?.value
        ? accumulator
        : [...accumulator, current]
    }, [])

    if (missingFields && missingFields.length > 0) {
      const message = missingFields
        .map((field) =>
          field
            .replace(/_/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase()),
        )
        .join(', ')

      toast.error(
        `Failed to send the message. You are missing one or more required fields: ${message}. Please fill out the fields and try again.`,
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Zoom,
        },
      )
      setLoading(false)
      return
    }
    try {
      const result = await emailjs.sendForm(
        emailServiceId,
        emailTemplateId,
        formRef.current,
        { publicKey },
      )
      console.log('Email sent successfully:', result.text)
      toast.success(
        'Message sent successfully.  Thanks for reaching out to me!',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Zoom,
        },
      )
      clearForm()
    } catch (error: any) {
      console.error('Error sending email:', error.text || error)
      toast.error('Failed to send the message. Please try again.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Zoom,
      })
    } finally {
      setLoading(false)
    }
  }

  const clearForm = () => {
    const form = document.getElementById('contact_form') as HTMLFormElement
    if (form && form instanceof HTMLFormElement) {
      form.reset()
    }
  }

  return (
    <section className="section background_primary" id="contact">
      <div className="container">
        <div className="contact_content">
          <div>
            <h1 className="section_title">
              Contact <span>Me</span>
            </h1>
            <h2 className="section_subtitle">Let's Talk</h2>
          </div>
          <form ref={formRef} onSubmit={sendEmail} id="contact_form">
            <div style={{ width: '100%' }}>
              <div className="input_box">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="input_box">
                <input
                  type="number"
                  name="phone_number"
                  placeholder="Enter Your Phone Number"
                />
                <input type="text" name="subject" placeholder="Subject" />
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <textarea
                cols={30}
                rows={10}
                name="message"
                placeholder="Your Message"
              />
              <Button text="Send Message" loading={loading} />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
