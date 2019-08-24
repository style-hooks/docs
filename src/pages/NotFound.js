import React from 'react'
import {Helmet} from 'react-helmet-async'
import {css, Box, Text} from 'curls'


const NotFound = props => (
  <Box bg='lightAccent' h='100%'>
    <Helmet>
      <title>404: Not found</title>
    </Helmet>
    <Box flex column justify='center' h='calc(100vh - 56px)'>
      <Text center w='100%' css={css`font-size: 6rem;`}>
        🐿
      </Text>
      <Text kind='h1' center w='100%' d='block'>
        404 <Text regular>Not found</Text>
      </Text>
    </Box>
  </Box>
)

export default NotFound
