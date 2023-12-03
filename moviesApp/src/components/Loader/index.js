import Loader from 'react-loader-spinner'
import './index.css'

const RenderLoader = () => (
  <div className="loader-container" testid="loader">
    <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
  </div>
)

export default RenderLoader
