import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider  from 'material-ui/Divider'
import FontIcon from 'material-ui/FontIcon'

const style = {
  display:'inline-block',
  margin:'16px 32px 16px 0'
};

const MenuExampleSimple = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true}>
        <MenuItem primaryText='Map' disabled={true}/>
        <MenuItem primaryText='Map'/>
        <MenuItem primaryText='Map'/>
        <Divider/>
        <MenuItem primaryText='Map'/>
        <MenuItem primaryText='Map'/>
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText='Map' secondaryText='ccc'/>
        <MenuItem primaryText='Map'/>
        <MenuItem primaryText='Map &amp; sfasfasdf'/>
        <MenuItem
          primaryText='Map'
          leftIcon={<FontIcon className='material-icons'>home</FontIcon>}
        />
        <MenuItem
          primaryText='Map'
          rightIcon={<FontIcon className='material-icons'>dns</FontIcon>}

        />
        <MenuItem
          primaryText='Map'
          rightIcon={<b style={{textAlign: 'center',lineHeight:'24px'}}>d</b>}
        />
        <MenuItem primaryText='Map'/>
        <MenuItem
          primaryText='Custom: 1.2'
          checked={true}
          rightIcon={<FontIcon className='material-icons'>keyboard_arrow_right</FontIcon>}
          menuItems={[
            <MenuItem primaryText='show level 2'/>,
            <MenuItem primaryText='show level 2'/>,
            <MenuItem primaryText='show level 2'/>,
            <MenuItem
              primaryText='show level 2'
              rightIcon={<FontIcon className='material-icons'>keyboard_arrow_right</FontIcon>}
              menuItems={[
                <MenuItem primaryText='show level 3'/>,
                <MenuItem primaryText='show level 3'/>,
                <MenuItem primaryText='show level 3'/>,
                <MenuItem primaryText='show level 3'/>,
              ]}
            />
          ]}
        />

      </Menu>
    </Paper>
  </div>
);

export default MenuExampleSimple;
