import styled from 'styled-components'

export const CharCounterContainer = styled.div`
  width: 45vw;
  height: 90vh;
  padding: 3%;
  display: flex;
  flex-direction: column;
  background-color: #ffc533;
  border-radius: 15px 0px 0px 15px;
`
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextInputContainer = styled(CharCounterContainer)`
  background-color: #0f172a;
  border-radius: 0px 15px 15px 0px;
`
// export const CharCounterHeading = styled.div`
//   width: 100%;
//   height: fit-content;
// `

export const CustomHeader = styled.h1`
  font-size: xx-large;
  font-weight: 800;
  width: 100%;
  height: fit-content;
  padding: 10%;
  background-color: #ffbf1f;
`

export const InputContainer = styled.form`
  width: 100;
  display: flex;
  justify-content: space-between;
`

export const UserInputList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const InputItem = styled.li`
  list-style: none;
  font-size: larger;
  font-weight: 700;
`

export const TextInputHeading = styled.h1`
  color: #ffc533;
  text-align: center;
`

export const TextInput = styled.input`
  padding: 10px;
  outline: none;
  background-color: #ffffff;
  border-radius: 5px;
  width: 90%;
`

export const AddBtn = styled.button`
  background-color: #ffc533;
  padding: 10px;
  color: #ffffff;
  border-style: none;
  outline: none;
  border-radius: 5px;
`
