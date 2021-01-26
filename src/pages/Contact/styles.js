import styled from 'styled-components'

export const Container = styled.div`
display: flex;
background: #000;
min-height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
    color: #fff;
}
`
export const Cards = styled.div`
width: 550px;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;

@media screen and (max-width: 768px){
    width: 100%;
}
`

export const homeHeader = styled.header`

background: #fff;

`