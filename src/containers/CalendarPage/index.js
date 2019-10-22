import React from 'react';
import { StepOne, StepTwo, StepThree, StepFour, StepFive } from './export'
import { Container } from 'react-bootstrap';

class CalendarPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1
    }
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  render() {
    let step = this.state.currentStep;
    return(<Container>

      {step === 1 && <StepOne onClickPrevious={this.previousStep}
                              onClickNext={this.nextStep}/>}
      {step === 2 && <StepTwo onClickPrevious={this.previousStep}
                              onClickNext={this.nextStep}/>}
      {step === 3 && <StepThree onClickPrevious={this.previousStep}
                                onClickNext={this.nextStep}/>}
      {step === 4 && <StepFour onClickPrevious={this.previousStep}
                              onClickNext={this.nextStep}/>}
      {step === 5 && <StepFive onClickPrevious={this.previousStep}
                              onClickNext={this.nextStep}/>}

    </Container>)
  }

  previousStep() {
    if (this.currentStep === 1 ) return;
    this.setState({ currentStep: this.state.currentStep - 1 })
  }
  nextStep() {
    if (this.currentStep === 5 ) return;
    this.setState({ currentStep: this.state.currentStep + 1 })
  }

}

export default CalendarPage;
