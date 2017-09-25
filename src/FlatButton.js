import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon' ;
import ActionAndroid from 'material-ui/svg-icons/action/android'
import {fullWhite,pink50,indigo800} from 'material-ui/styles/colors'


// 三个状态 主要 次要 不可用，另外还有个铺满全部的按钮
const FlatButtonExampleSimple = ()=>(
  <div>
    <FlatButton label='Default'/>
    <FlatButton label='Primary' primary={true}/>
    <FlatButton label='Secondary' secondary={true}/>
    <FlatButton label='Disable' disabled={true}/>
    <br/>
    <br/>
    <FlatButton label='Full width' fullWidth={true}/>
  </div>
);


const style = {
  uploadButton:{
    verticalAlign:'middle'
  },
  uploadInput:{
    cursor:'pointer',
    position:'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0,
    with:'100%',
    opacity:0
  }
};


const FlatButtonExampleComplex = () =>(
  <div>
    <FlatButton
      label='Choose an Image'
      labelPosition='before'
      style={style.uploadButton}
      containerElement='label'
    >
      <input type="file" style={style.uploadInput}/>
    </FlatButton>
    <FlatButton
      label='Label before'
      labelPosition='before'
      primary={true}
      icon={<ActionAndroid/>}
    />
    <FlatButton
      href='https://github.com/'
      target='_bank'
      label='github link'
      secondary={true}
      icon={<FontIcon className='material-icons'>web</FontIcon>}
    />
  </div>
);

const style2={
  margin:12
};


// 只有图标没有颜色的按钮，都可以随便设置颜色
const FlatButtonExampleIcon=()=>(
  <div>
    <FlatButton
      icon={<ActionAndroid />}
      style={style2}
    />
    <FlatButton
      backgroundColor='#a4c639'
      hoverColor='#8aa62f'
      icon={<ActionAndroid color={fullWhite}/>}
      style={style2}
    />
    <FlatButton
      backgroundColor={indigo800}
      href='https://github.com/'
      target='_bank'
      secondary={true}
      icon={<FontIcon color={pink50} className='material-icons'>web</FontIcon>}
      style={style2}
    />
  </div>
);

export default FlatButtonExampleIcon;
