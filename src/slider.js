import React,{Component} from 'react';
import Slider from 'material-ui/Slider';

const SliderExampleSimple = () => (
  <div>
    <Slider/>
    <Slider defaultValue={1}/>
    <Slider defaultValue={1}/>
    <Slider defaultValue={1} disabled={true}/>
    <Slider defaultValue={.1} step={.1}/>
  </div>
);

class SliderExampleControlled extends Component{
  state={
    firstSlider:0.5,
    secondSlider:50
  } ;
  handleFirstSlider= (evt, value) => this.setState({firstSlider:value}) ;

  handleSecondSlider= (evt, value) => this.setState({secondSlider:value});

  render(){
    return(
      <div>
        <Slider value={this.state.firstSlider} onChange={this.handleFirstSlider} axis='x-reverse'/>
        <span>{this.state.firstSlider}</span>
        <Slider min={0} max={100} step={1} value={this.state.secondSlider} onChange={this.handleSecondSlider}/>
        <span>{this.state.secondSlider}</span>
      </div>
    )
  }

}


export default SliderExampleControlled;
