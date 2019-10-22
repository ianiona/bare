import React, { Component } from 'react'
import { Button, Row } from 'react-bootstrap'

class StepOne extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        Step One
        <Row>
        <Button onClick={this.props.onClickPrevious}> Previous</Button>
        <Button onClick={this.props.onClickNext}> Next </Button>
        </Row>
      </div>
    )
  }
}

export default StepOne
