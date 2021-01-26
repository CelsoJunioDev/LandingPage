import React from 'react'
import {Button} from '../../components/Button'
import Card from '../../components/Card'
import * as S from './styles'
import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'
import Instagram from '../../assets/instagram.svg'
import Whatsapp from '../../assets/whatsapp.svg'

export default function Contact() {
    return (
        <S.Container id="contact">

            <h1>Contact</h1>

        <S.Cards>
            <Card img={Github} title="GitHub" href="https://www.google.com"/>
            <Card img={Linkedin} title="LinkedIn"/>
            <Card img={Instagram} title="Instagram"/>
            <Card img={Whatsapp} title="Whatsapp" href="https://api.whatsapp.com/send?phone=5561993751598"/>
        </S.Cards>


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
        
        </S.Container>
    )
}
