import { ReactNode, useEffect, useState } from 'react'
import AppContext from './AppContext'
import { SECTIONS } from '../constants/sections'

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState<string>('home')
  const [observerActive, setObserverActive] = useState<boolean>(true)

  const disableObserver = () => setObserverActive(false)
  const enableObserver = () => setObserverActive(true)

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        if (!observerActive) return // Skip if observer is disabled

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { id } = entry.target
            if (SECTIONS.map((section) => section.value).includes(id)) {
              setCurrentSection(id)
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [observerActive])

  return (
    <AppContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        enableObserver,
        disableObserver,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
