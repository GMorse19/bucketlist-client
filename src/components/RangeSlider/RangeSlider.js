import React, { Component } from 'react'

// import InputRange from 'react-input-range'
import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'
// import './RangeSlider.css'
import './Range.scss'

class RangeSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 3,
      value2: 3,
      className: 'smiley-3'
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  }

  handleChange = value => {
    console.log(value)
    this.setState({
      value: value
    })
  }

  handleChange2 = event => {
    console.log(event.target.value)
    this.setState({
      value2: event.target.value
    })
    console.log(this.state)

    const x = event.target.value

    if (x === '1') {
      this.setState({
        className: 'smiley-1'
      })
    } else if (x === '2') {
      this.setState({
        className: 'smiley-2'
      })
    } else if (x === '3') {
      this.setState({
        className: 'smiley-3'
      })
    } else if (x === '4') {
      this.setState({
        className: 'smiley-4'
      })
    } else if (x === '5') {
      this.setState({
        className: 'smiley-5'
      })
    }
  }

  handleChangeComplete = () => {
    console.log('Change event completed')
  }

  horizontalLabels = {
      0: 'Low',
      3: 'Medium',
      5: 'High'
    }

  smiley = <img
    src='smiley.png'
    alt='smiley'
    width={30}
  />

  render () {
    const { value } = this.state
    return (
      <div className='slider-horizontal'>
        <Slider
          min={1}
          max={5}
          labels={this.horizontalLabels}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <br />
        <br />
      <div className="slidecontainer">
        <input
          type="range"
          onChange={this.handleChange2}
          min={1}
          max={5}
          value={this.state.value2}
          className={this.state.className}
          id="myRange"
        />
      </div>
      </div>
    )
  }

}

export default RangeSlider
