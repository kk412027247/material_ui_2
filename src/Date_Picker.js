import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const optionsStyle = {
  maxWidth:255,
  marginRight:'auto'
};

const DatePickerExampleSimple = ()=> (
  <div>
    <DatePicker hintText='Portrait Dialog'/>
    <DatePicker hintText='landscape dialog' mode='landscape'/>
    <DatePicker hintText='Dialog Disabled' disabled={true}/>
    <DatePicker hintText='open to year' openToYearSelection={true}/>
    <DatePicker hintText='portrait inline dialog' container='inline'/>
    <DatePicker hintText='landscape inline dialog' container='inline' mode='landscape'/>
  </div>
);

class DatePickerExampleToggle extends React.Component{
  constructor(){
    super();

    const minDate=new Date();
    const maxDate= new Date();
    minDate.setFullYear(minDate.getFullYear()-1);
    minDate.setHours(0,0,0,0);
    maxDate.setFullYear(maxDate.getFullYear()+1);
    maxDate.setHours(0,0,0,0);
    this.state={
      minDate,
      maxDate,
      autoOk:false,
      disableYearSelection:false
    }
  }
  handleChangeMinDate = (event,date) => {
    console.log(date);
    this.setState({
      minDate:date
    })
  };

  handleChangeMaxDate = (event,date) => {
    this.setState({
      minDate:date
    })
  };

  handleToggle = (event,toggled)=>{
    this.setState({[event.target.name]:toggled})
  };
  render(){
    return(
      <div>
        <DatePicker
          floatingLabelText='Ranged Date Picker'
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        />
        <div style={optionsStyle}>
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText='Min Date'
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText='Max Date'
            defaultDate={this.state.MaxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <Toggle
            name='autoOk'
            value='autoOk'
            label='auto Ok'
            toggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name='disableYearSelection'
            value='disableYearSelection'
            label='Disable Year Selection'
            toggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />
        </div>
      </div>
    )
  }


}

const disableWeekends = (date) => (date.getDay()===0 || date.getDay()===6);
const disableRandomDates = () => Math.random()>0.7;

const DatePickerExampleDisableDates = ()=>(
  <div>
    <DatePicker firstDayOfWeek={0} hintText='Weekends disable' shouldDisableDate={disableWeekends}/>
    <DatePicker hintText='Random disable' shouldDisableDate={disableRandomDates}/>
  </div>
);




export default DatePickerExampleToggle ;
