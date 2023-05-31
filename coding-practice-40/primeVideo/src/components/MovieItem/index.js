import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl, categoryId} = movie

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" key={categoryId} />}
      >
        {close => (
          <>
            <div className="close-container">
              <button
                type="button"
                className="close-icon"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="player-container">
              <ReactPlayer url={videoUrl} controls="true" />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
