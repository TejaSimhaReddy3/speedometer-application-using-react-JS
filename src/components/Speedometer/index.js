// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(accelerate => {
      if (accelerate.count < 200) {
        return {count: accelerate.count + 10}
      }
      return {count: 200}
    })
  }

  onBreak = () => {
    this.setState(brake => {
      if (brake.count > 0 && brake.count <= 200) {
        return {count: brake.count - 10}
      }
      return {count: brake.count * 0}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedo-img"
          alt="speedometer"
        />
        <h1 className="speed-display">Speed is {count}mph</h1>
        <p className="para-limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="primary-butt"
            onClick={this.onAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="transparent-butt"
            onClick={this.onBreak}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
