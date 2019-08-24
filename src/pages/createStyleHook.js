import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import * as urls from '~/urls'

const createStyleHookExample = `
// Using our shortcut
import {css} from '@emotion/core'
import {createStyleHook} from '@style-hooks/core'

const useBox = createStyleHook('box', {
  w: value => css\`width: \${value}px;\`
})

// The above is the same as:
import {css} from '@emotion/core'
import {useStyles} from '@style-hooks/core'

const useBox = props => useStyles(
  'box', 
  {
    w: value => css\`width: \${value}px;\`
  }, 
  props
)
`.trim()

const UseStyles = props => (
  <Content>
    <Helmet>
      <title>createStyleHook() / Style Hooks</title>
      <link rel='canonical' href={urls.api('createStyleHook')}/>
      <meta name='description' content={`Learn how to use the createStyleHook() function for creating style hooks.`}/>
    </Helmet>

    <Text kind='apiH1'>
      createStyleHook(<Text size='sm'>name, styles</Text>)
    </Text>

    <Text kind='p'>
      <code>createStyleHook()</code> is a shortcut for creating a style hook
      with <Link to={urls.api('useStyles')}><code>useStyles()</code></Link>
    </Text>

    <Text kind='h2'>
      Arguments
    </Text>

    <Box as='ul' m='b4'>
      <PropDef name='name' type='string' required>
        This is the key name you'll use for this hook when configuring it in your
        theme. As such, it should be unique. Names are important because they allow your
        hook to use powerful features like
        the <Link to={urls.kindProp()}><code>kind</code> prop</Link> and{' '}
        <code>defaultProps</code> in your theme. They also provide organization to your theme
        allowing you to provide a name argument
        to <Link to={urls.api('useTheme')}><code>useTheme('name')</code></Link>.
      </PropDef>
      <PropDef name='styles' type='object' required>
        This is the object that defines your component's style props. The key names of this
        object become prop names in your component and the value handles the creation of style
        definitions. See <Text kind='a' href={`${urls.api('useStyles')}#creating-style-props`}>creating style props</Text> on
        the <code>useStyles</code> page learn the numerous ways you can generate styles.
      </PropDef>
    </Box>

    <Text kind='h2' id='creating-style-props'>
      Example
    </Text>

    <Highlight code={createStyleHookExample} m='b3'/>

    <NextLink to={urls.api('useStyles')}>
      useStyles()
    </NextLink>
  </Content>
)

export default UseStyles
