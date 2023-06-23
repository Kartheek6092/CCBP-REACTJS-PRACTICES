import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3%;
  background-size: cover;
  color: #ffffff;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png ');
`
export const PlayListContainer = styled.div`
  width: 100vw;
  min-height: 80vh;
  background-color: #152850;
  padding: 1% 5%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`

export const CustomHeading = styled.h1`
  padding: 0px;
  margin: 0px;
`

export const CustomPara = styled.p`
  padding: 0px;
  margin: 0px;
`

export const PlaylistHeader = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PlayListHeading = styled.h1`
    font-size: x-large;
    font-weight600;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 15%;
  border: 1px solid #cbd5e1;
  padding: 5px;
`

export const SearchInput = styled.input`
  width: 95%;
  height: 100%;
  border-style: none;
  color: #cbd5e1;
  background-color: transparent;
  outline: none;
`

export const PlayList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  overflow-y: auto;
  width: 100%;
`

export const NoVideosContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
`
