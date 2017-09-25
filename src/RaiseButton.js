import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon' ;
import ActionAndroid from 'material-ui/svg-icons/action/android'
import {fullWhite,pink50,indigo800} from 'material-ui/styles/colors'

const style2 = {
  margin:12
};

const style = {
  button:{
    margin:12
  },
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

const RaiseButtonExampleSimple = () => (
  <div>
    <RaisedButton label='default' style={style2}/>
    <RaisedButton label='Primary' primary={true} style={style2}/>
    <RaisedButton label='Secondary' secondary={true} style={style2}/>
    <RaisedButton label='Disabled' disabled={true} style={style2}/>
    <br/>
    <br/>
    <RaisedButton label='Full width' fullWidth={true}/>
  </div>
);

// labelPosition 标注与子组件之间的位置关系

const RaisedButtonExampleComplex = () =>(
  <div>
    <RaisedButton
      label='Choose an Image'
      labelPosition='before'
      style={style.button}
      containerElement='label'

    >
      <input type="file" style={style.uploadInput}/>
    </RaisedButton>
    <RaisedButton
      label='Label before'
      labelPosition='before'
      primary={true}
      icon={<ActionAndroid/>}
      style={style.button}
    />
    <RaisedButton
      href='https://github.com/'
      target='_bank'
      label='github link'
      secondary={true}
      icon={<FontIcon className='material-icons'>web</FontIcon>}
      style={style.button}
    />
  </div>
);



// 只有图标没有颜色的按钮，都可以随便设置颜色
const RaisedButtonExampleIcon=()=>(
  <div>
    <RaisedButton
      icon={<ActionAndroid />}
      style={style2}
    />
    <RaisedButton
      backgroundColor='#a4c639'
      icon={<ActionAndroid color={fullWhite}/>}
      style={style2}
    />
    <RaisedButton
      href='https://github.com/'
      target='_bank'
      secondary={true}
      icon={<FontIcon color={pink50} className='material-icons'>web</FontIcon>}
      style={style2}
    />
  </div>
);

export default  RaisedButtonExampleIcon;
