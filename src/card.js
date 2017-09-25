import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'

const CardExampleWithAvatar = () =>(
  <Card>
    <CardHeader
      title='URL Avatar'
      subtitle='subtitle'
      avatar='images/uxceo-128.jpg'
    />
    <CardMedia
      overlay={<CardTitle title='Overlay title' subtitle='overlay subtitle'/>}
    >
      <img src='images/nature-600-337.jpg' alt=""/>
    </CardMedia>
    <CardTitle title='Overlay title' subtitle='overlay subtitle'/>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label='action1'/>
      <FlatButton label='action1'/>
    </CardActions>
  </Card>
);

const CardExampleExpandable = () => (
  <Card onExpandChange={()=>console.log(13)}>
    <CardHeader
      title='without avatar'
      subtitle='subtitle'
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label='action1'/>
      <FlatButton label='action1'/>
    </CardActions>
    <CardText expandable={true} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

class CardExampleControlled extends React.Component{
  constructor(props){
    super(props);
    this.state={expanded: false}
  }

  handleExpandChange = (expanded) => {
    console.log(expanded);
    this.setState({expanded: expanded})
  };

  handleToggle = (evt, toggle) => {
    this.setState({expanded: toggle})
  };

  handleExpand = () => {
    this.setState({expanded: true})
  };
  handleReduce = () => {
    this.setState({expanded: false})
  };
  render(){
    return(
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title='url avatar'
          subtitle='subtitle'
          avatar='images/uxceo-128.jpg'
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition='right'
            label='This toggle controls the expanded state of the component.'
          />
        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title='overlay title' subtitle='overlay subtitle'/>}
        >
          <img src="images/nature-600-337.jpg" alt=""/>
        </CardMedia>
        <CardTitle title='overlay title' subtitle='overlay subtitle' expandable={true}/>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label='expand' onClick={this.handleExpand}/>
          <FlatButton label='reduce' onClick={this.handleReduce}/>
        </CardActions>
      </Card>
    )
  }


}

export default CardExampleControlled ;
