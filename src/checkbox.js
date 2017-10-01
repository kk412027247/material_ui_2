import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';

const Favorite = <FontIcon className='material-icons'>favorite</FontIcon>;
const FavoriteBorder= <FontIcon className='material-icons'>favorite_border</FontIcon>;
const Visibility = <FontIcon className='material-icons'>visibility</FontIcon>;
const VisibilityOff = <FontIcon className='material-icons'>visibility_off</FontIcon>;

const styles = {
  block:{
    maxWidth:250,
  },
  checkbox:{
    marginBottom:16,
  }
};

class CheckboxExampleSimple extends React.Component {
  state={checked:false};
  updateCheck = (evt,oldState) => this.setState({checked:oldState});
  render(){
    return(
      <div>
        <Checkbox
          label='Simple'
          style={styles.checkbox}
          labelPosition='left'
        />
        <Checkbox
          label='Simple with controlled value'
          checked={this.state.checked}
          onCheck={this.updateCheck}
          style={styles.checkbox}
        />
        <Checkbox
          style={styles.checkbox}
          checkedIcon={Favorite}
          uncheckedIcon={FavoriteBorder}
          label='Custom icon'
        />
        <Checkbox
          checkedIcon={Visibility}
          uncheckedIcon={VisibilityOff}
          label="Custom icon of different shapes"
          style={styles.checkbox}
        />
      </div>
    )
  }
}

export default CheckboxExampleSimple  ;
