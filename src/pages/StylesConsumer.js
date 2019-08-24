import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import * as urls from '~/urls'
import {PropDefs} from './useStylesContext'


const StylesConsumer = props => (
  <Content>
    <Helmet>
      <title>{'<StylesConsumer>'} / Style Hooks</title>
      <link rel='canonical' href={urls.api('StylesConsumer')}/>
      <meta name='description' content={`Learn how to use the <StylesConsumer> component for style hooks.`}/>
    </Helmet>

    <Text kind='apiH1'>
      {'<StylesConsumer>'}
    </Text>

    <Text kind='p'>
      A React context consumer that provides access to the theme object defined in
      your <Link to={urls.api('ThemeProvider')}>ThemeProvider</Link> in addition to
      two functions for imperatively replacing and merging a new theme in your provider.
    </Text>

    <Text kind='h2'>
      Render props
    </Text>

    <Box as='ul' m='b4'>
      <PropDefs/>
    </Box>

    <Text kind='h2'>
      CodeSandbox example
    </Text>

    <Text kind='p'>
      Below is a complete {'<StylesConsumer>'} example
    </Text>

    <Highlight h='1720' m='b4' sandbox='style-hooks-stylesconsumer-example-nh70e'/>

    <NextLink to={urls.api('useStylesContext')}>
      useStylesContext()
    </NextLink>
  </Content>
)

export default StylesConsumer
