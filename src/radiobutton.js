import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';

const Favorite = <FontIcon className='material-icons' color='#F44336'>favorite</FontIcon>;
const FavoriteBorder = <FontIcon className='material-icons'>favorite_border</FontIcon>;

const styles = {
  block:{
    maxWidth:250
  },
  radioButton:{
    marginBottom:16
  }
};

const RadioButtonExampleSimple = () => (
  <div>
    <RadioButtonGroup name='shipSpeed' defaultSelected='no_light'>
      <RadioButton
        value='light'
        label='Simple'
        style={styles.radioButton}
      />
      <RadioButton
        value='not_light'
        label='Selected by default'
        style={styles.radioButton}
      />
      <RadioButton
        value='ludicrous'
        label='Custom icon'
        checkedIcon={Favorite}
        uncheckedIcon={FavoriteBorder}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default RadioButtonExampleSimple;
