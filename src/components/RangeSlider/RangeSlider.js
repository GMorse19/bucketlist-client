import React, { Component } from 'react'

// import InputRange from 'react-input-range'
import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'
import './RangeSlider.css'

class RangeSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 3,
      value2: 3,
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  }

  handleChange2 = value => {
    this.setState({
      value2: value
    })
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

  // formatkg = value => value + ' kg'

  render () {
    const { value } = this.state
    return (
      <div className='slider-horizontal'>
        <Slider
          min={1}
          max={5}
          labels={this.horizontalLabels}
          value={value}
          handleLabel={this.smiley}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <br />
        <br />
      <div class="slidecontainer">
      {this.smiley}
        <input
          type="range"
          onChange={this.handleChange2}
          min={1}
          max={5}
          value2={5}
          className="slider2"
          id="myRange"
        />
      </div>
      </div>
    )
  }

}

export default RangeSlider
