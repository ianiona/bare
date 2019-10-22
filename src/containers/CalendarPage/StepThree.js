import React, { Component } from 'react'
import { Row, Button } from 'react-bootstrap';

class StepThree extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
          Step 3
          <Row>
        <Button onClick={this.props.onClickPrevious}> Previous</Button>
        <Button onClick={this.props.onClickNext}> Next </Button>
        </Row>
      </div>
    )
  }
}

export default StepThree
