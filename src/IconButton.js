import React from 'react';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import ActionHome from 'material-ui/svg-icons/action/home'

const style = {
  largeIcon:{
    width:60,
    height:60
  },
  large:{
    width:120,
    height:120,
    padding:30
  }
};

// tooltip 是hover的label
const IconButtonExampleSimple = () => (
  <div>
    <IconButton tooltip='Font Icon'>
      <FontIcon className='material-icons'>home</FontIcon>
    </IconButton>
    <IconButton style={style.large} iconStyle={style.largeIcon}>
      <ActionHome/>
    </IconButton>
    <IconButton
      iconClassName='material-icons'
      tooltip='ligature'
      tooltipPosition='bottom-left'
    >
      home
    </IconButton>
    <IconButton
      iconClassName='material-icons'
      tooltip='ligature'
      tooltipPosition='bottom-left'
      touch={true}
    >
      home
    </IconButton>
  </div>
);

export default IconButtonExampleSimple;
