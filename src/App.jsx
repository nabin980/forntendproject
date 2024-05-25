import React from 'react'
import './App.css'
import { Navbar,Animation,About_us,FAQ, Contact_us, Footer} from './components'

const App = () => {
  return (
    <>
    <Navbar />
    <Animation />
    <About_us />
    <FAQ/>
    <Contact_us />
    <Footer />
    </>
    
  )
}

export default App