import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  width: ${(props) => props.width};
  border-radius: 16px;
  background-color: #2d669d;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  margin: 10px;
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? '32px' : '24px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #4191e1;
  }
`