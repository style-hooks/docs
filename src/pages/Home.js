import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, EmotionLink} from '~/ui'
import * as urls from '~/urls'


const exampleCode = `
/** @jsx jsx */
import React from 'react'
import ReactDOM from 'react-dom'
import {css, jsx} from '@emotion/core'
import {createStyleHook, createElement, ThemeProvider} from '@style-hooks/core'

// Your very own style hook
const useBox = createStyleHook('box', {
  w: (value, theme, props) => css\`
    width: \${value + theme.box.sizeUnit};
  \`
})
// Accompanying component w/ style props using
// your style hook
const Box = props => {
  props = useBox(props)
  // createElement here provides this component
  // an 'as' prop
  return createElement('div', props)
}
// The theme for your app
const theme = {box: {sizeUnit: 'px'}}
// Usage w/ theme
const App = () => (
  <ThemeProvider theme={theme}>
    {/* 
      Shows off the 'as' prop, 
      followed by 'breakpoint props',
      followed by the 'css' prop
    */}
    <Box
      as="main"
      w="200:phone 300:tablet"
      css={theme => css\`
        @media \${theme.breakpoints.phone} {
          height: 200px;
          background-color: hotpink;
        }

        @media \${theme.breakpoints.tablet} {
          height: 300px;
          background-color: skyblue;
        }
      \`}
    >
      Hello world from this {'<main>'}. Resize the screen to change my color.
    </Box>
  </ThemeProvider>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
`.trim()

const Home = props => (
  <Content>
    <Helmet>
      <title>Style Hooks / A CSS-in-JS style system using React Hooks</title>
      <link rel='canonical' href={urls.home()}/>
      <meta name='description'
            content={`Turn your React function components into responsive components with style props using Style Hooks and Emotion.`}/>
    </Helmet>

    <Box kind='blurb'>
      <Text kind='h1' center=':phone' left=':tablet'>
        Style hooks
      </Text>

      <Text kind='h2' center=':phone' left=':tablet'>
        Turn your React function components into responsive components with style props
        using Style Hooks and <EmotionLink/>
      </Text>

      <Text kind='p' center=':phone' left=':tablet'>
        Use style hooks to seamlessly add <Link to={urls.theming()}>themes</Link>,
        CSS-in-JS styles, <Link to={urls.kindProp()}>variants</Link>,{' '}
        <Link to={urls.breakpointProps()}>breakpoint props</Link>,
        a <Link to={urls.cssProp()}><code>css</code> prop</Link>, and
        an <Link to={urls.api('createElement')}><code>as</code> prop</Link> to any
        React function component.
      </Text>

      <Text kind='p' m='b4' center=':phone' left=':tablet'>
        If you're feeling frisky, supercharge your style hooks
        with <Link to={urls.styled()}>@style-hooks/styled</Link> to
        add a <code>styled-components</code>-like API to the mix.
      </Text>


      <Highlight
        code={`npm i @style-hooks/core @emotion/core`}
        language='shell'
        sandboxLink='style-hooks-basic-example-t20yi'
        br='t3'
        bw='1 b0'
      />
      <Highlight code={exampleCode} br='b3'/>
    </Box>

    <Text kind='h2' m='b3'>
      Install it
    </Text>
    <Box flex row wrap>
      <Box basis='100%:phone 50%:desktop' p='r4:desktop'>
        <Text kind='h3'>
          npm
        </Text>
        <Text kind='p'>
          <code>npm i @style-hooks/core @emotion/core</code>
        </Text>
      </Box>

      <Box basis='100%:phone 50%:desktop' p='l4:desktop'>
        <Text kind='h3'>
          yarn
        </Text>
        <Text kind='p' m='b4'>
          <code>yarn add @style-hooks/core @emotion/core</code>
        </Text>
      </Box>
    </Box>
    <Box flex row wrap>
      <Box basis='50%:desktop' p='r4:desktop'>
        <Text kind='h2'>
          Getting the most out of Style Hooks
        </Text>
        <Text kind='p' m='b4'>
          Style hooks are an incredibly powerful pattern as noted above. I highly recommend
          that you utilize them by creating component primitives for things
          like <code>{'<Box>'}</code>, <code>{'<Text>'}</code>, <code>{'<Grid>'}</code>, et.
          al.
          I also highly recommend you embrace the <Link
          to={urls.kindProp()}><code>kind</code> prop</Link> as
          often as possible to maximize any memoization and deduplication opportunities.
          For example, this documentation site uses them for
          creating <code>h1</code>, <code>p</code>,{' '}
          <code>a</code>, and numerous other variants in
          its <code>{'<Text>'}</code> component.
        </Text>
      </Box>
      <Box basis='50%:desktop' p='l4:desktop'>
        <Text kind='h2'>
          Big functionality in a <Text kind='a'
                                       href='https://bundlephobia.com/result?p=@style-hooks/core'>small
          package</Text>
        </Text>
        <Text kind='p'>
          By using <Text kind='a' href='https://npmjs.org/package/@style-hooks/core'>style
          hooks</Text> you're
          getting a ton of functionality for less than <code>3kb</code> gzipped. You'd be hard
          pressed
          to find another library which provides all of the same features in such a small
          package.
        </Text>
        <Text kind='p' m='b4'>
          Adding <Link to={urls.styled()}>@style-hooks/styled</Link> to the mix only adds
          an additional <Text kind='a'
                              href='https://bundlephobia.com/result?p=@style-hooks/styled'><code>3kb</code></Text>.
        </Text>
      </Box>
    </Box>

    <NextLink to={urls.theming()}>
      Theming
    </NextLink>
  </Content>
)

export default Home
