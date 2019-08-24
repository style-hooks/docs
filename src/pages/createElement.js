import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import * as urls from '~/urls'


const asPropExample = `
import {createElement} from '@style-hooks/core'

const MyComponent = props => {
  props = useMyComponent(props)
  return createElement('div', props)
}

// Creates a <div/>
<MyComponent/>
// Creates a <span/>
<MyComponent as='span'/>
// Creates a <OtherComponent/>
<MyComponent as={OtherComponent}/>
`.trim()

const CreateElement = props => (
  <Content>
    <Helmet>
      <title>createElement() / Style Hooks</title>
      <link rel='canonical' href={urls.api('createElement')}/>
      <meta name='description' content={`Add a 'css' and 'as' prop to your React function components.`}/>
    </Helmet>

    <Text kind='apiH1'>
      createElement(<Text size='sm'>type, props, children</Text>)
    </Text>

    <Text kind='p'>
      <code>createElement()</code> is a jsx factory function which does three things:
    </Text>

    <Box as='ol' m='b4'>
      <li>
        Turns
        the <code>css</code> prop generated
        by <Link to={urls.api('useStyles')}><code>useStyles()</code></Link> into a class name
        with attached CSS styles
      </li>
      <li>
        Allows you to define an <code>as</code> prop on your component to override the default
        component <code>type</code> defined in the first argument of the function
      </li>
      <li>
        Create and return a new React element of the given type by
        calling <code>React.createElement(type, props, children)</code>
      </li>
    </Box>

    <Text kind='h2'>
      Arguments
    </Text>

    <Box as='ul'>
      <PropDef name='type' type='string|React.Component' required>
        This is the default type you want to render into the element tree. It can be overridden
        elsewhere by defining an <code>as</code> prop on your component.
        Can be either a tag name string (such as 'div' or 'span'), a React component type
        (a class or a function), or a React fragment type.


        <Highlight code={asPropExample} m='t2'/>
      </PropDef>

      <PropDef name='props' type='object' required>
        The element's props
      </PropDef>

      <PropDef name='children' type='React.Children'>
        The element's children (if not defined in props)
      </PropDef>
    </Box>

    <NextLink to={urls.api('ThemeProvider')}>
      {'<ThemeProvider>'}
    </NextLink>
  </Content>
)

export default CreateElement
