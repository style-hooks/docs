import React from 'react'
import {Box} from 'curls'


export default props => (
  <Box
    flex=':desktop'
    justify='center:desktop'
    bg='lightAccent'
    minH='100%'
    p='[x3 y4]:phone 4:tablet'
  >
    <Box as='article' maxW='760'>
      {props.children}
    </Box>
  </Box>
)