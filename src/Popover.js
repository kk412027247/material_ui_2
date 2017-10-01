import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover ,{PopoverAnimationVertical}from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

class PopoverExampleSimple extends React.Component {
  state={open:false};

  handleTouchTap=(event)=>{
    event.preventDefault();
    this.setState({
      open:true,
      anchorEl:event.currentTarget
    })
  };
  handleRequestClose = () => {
    this.setState({open:false})
  };

  render(){
    return(
      <div>
        <RaisedButton label='Click Me'  onClick={this.handleTouchTap}/>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal:'left',vertical:'bottom'}}
          targetorigin={{horizontal:'left',vertical:'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText='Refresh'/>
            <MenuItem primaryText='help'/>
            <MenuItem primaryText='Setting'/>
            <MenuItem primaryText='Sign out'/>
          </Menu>
        </Popover>
      </div>

    )
  }
}

export default PopoverExampleSimple;
