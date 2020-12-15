import React, {useState} from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

import Section from '../../components/Section'
import {Home, About, Abilities, Projects} from '../../components/Section/Data'

export default function Initial() {
const [isOpen, setIsOpen] = useState(false)

const toggle = () =>{
    setIsOpen(!isOpen)
}

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Section {...Home}/>
            <Section {...About}/>
            <Section {...Abilities}/>
            <Section {...Projects}/>
             
        </>
        
    )
}
