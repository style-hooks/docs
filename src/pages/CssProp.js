import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box} from 'curls'
import {Content, Highlight, NextLink, EmotionLink} from '~/ui'
import {exampleCssProp} from './Theming'
import * as urls from '~/urls'


export const exampleCssProp2 = `
/** @jsx jsx */
import {jsx, css} from '@emotion/core'

// Use in plain React components
const Component = () => (
  <span css={css\`user-select: none;\`}>
    Hello
  </span>
)
`.trim()

export const exampleCssProp3 = `
/** @jsx jsx */
import {jsx} from '@emotion/core'

// Use in plain React components
const Component = () => (
  <span css={{userSelect: 'none'}}>
    Hello
  </span>
)
`.trim()

export const exampleCssProp4 = `
/** @jsx jsx */
import {jsx} from '@emotion/core'
import {someStyleA, someStyleB, someStyleC} from './styles'

// Use in plain React components
const Component = () => (
  <span css={[someStyleA, someStyleB, someStyleC]}>
    Hello
  </span>
)
`.trim()

const CssProp = props => (
  <Content>
    <Helmet>
      <title>css prop / Style Hooks</title>
      <link rel='canonical' href={urls.cssProp()}/>
      <meta name='description' content={`Learn how to use 'css' props in your React components using style hooks.`}/>
    </Helmet>

    <Text kind='h1' m='b2'>
      <code>css</code> prop
    </Text>

    <Text kind='h2' m='b3'>
      Because style hooks are written with <EmotionLink/> all of your components get to use
      its powerful <code>css</code> prop
    </Text>

    <Text kind='p'>
      While an incredibly cool feature, there is a little bit of configuration required
      in order to get it working properly. <Text kind='a' href='https://emotion.sh/docs/css-prop'>
      See Emotion's documentation on the <code>css</code> prop
    </Text> for detailed instructions about how to get it up and running.
    </Text>

    <Text kind='p'>
      If you opt not to use the <code>css</code> prop you can skip the above configuration.
      It is not a pre-requisite for using <code>@style-hooks</code>.
    </Text>

    <Text kind='p' m='b4'>
      Once configured, a bunch of cool patterns emerge.
    </Text>

    <Text kind='h2'>
      1. You get access to your Style Hooks theme
    </Text>
    <Highlight code={exampleCssProp} m='b4'/>

    <Text kind='h2'>
      2. You can quickly add styles to your component using
      a <code>css</code> template literal
    </Text>
    <Highlight code={exampleCssProp2} m='b4'/>

    <Text kind='h2'>
      3. Or if you like, an object without worrying about
      importing <code>css</code> from <code>@emotion/core</code>
    </Text>
    <Highlight code={exampleCssProp3} m='b4'/>

    <Text kind='h2'>
      4. Use an array to add several styles
    </Text>
    <Highlight code={exampleCssProp4}/>

    <NextLink to={urls.customHooks()}>
      Create a Style Hook
    </NextLink>
  </Content>
)

export default CssProp
