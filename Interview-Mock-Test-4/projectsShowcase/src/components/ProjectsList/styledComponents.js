import styled from 'styled-components'

export const ProjectListContainer = styled.div`
  width: 100vw;
  min-height: 90vh;
  display: flex;
  padding: 5% 10%;
  flex-direction: column;
  justify-content: flex-start;
`

export const FilterSelectContainer = styled.div`
  width: 50%;
  height: 50px;
`

export const CategorySelect = styled.select`
  width: 50%;
  height: 50px;
  padding: 5px;
  outline: none;
  border: 1px solid #475569;
  border-radius: 5px;
`

export const ProjectsUlList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  width: 23%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 4px 4px 0px;
  margin: 1%;
  border-radius: 5px;
`
export const ItemImg = styled.img`
  width: 100%;
  height: 90%;
`
export const ProjectName = styled.p`
  width: 100%;
  text-align: center;
`

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImg = styled.img`
  width: 45%;
  height: fit-content;
`
export const RetryBtn = styled.button`
  padding: 10px;
  border-style: none;
  width: 10%;
  background-color: #328af2;
  color: #ffffff;
  border-radius: 5px;
  outline: none;
`
