import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around'
  },
  gridList:{
    width:500,
    height:450,
    overflowY:'auto',
  }
};

const titlesData = [
  {
    image:'images/00-52-29-429_640.jpg',
    title:'Breakfast',
    author:'tmd1231'
  },
  {
    image:'images/00-52-29-429_640.jpg',
    title:'Breakfast',
    author:'tmd1232'
  },
  {
    image:'images/00-52-29-429_640.jpg',
    title:'Breakfast',
    author:'tmd1233'
  },
  {
    image:'images/00-52-29-429_640.jpg',
    title:'Breakfast',
    author:'tmd1234'
  },
  {
    image:'images/00-52-29-429_640.jpg',
    title:'Breakfast',
    author:'tmd1235'
  },
  {
    image:'images/00-52-29-429_640.jpg',
    title:'Breakfast',
    author:'tmd1236'
  },
  {
    image:'images/00-52-29-429_640.jpg',
    title:'Breakfast',
    author:'tmd1237'
  },
  {
    image:'images/00-52-29-429_640.jpg',
    title:'Breakfast',
    author:'tmd1238'
  }
];

const GridListExampleSimple = () => (
  <div>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {titlesData.map((tile)=>(
        <GridTile
          key={tile.author}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
        >
          <img src={tile.image} alt=""/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

const GridListExampleComplex = () => (
  <div>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {titlesData.map((tile)=>(
        <GridTile
          key={tile.author}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color='white'/></IconButton>}
          actionPosition='left'
          titlePosition='top'
          titleBackground='Liner-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.image} alt=""/>
        </GridTile>
      ))}
    </GridList>
  </div>
);


export default  GridListExampleComplex;
