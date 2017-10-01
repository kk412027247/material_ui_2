import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const iconStyle = {
  marginRight:24
} ;

const FontIconExampleSimple  = () => (
  <div>
    <FontIcon style={iconStyle} className='material-icons'>home</FontIcon>
    <FontIcon style={iconStyle} color={blue500} className='material-icons'>home</FontIcon>
    <FontIcon style={iconStyle} color={red500} hoverColor={greenA200} className='material-icons'>home</FontIcon>
    <FontIcon className="muidocs-icon-action-home" style={iconStyle}/>
  </div>
);

export default FontIconExampleSimple;
