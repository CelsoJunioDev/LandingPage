import React from 'react'
import {Button} from '../../components/Button'
import {Container} from './styles'

export default function Contact() {
    return (
        <Container id="contact">

            <h1>Contact</h1>
            <Button
            smooth={true}
            duration={500}
            exact="true"
            to="home"
            width="200px"
            fontBig={true}
            >
                teste
            </Button>
        
        </Container>
    )
}
