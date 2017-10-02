import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

class SnackbarExampleSimple extends React.Component {
  state={
    open:false,
    autoHideDuration:4000,
    message:'Event added to your calendar'
  };
  handleTouchTap=()=>this.setState({open:true});
  

  handleActionTouchTap = () => {
    this.setState({open:false});
    alert('Event remove from your calendar')
  };

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({autoHideDuration: value.length > 0 ? parseInt(value) :0})
  };

  handleRequestClose = () => this.setState({open:false});
  
  render(){
    return(
      <div>
        <RaisedButton
          label='Add to my calendar'
          onClick={this.handleTouchTap}
        />
        <br/>
        <TextField
          floatingLabelText='auto hide duration in ms'
          value={this.state.autoHideDuration}
          onChange={this.handleChangeDuration}
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action='undo'
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}

export default SnackbarExampleSimple;
