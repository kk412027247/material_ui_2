import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import FontIcon from 'material-ui/FontIcon';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

const styles = {
  root:{
    display:'flex',
    flexWrap:'wrap'
  }
};

const ListExampleSimple = () => (
  <Paper style={{width:300}}>
    <List>
      <ListItem primaryText='Inbox' leftIcon={<ContentInbox/>}/>
      <ListItem primaryText='Starred' leftIcon={<ActionGrade/>}/>
      <ListItem primaryText='Send mail' leftIcon={<ContentSend/>}/>
      <ListItem primaryText='Drafts' leftIcon={<ContentDrafts/>}/>
      <ListItem primaryText='Inbox' leftIcon={<ContentInbox/>}/>
    </List>
    <Divider/>
    <List>
      <ListItem primaryText='All mail' rightIcon={<ActionInfo/>}/>
      <ListItem primaryText='Trash' rightIcon={<ActionInfo/>}/>
      <ListItem primaryText='Spam' rightIcon={<ActionInfo/>}/>
      <ListItem primaryText='Spam' rightIcon={<ActionInfo/>}/>
    </List>
  </Paper>
);

const ListExampleChat = ()=>(
  <Paper style={{width:300}}>
    <List>
      <Subheader>React chats</Subheader>
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={<CommunicationChatBubble/>}
      />
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={<FontIcon className='material-icons'>chat_bubble</FontIcon>}
      />
    </List>
    <Divider/>
    <List>
      <Subheader>React chats</Subheader>
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={<CommunicationChatBubble/>}
      />
      <ListItem
        primaryText='Brendan Lim'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={<FontIcon className='material-icons'>chat_bubble</FontIcon>}
      />
    </List>
    <Divider/>
    <List>
      <Subheader>React chats</Subheader>
      <ListItem
        primaryText='Brendan Lim'
        rightAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        leftIcon={<CommunicationChatBubble/>}
      />
      <ListItem
        primaryText='Brendan Lim'
        secondaryText='2123123'
        leftAvatar={<Avatar src='images/uxceo-128.jpg'/>}
        rightIcon={<FontIcon className='material-icons'>chat_bubble</FontIcon>}
      />
    </List>
    <Divider/>
    <List>
      <ListItem
        leftChekbox={<Checkbox/>}
        primaryText='sound'
        secondaryText='hangouts message'
      />
      <ListItem
        primaryText='events and reminder'
        rightToggle={<Toggle/>}
      />
      <ListItem
        primaryText='some'
        secondaryText='thing'
      />
    </List>
  </Paper>
);






export default ListExampleChat;
