import React from 'react';
import './DrawerToggleButton.css';

import {BsList} from 'react-icons/bs';

class DrawerToggleButton extends React.Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleClick();
  }
  render() {
      return(
          <div className="toggle-button">
            <BsList onClick={this.onClick}  color='white' className='ToggleButton'  size='32px'/>
          </div>
      )
  }
}

export default DrawerToggleButton;