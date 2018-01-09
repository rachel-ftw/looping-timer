import React, { Component } from 'react'
import { connect } from 'react-redux'

import CurrentTimer from '../components/CurrentTimer'
// import rotateSubTimer from '../actions/rotateSubTimer'
import {rotateSubTimer} from '../index'

class PrimaryContainer extends Component {
  render() {
    console.log("@@@", this.props)
    const { timerList } = this.props
    const currentTimer = timerList.filter(timer => timer.isDisplayed)

    return (
      <CurrentTimer
        displayTimer={currentTimer[0]}
        rotateSubTimer={rotateSubTimer}
      />
    )
  }
}

function mapStateToProps(state) {
  return { timerList: state }
}

export default connect(mapStateToProps, { rotateSubTimer })(PrimaryContainer)
