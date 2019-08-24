import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import {exampleThemeHook} from './Theming'
import * as urls from '~/urls'


const UseTheme = props => (
  <Content>
    <Helmet>
      <title>useTheme() / Style Hooks</title>
      <link rel='canonical' href={urls.api('useTheme')}/>
      <meta name='description' content={`Learn how to use the useTheme() hook for style hooks.`}/>
    </Helmet>

    <Text kind='apiH1'>
      useTheme(<Text size='sm'>name</Text>)
    </Text>

    <Text kind='p'>
      A React context hook that provides access to the theme object defined in
      your <Link to={urls.api('ThemeProvider')}>ThemeProvider</Link>.
    </Text>

    <Text kind='h2'>
      Arguments
    </Text>

    <Box as='ul' m='b4'>
      <PropDef name='name' type='string'>
        An optional prop for consuming only the key in the theme that matches this string
        <Highlight code={exampleThemeHook} m='t2'/>
      </PropDef>
    </Box>

    <Text kind='h2'>
      CodeSandbox example
    </Text>

    <Text kind='p'>
      Below is a complete useTheme() hook example
    </Text>

    <Highlight h='880' m='b4' sandbox='style-hooks-usetheme-hook-pw3oe'/>

    <NextLink to={urls.api('StylesConsumer')}>
      {'<StylesConsumer>'}
    </NextLink>
  </Content>
)

export default UseTheme
