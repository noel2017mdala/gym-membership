import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar.js'
import { SelectedPage } from './shared/types.js'
import Home from './Components/Home.js'
import Benefits from './Components/Benefits.js'
import OurClasses from './Components/OurClasses.js'
import ContactUs from './Components/ContactUs.js'
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  )

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() =>{
    const handleScroll = () =>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }else{
        setIsTopOfPage(false);
      }
      
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
       selectedPage={selectedPage}
       setSelectedPage={setSelectedPage}
       isTopOfPage = {isTopOfPage}
      
      />

      <Home 
      setSelectedPage={setSelectedPage}
      />
      <Benefits
      setSelectedPage={setSelectedPage}
      />

      <OurClasses 
      setSelectedPage={setSelectedPage}
      />

      <ContactUs
      setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
