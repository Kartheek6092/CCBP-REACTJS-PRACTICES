import {AiFillDelete} from 'react-icons/ai'

import {
  SongItem,
  SongAndTitle,
  TitleAndGenre,
  CustomImg,
  CustomPara,
  DurationAndDel,
  DeleteBtn,
} from './styledComponents'

const PlayItem = props => {
  const {song, removeItem} = props
  const {id} = song
  const deleteSong = () => {
    removeItem(id)
  }

  return (
    <SongItem>
      <SongAndTitle>
        <CustomImg src={song.imageUrl} alt="track" />
        <TitleAndGenre>
          <CustomPara>{song.name}</CustomPara>
          <CustomPara isGenre>{song.genre}</CustomPara>
        </TitleAndGenre>
      </SongAndTitle>
      <DurationAndDel>
        <CustomPara>{song.duration}</CustomPara>
        <DeleteBtn type="button" onClick={deleteSong} data-testid="delete">
          <AiFillDelete id={song.id} />
        </DeleteBtn>
      </DurationAndDel>
    </SongItem>
  )
}

export default PlayItem
