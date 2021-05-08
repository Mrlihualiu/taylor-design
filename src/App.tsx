/*
 * @Descripttion: liulihua9@xdf.cn
 * @version: 1.0
 * @Author: 刘礼华
 * @Date: 2021-05-07 10:02:50
 * @LastEditors: liulihua9@xdf.cn
 * @LastEditTime: 2021-05-08 17:54:28
 */
import React from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Input, { InputType, InputSize } from './components/Input/input';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const App: React.FC = () => {
  return (
    <div>
      <Menu mode='horizontal' defaultOpenSubMenu={['2']}>
        <MenuItem>cool menu1</MenuItem>
        <MenuItem disabled={false}>cool menu3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>cool menu1</MenuItem>
          <MenuItem>cool menu2</MenuItem>
        </SubMenu>
        <MenuItem disabled>cool menu2</MenuItem>
      </Menu>
      <Input type={InputType.Website} size={InputSize.Small} placeholder="请输入网站地址" />
      <Input type={InputType.Email} size={InputSize.Small} placeholder="请输入邮箱地址" />
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
