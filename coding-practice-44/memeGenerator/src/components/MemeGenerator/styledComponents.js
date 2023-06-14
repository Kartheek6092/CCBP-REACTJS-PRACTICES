import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MemeReqForm = styled.form`
  width: 40%;
  height: fit-content;
  padding: 3%;
`

export const MainHeading = styled.h1`
  color: #35469c;
  font-weight: 700;
`

export const Label = styled.label`
  color: #7e858e;
`
export const Input = styled.input`
  border: 2px solid #d7dfe9;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
`
export const FontSize = styled.select`
  width: 100%;
  padding: 10px;
  color: #1e293b;
  border: 2px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  padding: 10px;
  color: white;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  border-style: none;
  width: 120px;
  margin-top: 2%;
`

export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontValue}px;
`

export const GeneratedMemeContainer = styled.div`
  width: 40%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props =>
    props.bgImage !== undefined ? props.bgImage : null});
  background-size: cover;
  height: 80%;
`
