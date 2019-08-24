import React, {useEffect} from 'react'
import {Box, Link, Text} from 'curls'
import {Icon} from '@jaredlunde/curls-addons'
import HamburgerMenu, {createHamburger} from '@stellar-apps/hamburger-menu'
import {useHistory} from '~/urls'
import {useCurrentTheme, useSelectTheme} from './SelectTheme'
import Sidebar from './Sidebar'


const ThemeSelector = props => {
  const setTheme = useSelectTheme(),
    currentTheme = useCurrentTheme(),
    alternateTheme = currentTheme === 'light' ? 'dark' : 'light'

  return (
    <Text
      flex
      column
      align="center"
      justify="center"
      p="r4 l2"
      h="100%"
      size="xxs"
      role="button"
      title={`Set theme to ${alternateTheme}`}
      onClick={() => setTheme(alternateTheme)}
    >
      <Icon name="theme" size={24}/>
    </Text>
  )
}

const MenuContents = ({hide}) => {
  const history = useHistory()
  useEffect(() => history.listen(hide), [hide])
  return <Sidebar/>
}

const Menu = props => (
  <HamburgerMenu
    fromBottom
    hamburger={createHamburger({p: 'x4'})}
    t="56"
    b="0"
    w="100%"
    bg="background"
    z="1001"
    ov="autoY touch"
    children={cxt => <MenuContents {...cxt} />}
  />
)

const Header = props => (
  <Box kind='navBar' justify="between" h="100%" bg="background">
    <Box d="none:tablet">
      <Menu/>
    </Box>

    <Link
      flex
      to="/"
      align="center"
      w="112"
      h="100%"
      pos="absolute:phone relative:tablet"
      l="0"
      r="0:phone auto:tablet"
      m="xAuto:phone l4:tablet"
      color="primary"
    >
      <Icon name="logo" size="112x"/>
    </Link>

    <Text
      kind="a"
      column
      role="button"
      align="center"
      justify="center"
      size="xxs"
      h="100%"
      p="l4"
      d="none:phone flex:tablet"
      color="secondaryLink"
      href="https://github.com/style-hooks"
    >
      <Icon name="gitHub" size="18" pos="relative"/>
    </Text>

    <ThemeSelector/>
  </Box>
)

export default Header
