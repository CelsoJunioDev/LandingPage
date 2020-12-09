import React from 'react'
import {Container } from './styles'
import {Button} from '../../components/Button'


export default function Home() {
    return (
        <Container id="home">

<h1>Home</h1>
<Button
smooth={true}
duration={500}
exact="true"
width="200px"
fontBig={true}
to="about"
>
    teste
</Button>
</Container>   
        
    )
}
