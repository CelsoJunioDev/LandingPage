import React from 'react'
import * as S from './styles'

export default function Card({img, title, href}) {
    return (
        <S.Card href={href} target="_blank">
            <img src={img} width="41"/>
            <span>{title}</span>
        </S.Card>
    )
}
