import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300,indigo900} from 'material-ui/styles/colors';

const styles={
  chip:{
    margin:4
  },
  wrapper:{
    display:'flex',
    flexWrap:'wrap'
  }
};

const handleRequestDelete = () => {
  alert('you clicked the delete button')
};

const handleTouchTap = () => {
  alert('you clicked the chip')
};

const ChipExampleSimple = ()=>(
  <div style={styles.wrapper}>
    <Chip style={styles.chip}>
      Text Chip
    </Chip>
    <Chip
      onRequestDelete={handleRequestDelete}
      onClick={handleTouchTap}
      style={styles.chip}
    >
      Deletable text chip
    </Chip>
    <Chip
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar src='images/uxceo-128.jpg'/>
      image avatar chip
    </Chip>
    <Chip
      onRequestDelete={handleRequestDelete}
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar src='images/uxceo-128.jpg'/>
      Deletable Avatar Chip
    </Chip>
    <Chip
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar icon={<FontIcon className='material-icons'>perm_identity</FontIcon>}/>
      FontIcon Avatar Chip
    </Chip>
    <Chip
      onClick={handleTouchTap}
      style={styles.chip}
      onRequestDelete={handleRequestDelete}
    >
      <Avatar icon={<SvgIconFace/>}/>
      FontIcon Avatar Chip
    </Chip>

    <Chip
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar size={32}>A</Avatar>
      text avatar chip
    </Chip>

    <Chip
      backgroundColor={blue300}
      onRequestDelete={handleRequestDelete}
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar size={32} color={blue300} backgroundColor={indigo900}>
        MB
      </Avatar>
      Colored Chip
    </Chip>
  </div>
);

class ChipExampleArray extends React.Component {
  constructor(props){
    super(props);
    this.state={chipData:[
      {key:0, label:'angular'},
      {key:1, label:'JQuery'},
      {key:2, label:'Polymer'},
      {key:3, label:'ReactJs'},
    ]};
    this.styles={
      chip:{
        margin: 4
      },
      wrapper:{
        display:'flex',
        flexWrap:'wrap'
      }
    }
  }

  handleRequestDelete = (key) => {
    if(key === 3 ){
      alert('Why would you want to delete react?!');
      return;
    }
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map(chip=>chip.key).indexOf(key);
    this.chipData.splice(chipToDelete,1);
    this.setState({chipData:this.chipData})
  };

  renderChip = (data)=>(
    <Chip 
      key={data.key}
      onRequestDelete={()=>this.handleRequestDelete(data.key)}
      style={this.styles.chip}
    >
      {data.label}
    </Chip>
  );

  render(){
    return(
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip)}
      </div>
    )
  }


}

export default  ChipExampleArray;
