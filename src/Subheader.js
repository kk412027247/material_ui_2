import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {blue500, yellow600} from 'material-ui/styles/colors' ;
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton';


const ChatBubble = <FontIcon className='material-icons'>chat_bubble</FontIcon>;
const ActionInfo = <FontIcon className='material-icons'>info</FontIcon>;
const FileFolder = <FontIcon className='material-icons'>folder</FontIcon>;
const Assignment = <FontIcon className='material-icons'>assignment</FontIcon>;
const insert_chart = <FontIcon className='material-icons'>insert_chart</FontIcon>;
const StarBorder =  <FontIcon className='material-icons'>folder_border</FontIcon>;

const ListExampleChat = () => (
  <Paper>
    <List>
      <Subheader>Recent chats</Subheader>
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={ChatBubble}
      />
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={ChatBubble}
      />
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={ChatBubble}
      />
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={ChatBubble}
      />
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={ChatBubble}
      />

    </List>
    <Divider/>
    <List>
      <Subheader>Previous chats</Subheader>
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
      />
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
      />
    </List>
  </Paper>
);

const ListExampleFolder = () => (
  <Paper>
    <List>
      <Subheader inset={true}>Folder</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={FileFolder}/>}
        rightIcon={ActionInfo}
        primaryText='Recipes'
        secondaryText='Jan 17, 2014'
      />
      <ListItem
        leftAvatar={<Avatar icon={FileFolder}/>}
        rightIcon={ActionInfo}
        primaryText='Recipes'
        secondaryText='Jan 17, 2014'
      />
      <ListItem
        leftAvatar={<Avatar icon={FileFolder}/>}
        rightIcon={ActionInfo}
        primaryText='Recipes'
        secondaryText='Jan 17, 2014'
      />
    </List>
    <Divider inset={true}/>
    <List>
      <Subheader inset={true}>Files</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={Assignment} backgroundColor={blue500}/>}
        rightIcon={ActionInfo}
        primaryText='Vacation itinerary'
        secondaryText='jan 20, 2014'
      />
      <ListItem
        leftAvatar={<Avatar icon={insert_chart} backgroundColor={yellow600}/>}
        rightIcon={ActionInfo}
        primaryText='Vacation itinerary'
        secondaryText='jan 20, 2014'
      />
    </List>
  </Paper>
);

const styles= {
  root:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList:{
    width: 500,
    height: 450,
    overflowY: 'auto',
  }
};

const tilesData = [
  {
    img:'images/00-52-29-429_640.jpg',
    title:'breakfast',
    author:'j111'
  },
  {
    img:'images/00-52-29-429_640.jpg',
    title:'breakfast',
    author:'j112'
  },
  {
    img:'images/00-52-29-429_640.jpg',
    title:'breakfast',
    author:'j113'
  },
  {
    img:'images/00-52-29-429_640.jpg',
    title:'breakfast',
    author:'j114'
  },
  {
    img:'images/00-52-29-429_640.jpg',
    title:'breakfast',
    author:'j115'
  },
  {
    img:'images/00-52-29-429_640.jpg',
    title:'breakfast',
    author:'j116'
  },
  {
    img:'images/00-52-29-429_640.jpg',
    title:'breakfast',
    author:'j117'
  },
  {
    img:'images/00-52-29-429_640.jpg',
    title:'breakfast',
    author:'j118'
  },
];


const GridListExample = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map(tile=>(
        <GridTile
          key={tile.author}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton iconStyle={{color:'white'}} iconClassName='material-icons'>star_border</IconButton>}
        >
          <img src={tile.img} alt=""/>
        </GridTile>
      ))}
    </GridList>
  </div>
);





export default   GridListExample;
