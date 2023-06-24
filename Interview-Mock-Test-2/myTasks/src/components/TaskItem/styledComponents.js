import styled from 'styled-components'

export const TaskListItem = styled.li`
  list-style: none;
  background-color: #1a171d;
  color: #ffffff;
  padding: 0px 3%;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1%;
  display: flex;
  justify-content: space-between;
`

export const CustomText = styled.p`
  color: #ffffff;
`
export const TagText = styled(CustomText)`
  background-color: #f3aa4e;
  color: #475569;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 700;
`
