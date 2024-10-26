import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero';
import Aos from 'aos';
import About from './components/About/About';
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'aos/dist/aos.css';
import './App.css'

function App() {
  document.title = "Rent A Car";
  // Dark Mode feature
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
  const element = document.documentElement;
  useEffect(()=>{
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme])

  // AOS Initialization
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh()

  }, [])

  return (
    <>
        <Navbar theme = {theme} setTheme = {setTheme}/>
        <Hero theme={theme} />
        <About theme={theme} />
        <Services theme={theme} />
        <CarList theme = {theme}/>
        <Testimonials theme = {theme}/>
        <Contact theme = {theme}/>
        <Footer theme = {theme}/>
    </>
  )
}

export default App
