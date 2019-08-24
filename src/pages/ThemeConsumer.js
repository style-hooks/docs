import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import {exampleThemeConsumer} from './Theming'
import * as urls from '~/urls'


const ThemeConsumer = props => (
  <Content>
    <Helmet>
      <title>{'<ThemeConsumer>'} / Style Hooks</title>
      <link rel='canonical' href={urls.api('ThemeConsumer')}/>
      <meta name='description' content={`Learn how to use the <ThemeConsumer> component for style hooks.`}/>
    </Helmet>

    <Text kind='apiH1'>
      {'<ThemeConsumer>'}
    </Text>

    <Text kind='p'>
      A React component that provides access to the theme object defined in
      your <Link to={urls.api('ThemeProvider')}>ThemeProvider</Link>.
    </Text>

    <Text kind='h2'>
      Props
    </Text>

    <Box as='ul' m='b4'>
      <PropDef name='name' type='string'>
        An optional prop for consuming only the key in the theme that matches this string
        <Highlight code={exampleThemeConsumer} m='t2'/>
      </PropDef>
    </Box>

    <Text kind='h2'>
      CodeSandbox example
    </Text>

    <Text kind='p'>
      Below is a complete ThemeConsumer example
    </Text>

    <Highlight h='872' m='b4' sandbox='style-hooks-themeconsumer-example-w4501'/>

    <NextLink to={urls.api('useTheme')}>
      {'useTheme()'}
    </NextLink>
  </Content>
)

export default ThemeConsumer
