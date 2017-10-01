import React,{Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth:{
    width:150
  }
} ;

class SelectFieldExampleSimple extends Component {
  state={value:1};
  handleChange = (event,index,value)=> this.setState({value});
  render(){
    const night = this.state.value===2 || this.state.value===3;
    return(
      <div>
        <SelectField
          floatingLabelText='Frequency'
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText='Never'/>
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" label='am - pm' />
        </SelectField>
        <br/>
        <SelectField
          floatingLabelText='Frequency'
          value={1}
          disabled={true}
          autoWidth={true}
        >
          <MenuItem value={1} primaryText='Disable'/>
        </SelectField>
        <br/>
        <SelectField
          floatingLabelText={'Ready?'}
          floatingLabelStyle={{color:'red'}}
          value={this.state.value}
          onChange={this.handleChange}
          maxHeight={120}
        >
          <MenuItem value={null} primaryText='null'/>
          <MenuItem value={false} primaryText='No'/>
          <MenuItem value={true} primaryText='Yes'/>
        </SelectField>
        <br/>
        <SelectField
        floatingLabelText='Frequency'
        value={this.state.value}
        onChange={this.handleChange}
        errorText={!night && 'should be night'}
      >
        <MenuItem value={1} primaryText='Never'/>
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" label='am - pm' />
      </SelectField>
      </div>
    )
  }
}

const names=[
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class SelectFieldExampleMultiSelect extends Component {
  state={values:[]};
  handleChange = (evt, index, values) => this.setState({values});

  menuItems = (values) => (
    names.map(name=>(
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ))
  );

  render(){
    const {values}= this.state;
    return(
      <SelectField
        multiple={true}
        hintText='Select a name'
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    )
  }

}


export default SelectFieldExampleMultiSelect;
