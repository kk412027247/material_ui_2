import React, {Component}  from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


class AutoCompleteExampleSimple extends Component {
  state={
    dataSource:[]
  };

  handleUpdateInput = (value) =>{
    this.setState({
      dataSource:[
        value,
        value + value,
        value + value + value,
      ]
    })
  };

  render(){
    return(
      <div>
        <AutoComplete
          hintText='请输入'
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText='请输入'
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText='Full width'
          fullWidth={true}
        />
      </div>
    )
  }
}

const dataSource1 = [
  {
    text:'text-value1',
    value:(
      <MenuItem
        primaryText='text-value1'
        secondaryText='&#9786;'
      />
    ),
  },
  {
    text:'text-value2',
    value:(
      <MenuItem
        primaryText='text-value2'
        secondaryText='&#9786;'
      />
    ),
  },
];

const dataSource2=['12345','23456','34567'];

const dataSource3=[
  {textKey:'Some Text', valueKey:'SomeFirstValue'} ,
  {textKey:'Some Text', valueKey:'SomeSecondValue'}
];

const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey'
};


//本代码中的第一个示例创建了MenuItem作为在展示数据中的组件，而第二个示例创建了一个数组，作为dataSource的数据，并在成为焦点时显示出来。
// 但是这两个例子都是不使用过滤器（filter）的。
const AutoCompleteExampleDataSource = () => (
  <div>
    <AutoComplete
      hintText='text-value data'
      filter={AutoComplete.noFilter}
      dataSource={dataSource1}
    />
    <br/>
    <AutoComplete
      hintText='showAllItems'
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource2}
    />
    <br/>
    <AutoComplete
      floatingLabelText='Same text, different values'
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource3}
      dataSourceConfig={dataSourceConfig}
    />
    <br/>
  </div>
);

const colors =[
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];


// 过滤设置，第一种用的是全文匹配，第二种用的是 模糊匹配
const AutoCompleteExampleFilters = () => (
  <div>
    <AutoComplete
      floatingLabelText="Type 'r',case insensitive"
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={colors}
    />
    <br/>
    <AutoComplete
      floatingLabelText='Type peah, fuzzy search'
      filter={AutoComplete.fuzzyFilter}
      dataSource={fruit}
      maxSearchResults={5}
    />
  </div>
);


// 补全组件可以被onNewRequest的回调函数控制
class AutoCompleteExampleControlled extends Component {
  state={
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText:searchText,
    })
  };

  handleNewRequest = () => {
    this.setState({
      searchText:'',
    })
  };

  render(){
    return(
      <div>
        <AutoComplete
          hintText="Type 'r',case insensitive"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={colors}
          filter={(searchText,key)=>(key.indexOf(searchText)!==-1)}
          openOnFocus={true}
        />
      </div>
    )
  }
}


const menuProps = {
  desktop:true,
  disableAutoFocus:true,
};


// 外部传入的props属性？ 不知道什么玩意
class AutoCompleteExampleProps extends Component{
  render(){
    return(
      <div>
        <AutoComplete
          hintText='Type anything'
          dataSource={colors}
          menuProps={menuProps}
        />
      </div>
    )
  }
}


export default AutoCompleteExampleProps;
