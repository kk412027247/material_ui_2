import React from 'react';
import {handleInput,fetchSomething} from './actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Redux =(props)=>(
<div>
  {props.text}
  <br/>
  <input type="text" onChange={(evt)=>props.input(evt.target.value)}/>
  <br/>
  <br/>
  <br/>
  {props.net}
  <br/>
  <button
  >132</button>
</div>
);


const mapStateToProps = (state) => ({
  text:state.text,
  net:state.net
});
const mapDispatchToProps= (dispatch)=>({
  input:(text)=>{dispatch(handleInput(text))},
  fetchSomething:()=>dispatch(fetchSomething)
});

Redux.propTypes={
  text:PropTypes.string.isRequired,
  input:PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
