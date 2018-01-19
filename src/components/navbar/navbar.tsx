import * as React from 'react'

import { Menu, Icon } from 'semantic-ui-react'

interface NavbarProps {
  currentPageTitle: string
}

const Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <Menu fixed='top' inverted color='blue'>
      <Menu.Item> {/*//onClick={this.toggleView}> */}
        <Icon name='tasks' />
      </Menu.Item>
      <Menu.Item name={props.currentPageTitle}/>
    </Menu>)
}

export default Navbar