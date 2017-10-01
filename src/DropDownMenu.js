import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth:{
    width:200
  }
};

class DropDownMenuSimpleExample extends React.Component {
  state={value:1};
  handleChange=(event, index, value) => this.setState({value});
  render(){
    return(
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText='Never'/>
          <MenuItem value={2} primaryText='Every Night'/>
          <MenuItem value={3} primaryText='Weeknights'/>
          <MenuItem value={4} primaryText='Weekends'/>
          <MenuItem value={5} primaryText='Weekly'/>
        </DropDownMenu>
        <br/>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
          openImmediately={true}
        >
          <MenuItem value={1} primaryText='Never' label='永不'/>
          <MenuItem value={2} primaryText='Every Night' label='每晚'/>
          <MenuItem value={3} primaryText='Weeknights' label='周末晚'/>
          <MenuItem value={4} primaryText='Weekends' label='周末'/>
          <MenuItem value={5} primaryText='Weekly' label='每周'/>
        </DropDownMenu>
      </div>
    )
  }
}

export default  DropDownMenuSimpleExample;
