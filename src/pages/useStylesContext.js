import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import * as urls from '~/urls'


export const PropDefs = props => (
  <PropDef name='stylesContext' type='object'>
    <PropDef name='theme' type='object'>
      The current theme as defined in this context hook's nearest provider
    </PropDef>
    <PropDef name='replaceTheme' type='function'>
      Replaces the current theme with the theme you provide as the first argument here
    </PropDef>
    <PropDef name='setTheme' type='function'>
      Deep merges the current theme with the theme you provide as the first argument here
    </PropDef>
  </PropDef>
)

const UseStylesContext = props => (
  <Content>
    <Helmet>
      <title>useStylesContext() / Style Hooks</title>
      <link rel='canonical' href={urls.api('useStylesContext')}/>
      <meta name='description' content={`Learn how to use the useStylesContext() hook for style hooks.`}/>
    </Helmet>

    <Text kind='apiH1'>
      useStylesContext()
    </Text>

    <Text kind='p'>
      A React context hook that provides access to the theme object defined in
      your <Link to={urls.api('ThemeProvider')}>ThemeProvider</Link> in addition to
      two functions for imperatively replacing and merging a new theme in your provider.
    </Text>

    <Text kind='h2'>
      Returns
    </Text>

    <Box as='ul' m='b4'>
      <PropDefs/>
    </Box>

    <Text kind='h2'>
      CodeSandbox example
    </Text>

    <Text kind='p'>
      Below is a complete useStylesContext() hook example
    </Text>

    <Highlight h='1608' m='b4' sandbox='style-hooks-usestylescontext-hook-li8iz'/>
  </Content>
)

export default UseStylesContext
