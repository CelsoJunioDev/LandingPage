import React from 'react'
import {Button} from '../../components/Button'
import {Container} from './styles'

export default function About() {
    return (
        <Container id="about">

            <h1>About</h1>
            <Button
            smooth={true}
            duration={500}
            exact="true"
            width="200px"
            fontBig={true}
            to="contact"
            >
                teste
            </Button>
        </Container>
        
    )
}
