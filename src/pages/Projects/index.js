import React from 'react'
import {Button} from '../../components/Button'
import {Container} from './styles'

export default function Projects() {
    return (
        <Container id="projects">

            <h1>Projects</h1>
            <Button
            smooth={true}
            duration={500}
            exact="true"
            to="contact"
            width="200px"
            fontBig={true}
            >
                teste
            </Button>
        
        </Container>
    )
}
