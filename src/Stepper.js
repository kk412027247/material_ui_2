import React from 'react';
import {Step, Stepper, StepLabel, StepContent,StepButton} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class HorizontalLinerStepper extends React.Component {
  state={finished:false, stepIndex:0};
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex +1,
      finished: stepIndex >= 2
    })
  };
  handlePrev = () => {
    const{stepIndex} = this.state;
    if(stepIndex > 0){
      this.setState({stepIndex:stepIndex-1})
    }
  };
  getStepContent = (stepIndex) => {
    switch(stepIndex){
      case 0:
        return 'select campaign setting...';
      case 1:
        return 'what is an ad group anyways';
      case 2:
        return 'this is the bit I really care about';
      default:
        return 'You\'re a long way from home sonny jim!'
    }
  };
  render(){
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return(
      <div style={{width:'100%', maxWidth:700, margin:'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepButton>select campaign</StepButton>
          </Step>
          <Step>
            <StepButton>Create an group</StepButton>
          </Step>
          <Step>
            <StepButton>Create an ad</StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={evt=>{
                  evt.preventDefault();
                  this.setState({stepIndex:0, finished: false})
                }}
              >
                Click here
              </a> to reset the example
            </p>
          ):(
           <div>
             <p>{this.getStepContent(stepIndex)}</p>
             <div>
               <FlatButton
                label='Back'
                disabled={stepIndex === 0}
                onClick={this.handlePrev}
                style={{marginRight: 12}}
               />
               <RaisedButton
                label={stepIndex ===2 ? 'Finish' : 'Next'}
                primary={true}
                onClick={this.handleNext}
               />
             </div>
           </div>
          )}
        </div>
      </div>
    )
  }
}

class VerticalLinerStepper extends React.Component {
  state = {
    finished:false,
    stepIndex:0,
  };

  handleNext = () => {
    const{stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >=2
    })
  };
  handlePrev = () => {
    const {stepIndex} = this.state;
    if(stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1})
    }
  };

  renderStepActions=(step)=>{
    const {stepIndex} = this.state;
    return(
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight:12}}
        />{step > 0 && (
          <FlatButton
            label='back'
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    )
  };

  render(){
    const {finished, stepIndex} = this.state;
    return(
      <div style={{maxWidth: 380, maxHeight: 400, margin:'auto'}}>
        <Stepper activeStep={stepIndex} orientation='vertical'>
          <Step>
            <StepLabel>select campaign settings</StepLabel>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
            <StepContent>
              <p>
                An ad group contains one or more ads which target a shared set of keywords.
              </p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin:'20px 0', textAlign:'center'}}>
            <a
              href="#"
              onClick={event=>{
                event.preventDefault();
                this.setState({stepIndex:0, finished:false})
              }}
            >
              Click here
            </a> to reset the example
          </p>
        )}
      </div>
    )
  }
}

class HorizontalNonLinearStepper extends React.Component {
  state={stepIndex: 0};

  handleNext = () => {
    const {stepIndex} = this.state;
    if(stepIndex < 2){
      this.setState({stepIndex: stepIndex +1})
    }
  };

  handlePrev = () =>{
    const {stepIndex} = this.state;
    if(stepIndex > 0){
      this.setState({stepIndex: stepIndex-1})
    }
  };

  getStepContent = (stepIndex) => {
    switch(stepIndex){
      case 0:
        return 'Select Campaign settings...' ;
      case 1:
        return 'what is an ad group anyways?' ;
      case 2:
        return 'this is the bit i really care about';
      default:
        return 'You\'re a long way from home sonny jim!'
    }
  };
  render(){
    const {stepIndex} = this.state;
    const contentStyle = {margin:'0 16px'};
    return(
      <div style={{width:'100%', maxWidth:700, margin:'auto'}}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={()=>this.setState({stepIndex:0})}>
              Select campaign setting
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={()=>this.setState({stepIndex:1})}>
              Create an ad group
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={()=>this.setState({stepIndex:2})}>
              Create an ad
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
          <div style={{margin:12}}>
            <FlatButton
              label='Back'
              disabled={stepIndex === 0}
              onClick={this.handlePrev}
              style={{marginRight:12}}
            />
            <RaisedButton
              label='Next'
              disabled={stepIndex === 2}
              primary={true}
              onClick={this.handleNext}
            />
          </div>
        </div>
      </div>
    )
  }
}

const getStyles = () => {
  return{
    root:{
      width:'100%',
      maxWidth:700,
      margin: 'auto',
    },
    content:{
      margin:'0 16px'
    },
    actions:{
      marginTop:12,
    },
    backButton:{
      marginRight:12
    }
  }
};

class GranularControlStepper extends React.Component {
  state={
    stepIndex:null,
    visited:[]
  };
  componentWillMount(){
    const {stepIndex, visited}= this.state;
    this.setState({visited: visited.concat(stepIndex)})
  };
  componentWillUpdate(nextProps, nextState){
    const{stepIndex, visited} = nextState;
    if(visited.indexOf(stepIndex) === -1){
      this.setState({visited: visited.concat(stepIndex)})
    }
  }
  handleNext = () => {
    const {stepIndex} = this.state;
    if(stepIndex < 2){
      this.setState({stepIndex:stepIndex + 1})
    }
  };
  handlePrev = () => {
    const {stepIndex} = this.state;
    if(stepIndex > 0){
      this.setState({stepIndex:stepIndex - 1})
    }
  };

  getStepContent = (stepIndex) =>{
    switch(stepIndex){
      case 0:
        return 'select campaign setting';
      case 1:
        return 'what is an ad group anyways';
      case 2:
        return 'this is the bit i really care about';
      default:
        return 'Click a step to get started.'
    }
  };

  render(){
    const {stepIndex, visited} = this.state;
    const styles = getStyles();
    return(
      <div style={styles.root}>
        <p>
          <a
            href="#"
            onClick={evt=>{
              evt.preventDefault();
              this.setState({stepIndex: null, visited:[]})
            }}
          >
            Click here
          </a> to reset the example
        </p>
        <Stepper linear={false}>
          <Step completed={visited.indexOf(0) !== -1} active={stepIndex ===0}>
            <StepButton onClick={()=>this.setState({stepIndex: 0})}>
              select campaign setting
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(1) !== -1} active={stepIndex ===1}>
            <StepButton onClick={()=>this.setState({stepIndex: 1})}>
              select campaign setting
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(2) !== -1} active={stepIndex ===2}>
            <StepButton onClick={()=>this.setState({stepIndex: 2})}>
              select campaign setting
            </StepButton>
          </Step>
        </Stepper>
        <div style={styles.content}>
          <p>{this.getStepContent(stepIndex)}</p>
          {stepIndex !== null && (
            <div style={styles.actions}>
              <FlatButton
                label='Back'
                disabled={stepIndex === 0}
                onClick={this.handlePrev}
                style={styles.backButton}
              />
              <RaisedButton
                label='Next'
                primary={true}
                onClick={this.handleNext}
              />
            </div>
          )}
        </div>
      </div>
    )
  }

}

export default GranularControlStepper;
