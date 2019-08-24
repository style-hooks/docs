import React from 'react'
import {Box, Text} from 'curls'


export default ({name, type, required = false, children}) => (
  <li>
    <Box m='b2'>
      <Text as='code' color='emphasis'>{name}</Text>{' '}
      <Text as='code' size='xs'>{`<${type}>`}</Text>{' '}
      {required && <Text as='code' bold size='xs'>required</Text>}
    </Box>
    <Text kind='p'>
      {children}
    </Text>
  </li>
)