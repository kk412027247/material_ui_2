import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'

const style = {
  marginRight:20,
};

const FloatingActionButtonExampleSimple = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd/>
    </FloatingActionButton>
    <FloatingActionButton style={style} mini={true}>
      <ContentAdd/>
    </FloatingActionButton>
    <FloatingActionButton style={style} secondary={true}>
      <ContentAdd/>
    </FloatingActionButton>
    <FloatingActionButton style={style} mini={true} secondary={true}>
      <ContentAdd/>
    </FloatingActionButton>
    <FloatingActionButton style={style} disabled={true}>
      <ContentAdd/>
    </FloatingActionButton>
    <FloatingActionButton style={style} mini={true} disabled={true}>
      <ContentAdd/>
    </FloatingActionButton>
  </div>
);

export default  FloatingActionButtonExampleSimple;
