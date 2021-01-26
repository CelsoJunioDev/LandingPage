import React from 'react'
import * as S from './styles'

export default function CardRepo({href, title, subtitle, language, language2, language3}) {
    return (
        <S.Card href={href} target="_blank">
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
            <S.DivLanguage>
                <S.Subtitle>{language}</S.Subtitle>
                <S.Subtitle>{language2}</S.Subtitle>
                <S.Subtitle>{language3}</S.Subtitle>
            </S.DivLanguage>
        </S.Card>
    )
}
