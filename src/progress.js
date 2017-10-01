import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const CircularProgressExampleSimple = () =>(
  <div>
    <CircularProgress/>
    <CircularProgress size={60} thickness={7}/>
    <CircularProgress size={80} thickness={5} />
  </div>
);

class CircularProgressExampleDeterminate extends React.Component {
  constructor(props){
    super(props);
    this.state={complete:0};
    this.i=1;
  }

  componentDidMount(){
    console.log(1);
    this.timer = setTimeout(()=>this.progress(5),1000)
  }
  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  progress=(complete)=>{
    if(complete>100){
      this.setState({complete:100})
    }else{
      console.log(this.i++);
      this.setState({complete:complete});
      const diff=Math.random()*10;
      this.timer=setTimeout(()=>this.progress(complete + diff),1000)
    }
  };
  render(){
    return(
      <div>
        <CircularProgress
          mode='determinate'
          value={this.state.complete}
        />
        <CircularProgress
          mode='determinate'
          value={this.state.complete}
          size={60}
          thickness={7}
        />
        <CircularProgress
          mode='determinate'
          value={this.state.complete}
          size={80}
          thickness={5}
        />
      </div>
    )
  }
}

const LinearProgressExampleSimple = ()=>(
  <LinearProgress/>
);


class LinearProgressExampleDeterminate extends React.Component {
  constructor(props){
    super(props);
    this.state={complete:0};
    this.i=1;
  }

  componentDidMount(){
    console.log(1);
    this.timer = setTimeout(()=>this.progress(5),1000)
  }
  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  progress=(complete)=>{
    if(complete>100){
      this.setState({complete:100});
    }else{
      console.log(this.i++);
      this.setState({complete:complete});
      const diff=Math.random()*10;
      this.timer=setTimeout(()=>this.progress(complete + diff),1000)
    }
  };
  render(){
    return(
      <LinearProgress mode='determinate' value={this.state.complete}/>
    )
  }
}

const style = {
  container:{
    position:'relative'
  },
  refresh:{
    display:'inline-block',
    position:'relative'
  }
};

const RefreshIndicatorExampleSimple = () => (
  <div style={style.container}>
    <RefreshIndicator
      percentage={30}
      size={40}
      left={10}
      top={0}
      status='ready'
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={60}
      size={50}
      left={65}
      top={0}
      status='ready'
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={80}
      size={60}
      left={120}
      top={0}
      color='red'
      status='ready'
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={100}
      size={70}
      left={175}
      top={0}
      color='red'
      status='ready'
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={100}
      size={70}
      left={240}
      top={0}
      color='red'
      status='loading'
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={60}
      size={70}
      left={270}
      top={0}
      color='red'
      loadingColor="#FF9800"
      status='loading'
      style={style.refresh}
    />
  </div>
);

export default RefreshIndicatorExampleSimple;
