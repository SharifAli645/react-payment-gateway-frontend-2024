import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="root">
      <NavBar />
      <Header  />
      <div className="content">{/* Contenido de tu aplicación */}</div>
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App
