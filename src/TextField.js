import React from 'react';
import TextField from 'material-ui/TextField'
import {orange500, blue500} from 'material-ui/styles/colors';

const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText='Hint Text'
    />
    <br/>
    <TextField
      hintText='The hint text can be as long as you want , it will wrap'
    />
    <br/>
    <TextField
      id='text-field-default'
      defaultValue='Default Value'
    />
    <br/>
    <TextField
      hintText='Hint Text'
      floatingLabelText='Floating Label Text'
    />
    <br/>
    <TextField
      defaultValue='Default Value'
      floatingLabelText='Floating Label Text'
    />
    <br/>
    <TextField
      hintText='Hint Text'
      floatingLabelText='Fixed Floating Label Text'
      floatingLabelFixed={true}
    />
    <br/>
    <TextField
      hintText='Password Field'
      floatingLabelText='Password'
      type='password'
    />
    <br/>
    <TextField
      hintText='MultiLine with rows: 2 and rowsMax: 4'
      multiLine={true}
      rows={2}
      rowsMax={4}
    />
    <br/>
    <TextField
      hintText='Message Field'
      floatingLabelText='MultiLine and FloatingLabel'
      multiLine={true}
      rows={2}
    />
    <br/>
     <TextField
      hintText='Full width'
      fullWidth={true}
    />
  </div>
);

const TextFieldExampleError = () => (
  <div>
    <TextField
      hintText='Hint Text'
      errorText='This field is required'
    />
    <br/>
    <TextField
      hintText='Hint Text'
      errorText='The error text can be as long as you want, it will wrap'
    />
    <br/>
    <TextField
      hintText='Hint Text'
      errorText='This field is required'
      floatingLabelText='Floating Label Text'
    />
    <br/>
    <TextField
      hintText='Message Field'
      errorText='This field is required'
      floatingLabelText='MultiLine and FloatingLabel'
      multiLine={true}
      rows={2}
    />
    <br/>
    
  </div>
);

const styles = {
  errorStyle:{
    color: orange500,
  },
  underlineStyle:{
    borderColor:orange500,
  },
  floatingLabelStyle:{
    color:orange500
  },
  floatingLabelFocusStyle:{
    color: blue500
  }
};

const TextFieldExampleCustomize = () => (
  <div>
    <TextField
      hintText='Style Hint Text'
      hintStyle={styles.errorStyle}
    />
    <br/>
    <TextField
      hintText='Custom error color'
      errorText='This field is required'
      errorStyle={styles.errorStyle}
    />
    <br/>
    <TextField
      hintText='Custom Underline Color'
      underlineStyle={styles.underlineStyle}
    />
    <br/>
    <TextField
      hintText='Custom Underline Focus Color'
      underlineFocusStyle={styles.underlineStyle}
    />
    <br/>
    <TextField
      floatingLabelText='Styled Floating Label Text'
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}

    />
    <br/>
    <TextField
      disabled={true}
      floatingLabelText='Styled Floating Label Text'
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}

    />
    <br/>
    <TextField
      value='1213123'
      floatingLabelText='Styled Floating Label Text'
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}

    />
    
  </div>
);

 class TextFieldExampleControlled extends React.Component {
   state={value: 'Property Value'};
   handleChange = (event, newValue) => this.setState({value: newValue});

   render(){
     return(
       <div>
         <TextField
           id='text-field-controlled'
           value={this.state.value}
           onChange={this.handleChange}
         />
       </div>
     )
   }


 }

export default TextFieldExampleControlled;
