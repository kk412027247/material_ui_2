import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List'
import {Menu, MenuItem} from 'material-ui/Menu'


const style = {
  marginLeft:20
};

const DividerExampleForm =()=>(
  <Paper zDepth={2}>
    <TextField hintText='First name' style={style} underlineShow={false}/>
    <Divider/>
    <TextField hintText='Middle name' style={style} underlineShow={false}/>
    <Divider/>
    <TextField hintText='Last name' style={style} underlineShow={false}/>
    <Divider/>
    <TextField hintText='Email address' style={style} underlineShow={false}/>
    <Divider/>
  </Paper>
);

const DividerExampleList = ()=>(
  <Paper zDepth={2} >
    <List>
      <ListItem insetChildren={true} primaryText='Janet Perkins Bennet'/>
      <ListItem insetChildren={true} primaryText='Peter carlsson'/>
    </List>
    <Divider inset={true}/>
    <List>
      <ListItem insetChildren={true} primaryText='Janet Perkins Bennet'/>
      <ListItem insetChildren={true} primaryText='Peter carlsson'/>
    </List>
  </Paper>
);

const style2={
  float:'left'
};

const DividerExampleMenu = () =>(
  <Menu desktop={true} style={style2}>
    <MenuItem primaryText='Setting'/>
    <MenuItem primaryText='Help'/>
    <Divider/>
    <MenuItem primaryText='sign out'/>
  </Menu>
);



export default DividerExampleMenu;
