import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaiseButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


class DrawerSimpleExample extends React.Component {
  constructor(props){
    super(props);
    this.state={open:false}
  }
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose= () => {this.setState({open: false})};
  render(){
    return(
      <div>
        <RaiseButton
          label='Toggle Drawer'
          onClick={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open)=>this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
        </Drawer>
      </div>
    )
  }
}



class DrawerOpenRightExample extends React.Component {
  constructor(){
    super();
    this.state={open:false};
  }
  handleToggle = ()=> {this.setState({open: !this.state.open})};

  render(){
    window.addEventListener('resize',()=>console.log(document.getElementsByTagName('div')[0].offsetWidth));

    return(
      <div>
        <RaiseButton
          label='Toggle Drawer'
          onClick={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open}>
          <AppBar title='AppBar'/>
          <MenuItem>123</MenuItem>
        </Drawer>
      </div>
    )
  }
}


export default DrawerOpenRightExample;
