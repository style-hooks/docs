import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box} from 'curls'
import {Content, Highlight, NextLink} from '~/ui'
import * as urls from '~/urls'


const defaultTheme = `
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
  breakpointsDelimiter: ':',
}
`.trim()

const breakpointsFn = `
import json2mq from 'json2mq'

const getMediaQuery = bp =>
  isNaN(bp) === false
    ? \`only screen and (min-width: \${bp}px)\`
    : typeof bp === 'string'
      ? bp
      : json2mq(bp)
`.trim()

const usingBreakpointsExample = `
{/* 
  Adds a default background of 'orchid'
  'skyblue' for tablets
  'hotpink' for desktop
*/}
<Box bg='orchid skyblue:tablet hotpink:desktop'/>
{/* 
  You can also group values in breakpoints
  
  This adds padding '12px 16px' for phones
  and '24px 32px' for desktop
*/}
<Box padding='[12px 16px]:phone [24px 32px]:desktop'/>
`.trim()

const exampleCustomBreakpoints = `
let theme = {
  // !! REMEMBER !!
  // The order matters here
  // Media queries will be parsed by prop values in this order
  breakpoints: {
    // only screen and (min-width: 0px)
    // use @mobile in your props to use it
    mobile: 0,    
    
    // use @large-mobile in your props to use it
    [\`large-mobile\`]: 'only screen and (min-width: 40em)',  
    
    // screen and (min-width: 100px), handheld and (orientation: landscape)
    // use @complexExample in your props to use it
    complexExample: [
      {screen: true, minWidth: 100}, 
      {handheld: true, orientation: 'landscape'}
    ], 
  },
  // the breakpoints delimeter is configurable :)
  breakpointsDelimiter: '@',
}
`.trim()


const exampleCustomDelimiter = `
import React from 'react'
import {ThemeProvider} from '@style-hooks/core'

// perhaps you think a \`@\` delimiter would look 
// more descriptive :)
let theme = {
  breakpointsDelimiter: '@',
}

const App = () => (
  <ThemeProvider theme={theme}>
    {/* Assumes you have a <Box> component*/}
    <Box p='3@phone 4@tablet'/>
  </ThemeProvider>
)
`.trim()

const BreakpointProps = props => (
  <Content>
    <Helmet>
      <title>Breakpoint props / Style Hooks</title>
      <link rel='canonical' href={urls.breakpointProps()}/>
      <meta name='description' content={`Seamlessly add media queries and breakpoints to your component style props.`}/>
    </Helmet>

    <Text kind='h1'>
      Breakpoint props
    </Text>

    <Text kind='h2' m='b3'>
      Seamlessly add media queries and breakpoints to your component props
    </Text>

    <Text kind='p'>
      One of the coolest features of Style Hooks is the ability to conditionally add
      property values based upon predefined breakpoints.
    </Text>

    <Highlight sandbox='style-hooks-breakpoint-props-up7cv' m='b4' h='640'/>

    <Text kind='p'>
      Breakpoints are defined and named inside of your theme. The default theme values
      are below:
    </Text>

    <Highlight
      code={defaultTheme}
      language='javascript'
      disableLineNumbers
      m='b4'
    />

    <Text kind='h2'>
      Using breakpoint props
    </Text>

    <Text as='p'>
      Breakpoint props are easy to use. You can add default values and group values together.
      The order you define them in doesn't matter because Style Hooks uses the order from your
      theme when constructing them.
    </Text>

    <Highlight code={usingBreakpointsExample} disableLineNumbers m='b4'/>

    <Text kind='h2'>
      Customizing breakpoints
    </Text>

    <Text kind='p'>
      Creating your own breakpoints is easy. Just remember that media queries will be
      written in the order by which you define your breakpoints in the theme.
      The key used in the breakpoint definition becomes the value you use after
      the delimiter inside your props.
    </Text>

    <Text kind='h3'>
      Breakpoints are parsed in the following way
    </Text>

    <Box as='ol' m='b3'>
      <li>
        When your breakpoint value is a <code>number</code>, it will be transformed into<br/>
        <code>only screen and (min-width: {'${breakpoint}px'})</code>
      </li>
      <li>
        When your breakpoint value is a <code>string</code>, it will be use as-is
      </li>
      <li>
        When your breakpoint value is an <code>object</code>, the
        library <Text kind='a' href='https://github.com/akiran/json2mq'>
        <code>json2mq</code>
      </Text> is used to create your media query
      </li>
    </Box>

    <Text kind='p'>
      The function used in creating your breakpoint media queries is below:
    </Text>

    <Highlight
      code={breakpointsFn}
      language='javascript'
      disableLineNumbers
      m='b4'
    />

    <Text kind='h3'>
      Custom breakpoint examples
    </Text>

    <Highlight
      code={exampleCustomBreakpoints}
      language='javascript'
      disableLineNumbers
      m='b4'
    />

    <Text kind='h2'>
      Changing the default delimeter
    </Text>

    <Text kind='p'>
      I wouldn't blame you for disliking the <code>:</code> delimiter. As luck would have it,
      you can change the delimiter in your theme. Here's an example:
    </Text>

    <Highlight code={exampleCustomDelimiter} disableLineNumbers/>

    <NextLink to={urls.kindProp()}>
      kind prop
    </NextLink>
  </Content>
)

export default BreakpointProps
