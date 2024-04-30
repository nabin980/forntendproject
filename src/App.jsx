import React from 'react'
import './App.css'
import { Navbar,Animation,About_us,FAQ, Contact_us} from './components'

const App = () => {
  return (
    <>
    <Navbar />
    <Animation />
    <About_us />
    <FAQ/>
    <Contact_us />
    </>
    
  )
}

export default App