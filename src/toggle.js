import React from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  block:{
    maxWidth:250
  },
  toggle:{
    marginBottom:16
  },
  thumbOff:{
    backgroundColor:'#ffccc',
  } ,
  trackOff:{
    backgroundColor:'#ff9d9d'
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

const ToggleExampleSimple = () => (
  <div style={styles.block}>
    <Toggle
      label='simple'
      style={styles.toggle}
    />
    <Toggle
      label='toggle by default'
      defaultToggled={true}
      style={styles.toggle}
    />
    <Toggle
      label='disable'
      disabled={true}
      style={styles.toggle}
    />
    <Toggle
      label='label on the right'
      labelPosition='right'
      style={styles.toggle}
    />
    <Toggle
      label='Styling'
      style={styles.toggle}
      thumbStyle={styles.thumbOff}
      trackStyle={styles.trackOff}
      trackSwitchedStyle={styles.thumbSwitched}
      thumbSwitchedStyle={styles.trackSwitched}
      labelStyle={styles.labelStyle}
    />
  </div>
);

export default ToggleExampleSimple;
