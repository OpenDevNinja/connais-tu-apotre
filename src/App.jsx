import Quiz from './components/Quiz'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence mode='wait'>
      <Quiz />
    </AnimatePresence>
  )
}

export default App