import React, { useContext, useState, FunctionComponentElement } from 'react'
import classnames from 'classnames'
import { MenuContext } from './menu'
import { menuItemProps } from './menuItem'

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
  const context = useContext(MenuContext)
  const openSubMenu = context.defaultOpenSubMenu as Array<string>
  const isOpenSubMenu = (context.mode === 'vertical' && index) ? openSubMenu.includes(index) : false
  const [menuOpen, setMenuOpen] = useState(isOpenSubMenu)
  const menuClasses = classnames('taylor-submenu', {
    'menu-opened': menuOpen
  })
  const classes = classnames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  let timer:any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  } : {}

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<menuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: index + '-' + i
        })
      } else {
        console.error('Warnning: menu has a child which is not a MenuItem component');
      }
    })

    return (
      <ul className={menuClasses}>
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'

export default SubMenu