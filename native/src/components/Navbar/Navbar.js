import React, { Component } from 'react';

import { Menu, Segment } from 'semantic-ui-react';

class Navbar extends Component {
    state = { 
        activeItem: 'home' 
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item 
                        name='Native' 
                        active={activeItem === 'Native'} 
                        onClick={this.handleItemClick} />

                    <Menu.Menu position='right'>
                        <Menu.Item 
                            name='New Search' 
                            active={activeItem === 'New Search'} 
                            onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu>
            </Segment>
        )
    }
}

export default Navbar;