import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import {defaultTheme} from './Theming'
import * as urls from '~/urls'


const ThemeProvider = props => (
  <Content>
    <Helmet>
      <title>{'<ThemeProvider>'} / Style Hooks</title>
      <link rel='canonical' href={urls.api('ThemeProvider')}/>
      <meta name='description' content={`Learn how to use the <ThemeProvider> component for style hooks.`}/>
    </Helmet>

    <Text kind='apiH1'>
      {'<ThemeProvider>'}
    </Text>

    <Text kind='p'>
      A React component that passes the theme object down the component tree via context.
      Using a <code>{'<ThemeProvider>'}</code> allows you to access your theme
      in <Link to={urls.api('useStyles')}>style hooks</Link>, <Link to={urls.cssProp()}><code>css</code> props</Link>,
      the <Link to={urls.hook('useTheme')}><code>useTheme()</code></Link> hook,
      and <Link to={urls.hook('ThemeConsumer')}><code>{'<ThemeConsumer>'}</code></Link>.
      Check out the <Link to={urls.theming()}>Theming</Link> page for more examples.
    </Text>

    <Text kind='h2'>
      Props
    </Text>

    <Box as='ul' m='b4'>
      <PropDef name='theme' type='object'>
        The theme you'd like your ThemeProvider's ancestors to have access to. The current
        theme will change any time this value changes. The default theme is:
        <Highlight code={defaultTheme} m='t2'/>
      </PropDef>
    </Box>

    <Text kind='h2'>
      CodeSandbox example
    </Text>

    <Text kind='p'>
      Below is a complete ThemeProvider example as it is used with the <code>useStyles()</code> hook
    </Text>

    <Highlight h='960' m='b4' sandbox='style-hooks-theme-example-49y6f'/>

    <NextLink to={urls.api('ThemeConsumer')}>
      {'<ThemeConsumer>'}
    </NextLink>
  </Content>
)

export default ThemeProvider
