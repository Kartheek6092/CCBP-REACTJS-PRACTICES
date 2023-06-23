import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GreetingsContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
`

export const CustomImg = styled.img`
  width: 40%;
  height: 60%;
`

export const LangBtn = styled.button`
  padding: 10px;
  border: 2px solid #db1c48;
  background-color: ${props => (props.isSelected ? `#db1c48` : `#ffffff`)};
  border-radius: 20px;
  min-width: 100px;
  color: ${props => (props.isSelected ? `#ffffff` : `#db1c48`)};
  font-weight: 700;
`

export const LangList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  width: 50%;
`

export const CustomList = styled.li`
  list-style: none;
`
