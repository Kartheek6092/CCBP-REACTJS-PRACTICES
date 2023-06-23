import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
`

export const EditTextContainer = styled.div`
  width: max-content;
  height: fit-content;
  padding: 2%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 15px;
`
export const CustomInput = styled.input`
  padding: 10px;
  outline: none;
  background-color: transparent;
  border-radius: 5px;
  color: #323f4b;
  border: 1px solid #cbd2d9;
`

export const EditInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const CustomBtn = styled.button`
  background-color: #d946ef;
  padding: 10px;
  border-radius: 5px;
  border-style: none;
  outline: none;
  color: #ffffff;
  font-weight: 700;
`

export const CustomText = styled.p`
  color: #323f4b;
`
