import React, {useState} from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Home from '../Home'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'

export default function Initial() {
const [isOpen, setIsOpen] = useState(false)

const toggle = () =>{
    setIsOpen(!isOpen)
}

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Home/>
            <About/>  
            <Projects/>  
            <Contact/>   
        </>
        
    )
}
