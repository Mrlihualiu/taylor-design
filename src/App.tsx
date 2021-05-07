import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

const App: React.FC = () => {
  return (
    <div>
      <Menu mode='vertical' defaultOpenSubMenu={['2']}>
        <MenuItem>cool menu1</MenuItem>
        <MenuItem disabled={false}>cool menu3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>cool menu1</MenuItem>
          <MenuItem>cool menu2</MenuItem>
        </SubMenu>
        <MenuItem disabled>cool menu2</MenuItem>
      </Menu>
      {/* <Button>Default</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary Small</Button>
      <Button btnType={ButtonType.Default} disabled size={ButtonSize.Large}>Disabled</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Disabled Link</Button> */}
    </div>
  );
}

export default App;
