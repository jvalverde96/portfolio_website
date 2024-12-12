import { createContext, Dispatch } from 'react'

export interface AppContextType {
  currentSection: string
  setCurrentSection: Dispatch<React.SetStateAction<string>>
  disableObserver: () => void
  enableObserver: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export default AppContext
