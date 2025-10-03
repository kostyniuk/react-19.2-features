import { Activity, useState } from 'react'
import './App.css'
import SlowComponent from './SlowComponent'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide' : 'Show'}
        </button>
        <Activity mode={isVisible ? 'visible' : 'hidden'}>
          <SlowComponent />
        </Activity>
      </div>
    </>
  )
}

export default App
