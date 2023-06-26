import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #152850;
`

export const LoginContainer = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  background-color: #e0eefe;
  border-radius: 20px;
`

export const LoginImg = styled.img`
  width: 50%;
  height: 90%;
  align-self: center;
`

export const Form = styled.form`
  width: 50%;
  height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
`

export const FormHeading = styled.h1`
  color: #183b56;
`

export const CustomLabel = styled.label`
  color: #5a7184;
  font-weight: 800;
`

export const CustomInput = styled.input`
  padding: 10px;
  border: 1px solid #c3cad9;
  border-radius: 10px;
  outline: none;
`
export const LoginBtn = styled.button`
  padding: 15px;
  border-style: none;
  outline: none;
  border-radius: 10px;
  background-color: #1565d8;
  color: #ffffff;
  font-weight: 700;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: small;
`
