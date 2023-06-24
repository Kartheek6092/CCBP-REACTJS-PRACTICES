import styled from 'styled-components'

export const GuideContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef4f7;
`
export const MainHeading = styled.h1`
  color: #334155;
  font-weight: 700;
  border-bottom: 5px solid #52bbf0;
  border-radius: 5px;
`
export const LoaderContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TravelList = styled.ul`
  padding-left: 0px;
  display: flex;
  width: 90%;
  flex-wrap: wrap;
`

export const TravelItem = styled.li`
  list-style: none;
  width: 48%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  background-color: #ffffff;
  padding: 1%;
`

export const CustomImg = styled.img`
  width: 100%;
  height: fit-content;
`
export const CustomHeading = styled.h1`
  color: #475569;
`
export const Description = styled.p`
  color: #64748b;
`
