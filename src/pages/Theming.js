import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink} from '~/ui'
import * as urls from '~/urls'


export const defaultTheme = `
let defaultTheme = {
  breakpoints: {
    // 0px
    phone: 'only screen and (min-width: 0em)',    
    // 560px
    tablet: 'only screen and (min-width: 35em)',  
    // 1280px
    desktop: 'only screen and (min-width: 80em)', 
  },
  // the breakpoints delimeter is configurable :)
  breakpointsDelimiter: ':'
}
`.trim()

export const exampleThemeHook = `
import {useTheme} from '@style-hooks/core'

// Using a global theme
const FunctionalComponent = () => {
  const theme = useTheme()
  return \`My favorite color is \${theme.colors.blue}\`
}

// Using a specific theme, in this example the 
// theme for useText() / <Text>
const FunctionalComponent = () => {
  const textTheme = useTheme('text')
  return (
    <span style={{fontSize: \`\${textTheme.size.sm}rem\`}}>
      Hello, I'm a size small
    </span>
  )
}
`.trim()

export const exampleThemeConsumer = `
import {ThemeConsumer} from '@style-hooks/core'

// Using a global theme
const Component = () => (
  <ThemeConsumer>
    {theme => {/*do stuff*/}}
  </ThemeConsumer>
)

// Using a specific theme, in this example the theme for <Text>
const Component = () => (
  <ThemeConsumer name='text'>
    {textTheme => {
      // This will only provide the theme defined 
      // for theme[name]
    }}
  </ThemeConsumer>
)
`.trim()

export const exampleCssProp = `
/** @jsx jsx */
import {jsx, css} from '@emotion/core'

// Use in plain React components
const Component = () => (
  <span css={
    theme => css\`
      font-size: \${theme.text.size.lg}rem;
      
      @media \${theme.mediaQueries.hiDpi} {
        font-smoothing: antialias;
      }
    \`
  }>
    Hello
  </span>
)

// Use in Style Hooks components
// (Assumes you've created a <Text/> component)
const Component = () => (
  <Text css={
    theme => css\`
      color: \${theme.colors.primary};
      
      @media \${theme.breakpoints.phone} {
        font-size: \${theme.text.size.md}rem;
      }
      
      @media \${theme.breakpoints.desktkop} {
        font-size: \${theme.text.size.lg}rem;
      }
    \`
  }>
    Hello
  </Text>
)
`.trim()

const Theming = props => (
  <Content>
    <Helmet>
      <title>Theming / Style Hooks</title>
      <link rel='canonical' href={urls.theming()}/>
      <meta name='description' content={`Learn implement robust theming with style hooks and Emotion.`}/>
    </Helmet>

    <Text kind='h1'>
      Theming
    </Text>

    <Text kind='h2' m='b3'>
      Robust themes are an optional, but core facet of the Style Hooks design system
    </Text>

    <Text kind='p'>
      Themes are a crucial component to any design system and because Style Hooks was written
      in Emotion, your theme will be available to all of your components through
      the <code>css</code> prop. It will also be usable via React Context. To use theming,
      you must include our <Link to={urls.api('ThemeProvider')}><code>ThemeProvider</code></Link>
      {" "}at the top-level of your app.
    </Text>

    <Text kind='p'>
      That said, you can opt not to use themes. Without them you will not be able to
      utilize <Link to={urls.breakpointProps()}><code>breakpoint</code> props</Link> or
      the <Link to={urls.kindProp()}><code>kind</code> prop</Link>.
    </Text>

    <Highlight h='856' m='b4' sandbox='style-hooks-theme-example-49y6f'/>

    <Text kind='h2'>
      The basics
    </Text>

    <Text kind='p'>
      Every style hook comes with its own key in the theme. This is used for
      determining <Link to={urls.kindProp()}><code>kind</code> props</Link>{' '}
      and <code>defaultProps</code>. Additionally, two theme keys are reserved
      (but configurable) and there by default:
    </Text>

    <Highlight code={defaultTheme} language='javascript' id='default-theme' m='b4'/>

    <Text kind='h2'>
      Using the theme
    </Text>
    <Text kind='p'>
      This section will describe how to use Theme-specific components. To learn how to use it
      in your own custom hooks, <Link to={urls.customHooks()}>see here</Link>.
    </Text>

    <Text kind='h3'>
      Use with the <Link to={urls.hook('useTheme')}><code>useTheme()</code></Link> hook
    </Text>
    <Highlight code={exampleThemeHook} m='b4'/>

    <Text kind='h3'>
      Use with the <Link to={urls.api('ThemeConsumer')}><code>{'<ThemeConsumer>'}</code></Link>
    </Text>
    <Highlight code={exampleThemeConsumer} m='b4'/>

    <Text kind='h3'>
      Use with the <Link to={urls.cssProp()}><code>css</code> prop</Link>
    </Text>
    <Highlight code={exampleCssProp}/>

    <NextLink to={urls.breakpointProps()}>
      Breakpoint props
    </NextLink>
  </Content>
)

export default Theming
