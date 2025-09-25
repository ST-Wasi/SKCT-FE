import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { lazy } from 'react'
import Loading from './components/Loading'
let Button = lazy(() => import("./components/Button"))
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LazyLoadImage src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww" alt="something" effect="blur"
        wrapperProps={{
          // If you need to, you can tweak the effect transition using the wrapper style.
          style: { transitionDelay: "1s" },
        }} />
      <div>
        <h1>ladqefk</h1>
        <Button />
      </div>
    </>
  )
}

export default App
