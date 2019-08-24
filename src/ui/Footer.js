import React from 'react'
import {Box, Text} from 'curls'
import {Icon} from '@jaredlunde/curls-addons'


const Footer = props => (
  <Box kind='navBar' p='y4' justify='between' bw='t1 b0'>
    <Box flex row align='center'>
      <Text
        kind='a'
        flex
        column
        role='button'
        align='center'
        justify='center'
        size='xxs'
        h='100%'
        p='l3:phone l4:tablet l5:desktop'
        color='secondaryLink'
        href='https://github.com/jaredLunde/style-hooks'
      >
        <Icon name='gitHub' size='18' pos='relative'/>
      </Text>

      <Text
        kind='a'
        flex
        column
        role='button'
        align='center'
        justify='center'
        size='xxs'
        h='100%'
        p='l3'
        color='secondaryLink'
        href='https://npmjs.com/package/@style-hooks/core'
      >
        <Icon name='npm' size='32' pos='relative' t='2'/>
      </Text>
    </Box>

    <Text p='x3:phone x4:tablet x5:desktop' size='xs' right>
      MIT License &copy;{(new Date()).getFullYear()}<br/>
      Jared Lunde
    </Text>
  </Box>
)

export default Footer