import styled from 'styled-components'

export const Card = styled.a`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 200px;
height: 100px;
background-color: rgba(120,120,120, 0.2);
border-radius: 10px;
border: none;
padding: 5px;
margin: 5px;
text-decoration: none;
transition: 0.5s;

:hover{
    cursor: pointer;
    background-color: rgba(120,120,120, 1);
}



@media screen and (max-width: 768px){
    width: 95%;
}
`

export const Title = styled.span`
    color: #fff;
    font-size: 18px; 
`
export const Subtitle = styled.span`
    color: #fff;
    font-size: 12px;  
`

export const DivLanguage = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
`
