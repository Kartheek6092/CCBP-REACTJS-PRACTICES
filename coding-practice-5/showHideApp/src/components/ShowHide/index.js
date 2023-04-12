// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {Showhide1: 'Hide', Showhide2: 'Hide'}

  onSHFname = () => {
    this.setState(prevState => {
      console.log(prevState)
      if (prevState.Showhide1 === 'Hide') {
        return {Showhide1: 'Show'}
      }
      return {Showhide1: 'Hide'}
    })
  }

  onSHLname = () => {
    this.setState(prevState => {
      console.log(prevState)
      if (prevState.Showhide2 === 'Hide') {
        return {Showhide2: 'Show'}
      }
      return {Showhide2: 'Hide'}
    })
  }

  render() {
    const {Showhide1, Showhide2} = this.state
    const {firstname, lastname} = ShowHide.defaultProps
    return (
      <div className="container">
        <div className="SHcontainer">
          <h1 id="heading">Show/Hide</h1>
          <div className="SHbuttons">
            <div className="firstName">
              <button type="button" onClick={this.onSHFname}>
                Show/Hide Firstname
              </button>
              {Showhide1 === 'Show' && (
                <p className="nameContainer">{firstname}</p>
              )}
            </div>
            <div className="lastName">
              <button type="button" onClick={this.onSHLname}>
                Show/Hide Lastname
              </button>
              {Showhide2 === 'Show' && (
                <p className="nameContainer">{lastname}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
ShowHide.defaultProps = {firstname: 'Joe', lastname: 'Jonas'}

export default ShowHide
