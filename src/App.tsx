import './App.css'
import Home from './components/Sections/Home/Home'
import About from './components/Sections/AboutMe/About'
import Header from './components/Header/Header'
import './App.css'
import Skills from './components/Sections/Skills/Skills'
import Testimonials from './components/Sections/Testimonials/Testimonials'
import Contact from './components/Sections/Contact/Contact'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Footer from './components/Sections/Footer/Footer'
import { useEffect } from 'react'
import { useAppContext } from './context/useAppContext'

function App() {
  const { setCurrentSection, currentSection } = useAppContext()

  // useEffect(() => {
  //   const sections = document.querySelectorAll('section')
  //   const navLinks = document.querySelectorAll('.nav_link')

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           navLinks.forEach((link) => link.classList.remove('nav_link_active'))
  //           const id = entry.target.getAttribute('id')
  //           if (id) {
  //             setCurrentSection(id)
  //             document
  //               .querySelector(`.nav_link[href="#${id}"]`)
  //               ?.classList.add('nav_link_active')
  //           }
  //         }
  //       })
  //     },
  //     { threshold: 0.1 },
  //   )

  //   sections.forEach((section) => observer.observe(section))
  //   return () => observer.disconnect()
  // }, [])

  console.log('current: ', currentSection)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
