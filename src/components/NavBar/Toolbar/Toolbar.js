import React from 'react';
import './Toolbar.css';

import DrawerToggleButton from '../sideDrawer/DrawerToggleButton/DrawerToggleButton'


class Toolbar extends React.Component {
    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar-navigation">
                    <div className="toolbar-logo">
                        <div className="title">The <span className="v">V</span>nue</div>
                    </div>
                    <div className="toolbar-toggle-button">
                       <DrawerToggleButton handleClick={this.props.drawerToggleClickHandler}/> 
                    </div>
                </nav>
            </header>
        );
    }
}

export default Toolbar;