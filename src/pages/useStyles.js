import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import * as urls from '~/urls'
import {
  exampleProps,
  exampleBooleanProp,
  exampleEnumProp,
  functionalStylePropSignature,
  exampleFunctionalProp,
} from './CreateAStyleHook'


const UseStyles = props => (
  <Content>
    <Helmet>
      <title>useStyles() / Style Hooks</title>
      <link rel='canonical' href={urls.api('useStyles')}/>
      <meta name='description' content={`Learn how to use the useStyles() hook for style hooks.`}/>
    </Helmet>

    <Text kind='apiH1'>
      useStyles(<Text size='sm'>name, styles, props</Text>)
    </Text>

    <Text kind='p'>
      <code>useStyles()</code> is a composable React hook that generates CSS styles based on
      your component's input props. For a deep dive into creating a style hook from scratch,
      check out the <Link to={urls.customHooks()}>Create a Style Hook</Link> tutorial.
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
        definitions. See <Text kind='a' href='#creating-style-props'>creating style props</Text> below
        to learn the numerous ways you can generate styles.
      </PropDef>
      <PropDef name='props' type='object' required>
        <code>props</code> allude to, as you'd guess,
        the <code>props</code> object provided to an element when it is created
        with <code>React.createElement()</code>. But it can be any plain object you want to
        derive styles from. <code>useStyles()</code> is an immutable
        function. That is, the input <code>props</code> are cloned and the return value is a
        new object containing a <code>css</code> prop with your generated styles. It will also
        remove any keys from the input props that generated styles.<br/><br/>For example,
        let's say your component has a boolean style prop for <code>hidden</code> which provides
        a <code>display: none;</code> style:
        <Highlight code={exampleProps} m='y2'/>
      </PropDef>
    </Box>

    <Text kind='h2' id='creating-style-props'>
      Creating style props
    </Text>

    <Text kind='p'>
      There are three ways to create style props in a <code>useStyles()</code> hook
    </Text>

    <Box as='ol' m='b4'>
      <li>
        <Text kind='h3'>Creating a boolean style prop</Text>
        <Text kind='p'>
          This is the most basic type of style prop you can create. To use it,
          create a key in your <code>styles</code> object that has an
          Emotion <code>css</code> object as its value.
        </Text>

        <Highlight code={exampleBooleanProp} m='b3'/>
      </li>
      <li>
        <Text kind='h3'>Creating an enum style prop</Text>
        <Text kind='p'>
          To construct an enum style prop just use the same pattern we used
          for a boolean prop, but as part of a nested object.
        </Text>

        <Highlight code={exampleEnumProp} m='b3'/>
      </li>
      <li>
        <Text kind='h3'>Creating a functional style prop</Text>
        <Text kind='p'>
          The true magic begins when you create functional style props. Here we can customize
          our styles based on the component theme and props passed to the <code>useStyles()</code> hook.
          Return an Emotion <code>css</code> object to add styles,
          or <code>null</code>/<code>undefined</code> to skip adding styles.
        </Text>

        <Text kind='p'>
          <b>Here is the function signature</b>
          <Highlight code={functionalStylePropSignature} m='t1'/>
        </Text>

        <Box as='ul'>
          <PropDef name='value' type='any'>
            The value provided to the style prop in <code>React.createElement()</code>.
          </PropDef>
          <PropDef name='theme' type='object'>
            The theme as defined in <Link to={urls.api('ThemeProvider')}><code>ThemeProvider</code></Link>.
          </PropDef>
          <PropDef name='props' type='object'>
            Other props that were passed to our <code>useStyles()</code> hook.
          </PropDef>
        </Box>

        <Highlight code={exampleFunctionalProp}/>
      </li>
    </Box>

    <Text kind='h2'>
      Example <code>useBox()</code> hook
    </Text>

    <Text kind='p'>
      Below is an example hook from the <Link to={urls.customHooks()}>Create a Style Hook</Link> tutorial.
    </Text>

    <Highlight sandbox='style-hooks-creating-a-style-hook-from-scratch-q1lmy' m='b4' h='2372'/>

    <NextLink to={urls.api('createElement')}>
      createElement()
    </NextLink>
  </Content>
)

export default UseStyles
