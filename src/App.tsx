import { useState } from 'react'
import Navbar from "./Components/Navbar.js"
import { SelectedPage } from './shared/types.js';
function App() {



    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  return (
    <div className="app bg-gray-20">
   <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
