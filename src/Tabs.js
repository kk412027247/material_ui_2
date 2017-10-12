import React from 'react';
import {Tabs, Tab} from 'material-ui';
import Slider from 'material-ui/Slider';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  headline:{
    fontSize: 24,
    padding: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  }
};

const handleActive = tab => alert(`A tab with this route property ${tab.props['data-route']} was activated`);

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label='Item One'>
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>This is an example tab.</p>
        <p>You can put sort of HTML or react component in here. It event keeps the component state</p>
        <Slider name='slider0' defaultValue={0.5}/>
      </div>
    </Tab>
    <Tab label='Item Two'>
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>This is an example tab.</p>
      </div>
    </Tab>
    <Tab label='onActive' data-route='/home' onActive={handleActive}>
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>This is an example tab.</p>
      </div>
    </Tab>
  </Tabs>
);

class TabsExampleControlled extends React.Component {

  state={value: 'a'};
  handleChange = (value) => this.setState({value: value});
  render(){
    return(
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label='Tab A' value='a'>
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label='Tab B' value='b'>
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    )
  }
}

class TabsExampleSwipeable extends React.Component {
  state={slideIndex: 0};
  handleChange = value => this.setState({slideIndex: value});
  render(){
    return(
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label='Tab One' value={0}/>
          <Tab label='Tab Tow' value={1}/>
          <Tab label='Tab Three' value={2}/>
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.
            <br/>
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

const TabsExampleIcon = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className='material-icons'>home</FontIcon>}
      label='home'
    />
    <Tab
      icon={<FontIcon className='material-icons'>flight_takeoff</FontIcon>}
      label='Flight Takeoff'
    />
    <Tab icon={
      <FontIcon className='material-icons'>favorite</FontIcon>}
      label='Favorite'
    />
  </Tabs>
);


export default  TabsExampleIcon;
