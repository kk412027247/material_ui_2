import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const TimePickerExampleSimple = () => (
  <div>
    <TimePicker
      hintText='12hr Format'
    />
    <TimePicker
      hintText='12hr Format with auto ok'
      autoOk={true}
    />
    <TimePicker
      format='24hr'
      hintText='24hr Format'
    />
    <TimePicker
      disabled={true}
      format='24hr'
      hintText='Disable TimePicker'
    />
  </div>
);

class TimePickerExampleComplex extends React.Component{
  state={value24: null, value12: null};

  handleChangeTimePicker24 = (event, date) => this.setState({value24: date});

  handleChangeTimePicker12 = (event, date) => this.setState({value12: date});



  render(){
    return(
      <div>
        <TimePicker
          format='ampm'
          hintText='12hr Format'
          value={this.state.value12}
          onChange={this.handleChangeTimePicker12}
          minutesStep={5}
        />
        <TimePicker
          format='24hr'
          hintText='24hr Format'
          value={this.state.value24}
          onChange={this.handleChangeTimePicker24}
          okLabel='确认'
          cancelLabel='取消'
        />
      </div>
    )
  }

}












export default TimePickerExampleComplex;
