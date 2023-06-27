import styled from 'styled-components'

export const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  background-color: #25262c;
  border-radius: 10px;
  border-style: none;
  color: #ffffff;
  padding: 2%;
  outline: none;
  font-family: Roboto;
  font-weight: ${props => (props.isBold === true ? `bold` : `normal`)};
  text-decoration: ${props =>
    props.underline === true ? 'underline' : 'normal'};
  font-style: ${props => (props.isItalic === true ? 'italic' : 'normal')};
`

export const Button = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  color: ${props => (props.applied === true ? '#faff00' : '#f1f5f9')};
`
