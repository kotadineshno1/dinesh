import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onChangeEvent = event => {
    const {value} = event.target

    this.setState({count: value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="text-content"> Calculate the Letters you enter </h1>
          <input
            id="inputId"
            type="search"
            placeholder="Enter the phrase"
            onChange={this.onChangeEvent}
          />
          <label className="para" htmlFor="inputId">
            Enter the phrase
          </label>

          <div>
            <p className="para2">No.of letters: {count.length}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          className="img2"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
