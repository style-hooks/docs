import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import * as urls from '~/urls'


const boxExample = `
import {css} from '@emotion/core'
import {useStyles} from '@style-hooks/core'

const 
  styles = {width: value => css\`width: \${value}\`},
  useBox = props => useStyles('box', styles, props)
`.trim()

const exampleDefaultStyles = `
import {css} from '@emotion/core'
import {useStyles} from '@style-hooks/core'

const useRow = (props) => {
  props = useStyles('row', {}, props)
  props.css = [
    css\`
      display: flex;
      flex-direction: row;
    \`,
    ...props.css || []
  ]
  return props
}
  
`.trim()

export const exampleProps = `
// Given the input props
{hidden: true, foo: 'bar'}

// Expect the output props
{
  foo: 'bar', 
  css: [{
    name: "1ecy55y", 
    styles: "display: none;"
  }]
}
`.trim()

export const exampleBooleanProp = `
import {css} from '@emotion/core'
// style definitions
const styles = {
  // this creates a \`boolean\` prop for \`hidden\`
  hidden: css\`display: none;\`
}
// ... add your hook MyComponent ... //
<MyComponent hidden/>
// Here, the prop \`hidden\` becomes
// {css: [{name: '...', styles: 'display: none;'}]}
`.trim()

export const exampleEnumProp = `
import {css} from '@emotion/core'
// style definitions
const styles = {
  // this creates an \`enum\` prop for \`display\`
  // with the choices 'none', 'block', and 'flex'
  display: {
    none: css\`display: none;\`,
    block: css\`display: block;\`,
    flex: css\`display: flex;\`,
  }
}
// ... add your hook MyComponent ... //
<MyComponent display='block'/>
// Here, the prop \`display\` becomes
// {css: [{name: '...', styles: 'display: block;'}]}
`.trim()

export const functionalStylePropSignature = `
(value: <any>, theme: <object>, props: <object>): <css|void>
`.trim()

export const exampleFunctionalProp = `
import {css} from '@emotion/core'
// fake default theme
const theme = {
  box: {
    sizes: {
      sm: 16,
      md: 32,
      lg: 64
    }
  }
}
// style definitions
const styles = {
  // this creates a \`functional\` prop for \`size\`
  size: (value, theme, props) => {
    const px = theme.box.sizes[value]
    // in reality you'd throw an error, but for this example
    // we just skip the prop
    if (px === undefined)
      return
      
    return css\`
      width: \${px}px;
      height: \${px}px;
    \`
  }
}
// ... add your hook MyComponent ... //
<MyComponent size='md'/>
// Here, the prop \`size\` becomes
// {css: [{name: '...', styles: 'width: 32px; height: 32px;'}]}
`.trim()

const exampleHookComposition = `
import {css, createStyleHook, createElement} from '@style-hooks/core'
// here is your hook
const useMyHook = createStyleHook('myComponent', {foo: css\`bar: baz;\`})
// here is a component composing multiple hooks
const MyComponent = React.forwardRef((props, ref) => {
  // Here is the composition
  props = useBox(useMyHook(props))
  props.ref = ref
  return createElement('div', props)
})

export {MyComponent, useMyComponent}

// Now you can use <MyComponent/> with the 
// Box model in addition to your custom styles
<MyComponent foo d='block'/>
// {
//    css: [
//      {name: '...', styles: 'bar: baz;'}, 
//      {name: '...', styles: 'display: block;'}
//    ]
// }
`.trim()

const exampleBasicConfig = `
import React from 'react'
import {css} from '@emotion/core'
import {useStyles} from '@style-hooks/core'

const useBox = props => useStyles(
  // This is the name in our theme
  'box'
)
`.trim()

const exampleStylesConfig = `
import React from 'react'
import {css} from '@emotion/core'
import {useStyles} from '@style-hooks/core'

const useBox = props => useStyles(
  // This is the name in our theme
  'box',
  // These are our style prop definitions
  {
    // Adds a boolean prop
    block: css\`display: block;\`,
    // Adds an enum prop
    overflow: {
      hidden: css\`overflow: hidden;\`,
      hiddenX: css\`overflow-x: hidden;\`,
      hiddenY: css\`overflow-y: hidden;\`,
      auto: css\`overflow: auto;\`,
      autoY: css\`overflow-y: auto;\`,
      autoX: css\`overflow-x: auto;\`
    },
    // Adds functional props
    bg: value =>
      css\`background-color: \${value};\`,
    width: (value, theme) => 
      css\`width: \${value + theme.sizeUnit};\`,
    height: (value, theme) => 
      css\`height: \${value + theme.sizeUnit};\`,
  },
  // consumes the props received by your component
  props
)
`.trim()

const exampleTheme = `
const theme = {
  // assumes you've made a useText() hook w/ the
  // name: 'text'
  text: {
    // default props prepended to the props object
    // received by useStyles()
    defaultProps: {
      size: 'sm'
    },
    // groups of other default props applied when
    // using kind='' props
    kinds: {
      h1: {
        as: 'h1',
        size: 'lg',
      }
    }
  }
}
`.trim()

const exampleDefaultThemeConfig = `
// Here's our theme where we specify a 
// size unit, default props, and kinds for 
// this box component
const theme = {
  sizeUnit: 'px',
  box: {
    defaultProps: {
      bg: 'hotpink',
      width: 50,
      height: 50
    },
    kinds: {
      small: {
        bg: 'blue',
        width: '100:phone 250:desktop',
        height: '100:phone 250:desktop'
      },
      big: {
        bg: 'green',
        width: '300:phone 500:desktop',
        height: '300:phone 500:desktop'
      }
    }
  }
}
`.trim()

const exampleComponent = `
const Box = React.forwardRef((props, ref) => {
  // The style hook will generate a css prop and 
  // remove prop keys that generated styles in 
  // useBox()
  props = useBox(props)
  // props are mutable here because the props returned
  // by useBox() are always cloned from the input
  // props
  //
  // using 'ref' here with React.forwardRef allows 
  // our <Box> component to accept a 'ref' prop
  props.ref = ref
  // Here we're telling createElement we want the default element
  // type to be a 'div'. This can be overwritten using
  // an 'as' prop
  return createElement('div', props)
})
`.trim()

const exampleUsage = `
import React from 'react'
import {Box, useBox} from './Box'

<Box as='span' block overflow='hidden' width='30'>
  Hello world
</Box> 
// jsx(
//   'span',
//   {
//     css: [
//       {
//         name: "...", 
//         styles: "display: flex;"
//       },
//       {
//         name: "...", 
//         styles: "display: block;"
//       },
//       {
//         name: "...", 
//         styles: "overflow: hidden;"
//       },
//       {
//         name: "...", 
//         styles: "width: 30px;"
//       }
//     ]
//   },
//   'Hello world'
// )


// You can use your hook in any React function
// component
const OtherBox = props => {
  props = useBox(props)
  return <SomethingElse {...props}/>
}
`.trim()

const CustomComponents = props => (
  <Content>
    <Helmet>
      <title>Create your first style hook / Style Hooks</title>
      <link rel='canonical' href={urls.customHooks()}/>
      <meta name='description' content={`Learn how to create style hooks with useStyles() in this tutorial.`}/>
    </Helmet>

    <Text kind='h1'>
      Create a style hook
    </Text>

    <Text kind='h2' m='b3'>
      In this tutorial we'll go through the process of creating
      a <Link to={urls.api('useStyles')}>style hook</Link> from scratch
    </Text>

    <Highlight code={boxExample} m='b4'/>

    <Text kind='h2'>
      1. Understanding <Link to={urls.api('useStyles')}>useStyles(name, styles, props)</Link>
    </Text>

    <Text kind='p'>
      The <code>useStyles()</code> hook takes three arguments, <code>name</code>, <code>styles</code>,
      and <code>props</code>. It returns a copy of <code>props</code> without any props that
      were consumed by the hook.
    </Text>

    <Box as='ul' m='b3'>
      <PropDef name='name' type='string' required>
        This is the key name you'll use for this hook when configuring it in your
        theme. As such, it should be unique. Names are important because they allow your
        hook to use powerful features like
        the <Link to={urls.kindProp()}><code>kind</code> prop</Link> and
        <code>defaultProps</code> in your theme. They also provide organization to your theme
        allowing you to provide a name argument
        to <Link to={urls.api('useTheme')}>useTheme('name')</Link>.
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
        remove any keys from the input props that generated styles. For example,
        let's say your component has a boolean style prop for <code>hidden</code> which provides
        a <code>display: none;</code> style:
        <Highlight code={exampleProps} m='y2'/>
      </PropDef>
    </Box>

    <Text kind='h2' id='creating-style-props'>
      2. Creating style props
    </Text>

    <Text kind='p'>
      There are three ways to create style props in a <code>useStyles()</code> hook
    </Text>

    <Box as='ol' m='b4'>
      <li>
        <Text kind='h3'>Creating a boolean style prop</Text>
        <Text kind='p'>
          This is the most basic type of style prop you can create. To use it,
          create a key in your <code>styles</code> object with an
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

    <Text kind='p'>
      Another important thing to remember when constructing your style props is that
      <code>useStyles</code> will handle all of
      the <Link to={urls.breakpointProps()}>breakpoint props</Link> on
      its own. You will never receive the breakpoint as part of your value. You will only
      receive the portion in front of the delimiter.
    </Text>

    <Text kind='p' m='b4'>
      See <Text kind='a' bold href='https://github.com/jaredLunde/curls/blob/master/src/Box/styles.js'>
      here
    </Text> for a plethora of examples in the Curls <code>{"<Box>"}</code> component
    </Text>

    <Text kind='h2' id='theme-anatomy'>
      3. Understanding the relationship between themes and hooks
    </Text>

    <Text kind='p'>
      Effectively, you can put anything you want to in your <code>theme</code>.
      The values in your <code>theme</code> are provided to your functional style
      props and accessible via <Link to={urls.api('useTheme')}><code>useTheme()</code></Link>.
      There are, however, two special keys that Style Hooks uses in the <code>useStyles()</code> hook
      for a given hook name:
    </Text>
    <Highlight code={exampleTheme} m='b4'/>

    <Box as='ul' m='b3'>
      <PropDef name='defaultProps' type='object'>
        These style props are provided to every component of this type by default. As the
        name implies, they work just like React default props and can be overwritten by
        the user.
      </PropDef>
      <PropDef name='kinds' type='object'>
        These are basically an extension to <code>defaultProps</code>, but in the form
        of variants. See the <Link to={urls.kindProp()}>kind prop</Link> section.
      </PropDef>
    </Box>

    <Text kind='h2'>
      4. Composing style hooks
    </Text>

    <Text kind='p'>
      Another cool feature of style hooks is that they are composable.
      For example, say you want all of your components to inherit style props
      from a <code>{'useBox()'}</code> hook providing access to margins, padding, and other
      props from the box model. You could do the following:
    </Text>

    <Highlight code={exampleHookComposition} m='b4'/>

    <Text kind='h2'>
      5. Adding default styles to a hook
    </Text>

    <Text kind='p'>
      Sometimes you may want to add styles to a hook by default. Below is an example
      of how you may approach the task:
    </Text>

    <Highlight code={exampleDefaultStyles} m='b4'/>

    <Text kind='h2'>
      Next let's build a real style hook from start to finish
    </Text>

    <Text kind='p'>
      In this example, we are going to write our own <code>{"useBox()"}</code> hook
    </Text>

    <Box as='ol'>
      <li>
        <Text kind='h3'>
          Name your component so its configurable in the theme.
        </Text>
        <Highlight code={exampleBasicConfig} m='b3'/>
      </li>
      <li>
        <Text kind='h3'>
          Next we add our style props. We only want our box to handle overflow, width, height,
          background color, and a <code>display: block;</code> boolean
        </Text>
        <Highlight code={exampleStylesConfig} m='b3'/>
      </li>
      <li>
        <Text kind='h3'>
          Create a <code>{'<Box>'}</code> using our <code>useBox()</code> hook
        </Text>
        <Highlight code={exampleComponent} m='b3'/>
      </li>
      <li>
        <Text kind='h3'>
          Finally, since we referenced a <code>sizeUnit</code> in our functional style props
          for <code>width</code> and <code>height</code> above, let's put a size unit in
          our theme. While we're add it, we'll add some <code>defaultProps</code> and{' '}
          <Link to={urls.kindProp()}><code>kind</code></Link> props.
        </Text>
        <Highlight code={exampleDefaultThemeConfig} m='b3'/>
      </li>
      <li>
        <Text kind='h3'>
          Now the fun part, let's use our <code>useBox()</code> hook
          and <code>{'<Box>'}</code> component
        </Text>
        <Highlight sandbox='style-hooks-creating-a-style-hook-from-scratch-q1lmy' m='b4' h='2372'/>
      </li>
    </Box>

    <Text kind='p'>
      That's all I've got for this tutorial! Let me know what you think and
      feel free to ask me any questions to have
      on Twitter <Text as='a' href='https://twitter.com/jaredLunde'>@jaredlunde</Text>.
    </Text>

    <NextLink to={urls.styled()}>
      Styled components
    </NextLink>
  </Content>
)

export default CustomComponents
