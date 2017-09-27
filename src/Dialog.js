import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaiseButton  from  'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

class DialogExampleSimple extends React.Component {
  state={
    open:false
  } ;
  handleOpen=()=>{
    this.setState({open:true});
  };
  handleClose=()=>{
    this.setState({open:false});
  };
  render(){
    const actions=[
      <FlatButton
        label='Cancel'
        primary={false}
        onClick={this.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return(
      <div>
        <RaiseButton label='Dialog' onClick={this.handleOpen}/>
        <Dialog
          title='Dialog With Action'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this widow were passed in as an array of react object.
        </Dialog>
      </div>
    )
  }
}

class DialogExampleModal extends React.Component {
  state={
    open:false
  };
  handleOpen = ()=>{
    this.setState({open:true})
  };
  handleClose=()=>{
    this.setState({open:false})
  };
  render(){
    const actions = [
      <FlatButton
        label='Cancel'
        Primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label='Submit'
        disabled={true}
        Primary={true}
        onClick={this.handleClose}
      />,
    ];
    return(
      <div>
        <RaiseButton label='Dialog' onClick={this.handleOpen}/>
        <Dialog
          title='Dialog With Action'
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only action can close this dialog
        </Dialog>
      </div>
    )
  }
}


const customContentStyle = {
  width:'100%',
  maxWidth:'none'
};

class DialogExampleCustomWidth extends React.Component {
  state={
    open:false
  };
  handleOpen=()=>{
    this.setState({open:true});
  };
  handleClose=()=>{
    this.setState({open:false});
  };
  render(){
    const actions=[
      <FlatButton
        label='Cancel'
        primary={false}
        onClick={this.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return(
      <div>
        <RaiseButton label='Dialog With Custom Width' onClick={this.handleOpen}/>
        <Dialog
          title='Dialog With Custom Width'
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          This dialog spans the entire width of ths screen.
        </Dialog>
      </div>
    )
  }
}

class DialogExampleDialogDatePicker extends React.Component{
  state={
    open:false
  };
  handleOpen = ()=>{
    this.setState({open:true})
  };
  handleClose = ()=>{
    this.setState({open:false})
  };
  render(){
    const actions=[
      <FlatButton
      label='Cancel'
      primary={false}
      onClick={this.handleClose}
    />,
      <FlatButton
        label='Submit'
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return(
      <div>
        <RaiseButton label='Dialog With Date Picker' onClick={this.handleOpen}/>
        <Dialog
          title='Dialog With Date Picker'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <DatePicker hintText='Data Picker'/>
          Open a Date Picker dialog from within a dialog.
        </Dialog>
      </div>
    )
  }
}

const styles={
  radioButton:{
    marginTop:16
  }
};


class DialogExampleScrollable extends React.Component{
  state={
    open:false
  };
  handleOpen = () => {
    this.setState({
      open:true
    })
  };
  handleClose = () => {
    this.setState({
      open:false
    })
  };
  render(){
    const actions = [
      <FlatButton
        label='Cancel'
        primary={false}
        onClick={this.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        keyboardFocused={true}
        onClick={this.handleOpen}
      />
    ];
    const radios=[];
    for(let i=0 ; i<30; i++){
      radios.push(
        <RadioButton
          key={i}
          value={`value${i+1}`}
          label={`Option ${i+1}`}
          style={styles.radioButton}
        />
      )
    }
    return(
      <div>
        <RaiseButton label='Scrollable Dialog' onClick={this.handleOpen}/>
        <Dialog
          title='Scrollable Dialog'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup name='shipSpeed' defaultSelected='no_light'>
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    )
  };




}




export default DialogExampleScrollable;
