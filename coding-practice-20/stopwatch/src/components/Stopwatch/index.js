import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerStarted: false, minutes: 0, seconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onTimerStart = () => {
    const {isTimerStarted, seconds} = this.state
    this.setState(prevState => ({
      isTimerStarted: !prevState.isTimerStarted,
    }))
    this.timerId = setInterval(this.tick, 1000)
    if (!isTimerStarted && seconds > 0) {
      clearInterval(this.timerId)
    }
  }

  onStopTimer = () => {
    this.setState({isTimerStarted: false})
  }

  onResetTimer = () => {
    this.setState({
      isTimerStarted: false,
      minutes: 0,
      seconds: 0,
    })
  }

  tick = () => {
    const {seconds, isTimerStarted} = this.state
    if (isTimerStarted) {
      if (seconds === 60) {
        this.setState(prevState => ({
          seconds: 0,
          minutes: prevState.minutes + 1,
        }))
      }
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
      }))
    } else {
      clearInterval(this.timerID)
    }
  }

  render() {
    const {isTimerStarted, minutes, seconds} = this.state

    const parsedMin = minutes < 10 ? `0${minutes}` : minutes
    const parsedSec = seconds < 10 ? `0${seconds}` : seconds

    return (
      <div className="container">
        <div className="stopwatch-container">
          <h1>Stopwatch</h1>
          <div className="timer-container">
            <p className="timer-text">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />{' '}
              Timer
            </p>
            <h1>
              {parsedMin}:{parsedSec}
            </h1>
            <p className="control-buttons">
              <button
                type="button"
                className="start-btn"
                onClick={this.onTimerStart}
                disabled={isTimerStarted}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
