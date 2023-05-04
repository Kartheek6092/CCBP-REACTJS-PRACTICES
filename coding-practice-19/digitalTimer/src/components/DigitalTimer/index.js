import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isTimerStarted: false, seconds: 0, timer: 25}

  componentDidMount() {}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  onTimerStartOrStop = () => {
    this.setState(prevState => ({
      isTimerStarted: !prevState.isTimerStarted,
    }))
    const {isTimerStarted, timer} = this.state
    this.timerID = setInterval(this.tick, 1000)
    if (!isTimerStarted && timer !== 25) {
      clearInterval(this.timerID)
    }
  }

  onReset = () => {
    this.setState({
      isTimerStarted: false,
      timer: 25,
      seconds: 0,
    })
  }

  tick = () => {
    const {seconds, timer, isTimerStarted} = this.state
    if (isTimerStarted) {
      if (timer < 0) {
        clearInterval(this.timerID)
      } else if (seconds === 0) {
        this.setState(prevState => ({
          seconds: 60,
          timer: prevState.timer - 1,
        }))
      }
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }))
    } else {
      clearInterval(this.timerID)
    }
  }

  onLimitIncrement = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  onLimitDecrement = () => {
    this.setState(prevState => ({
      timer: prevState.timer - 1,
    }))
  }

  render() {
    const {isTimerStarted, timer, seconds} = this.state
    const minutes = timer > 9 ? timer : `0${timer}`
    const secs = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="container">
        <div className="digital-timer-container">
          <h1>Digital Timer</h1>
          <div className="timer-container">
            <div className="running-time">
              <div className="display-timer">
                <h1 className="timer">
                  {minutes}:{secs}
                </h1>
                <p className="timer-status">
                  {isTimerStarted ? 'Running' : 'Paused'}
                </p>
              </div>
            </div>
            <div className="timer-controls">
              <div className="pause-reset">
                <p>
                  <button type="button" onClick={this.onTimerStartOrStop}>
                    {isTimerStarted ? (
                      <img
                        className="control-icons"
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        alt="pause icon"
                      />
                    ) : (
                      <img
                        className="control-icons"
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        alt="play icon"
                      />
                    )}

                    {isTimerStarted ? 'Pause' : 'Start'}
                  </button>{' '}
                </p>
                <p>
                  <button type="button" onClick={this.onReset}>
                    <img
                      className="control-icons"
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      alt="reset icon"
                    />
                    Reset
                  </button>{' '}
                </p>
              </div>
              <p className="limit-text">Set Timer Limit</p>
              <div className="set-limit-container">
                <button
                  className="decrease-btn"
                  type="button"
                  disabled={isTimerStarted}
                  onClick={this.onLimitDecrement}
                >
                  -
                </button>

                <p className="limit">{minutes}</p>

                <button
                  className="increase-btn"
                  disabled={isTimerStarted}
                  onClick={this.onLimitIncrement}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
