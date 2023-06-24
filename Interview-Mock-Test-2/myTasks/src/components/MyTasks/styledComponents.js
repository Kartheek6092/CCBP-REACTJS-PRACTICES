import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`

export const CreateTasksForm = styled.form`
  width: 40vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131213;
  padding: 3%;
`

export const CustomHeading = styled.h1`
  color: #f3aa4e;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CustomInput = styled.input`
  padding: 10px;
  border-style: none;
`

export const CustomLabel = styled.label`
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 10px;
`

export const CustomSelect = styled.select`
  padding: 10px;
  color: #000000;
  outline: none;
`
export const CustomOption = styled.option`
  font-weight: 600;
  padding: 10px;
  background-color: orange;
`
export const AddTaskBtn = styled.button`
  background-color: #f3aa4e;
  padding: 10px;
  color: #ffffff;
  border-style: none;
  cursor: pointer;
  border-radius: 5px;
`
export const DisplayTasksContainer = styled.div`
  width: 60vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 3%;
  background-color: #000000;
`

export const TagsHeading = styled(CustomHeading)`
  color: #ffffff;
`
export const TagsList = styled.ul`
  padding-left: 0px;
  display: flex;

  list-style: none;
`

export const TasksList = styled(TagsList)`
  width: 100%;
  flex-direction: column;
`
