import styled from 'styled-components'

export const SongItem = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  height: 5%;
  margin: 1% 0px;
`
export const SongAndTitle = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;
`
export const CustomImg = styled.img`
  width: 30%;
  height: 100%;
  padding-right: 3%;
`

export const TitleAndGenre = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const CustomPara = styled.p`
  padding: 0px;
  color: ${props => (props.isGenre ? '#3b82f6' : null)};
`

export const DurationAndDel = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DeleteBtn = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
`
