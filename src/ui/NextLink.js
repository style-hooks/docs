import React from 'react'
import {Link, Text} from 'curls'


export default props => <Link
  right
  bold
  d='block'
  w='100%'
  p='t3'
  m='t4'
  bw='t1'
  bc='lightAccent'
  {...props}
  children={
    <Text color='secondaryLink'>
      Continue to <Text as='code' color='primaryLink'>{props.children}</Text>
      {" "}&rarr;
    </Text>
  }/>