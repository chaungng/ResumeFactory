import React, {Component} from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export default class MenuBar extends Component {
  construct() {}

  render() {
    return (<MenuList>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </MenuList>);
  }
}
