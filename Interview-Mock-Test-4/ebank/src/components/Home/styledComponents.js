import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #152850;
  color: #ffffff;
`

export const Header = styled.nav`
  width: 100%;
  height: 10vh;
  padding: 5% 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 10%;
  height: fit-content;
`

export const LogoutBtn = styled.button`
  width: 10%;
  padding: 15px;
  background-color: transparent;
  border: 2px solid #e0eefe;
  color: #e0eefe;
  outline: none;
  cursor: pointer;
`

export const MainHeading = styled.h1`
  color: #ffffff;
`
export const DigitalCard = styled.img`
  width: 50%;
  height: fit-content;
`
