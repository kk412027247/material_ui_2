import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'


// 头部导航条组件
const AppBarExample= () => (
  <AppBar
    title='Title'
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

const handleTouchTap = () =>{
  alert('点击了导航条的标题')
};

const style={
  title:{
    cursor:'pointer',
  }
};

// 带图标的导航条
const AppBarExampleIconButton = () =>(
  <AppBar
    title={<span style={style.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose/></IconButton>}
    iconElementRight={<FlatButton label='Save'/>}
  />
);


// 带了一堆复杂组件的导航条
class Login extends React.Component {
  static muiName = 'FlatButton';
  render() {
    return (
      <FlatButton {...this.props} label='Login'/>
    )
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon/></IconButton>
    }
    targetOrigin={{horizontal:'right',vertical:'top'}}
    anchorOrigin={{horizontal:'right',vertical:'top'}}
  >
    <MenuItem primaryText='刷新'/>
    <MenuItem primaryText='帮助'/>
    <MenuItem primaryText='退出'/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class AppBarExampleComposition extends React.Component {
  state={
    logged:true,
  };
  handleChange = (event, logged) =>{
    console.log(event);
    console.log(logged);
    this.setState({logged:logged})
  };

  render(){
    return(
      <div>
        <Toggle
          label='Logged'
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition='right'
          style={{margin:20}}
        />

        <AppBar
          title='Title'
          iconElementLeft={<IconButton><NavigationClose/></IconButton>}
          iconElementRight={this.state.logged ? <Logged/> : <Login/>}
        />
      </div>
    )
  };

}

















export default AppBarExampleComposition;
