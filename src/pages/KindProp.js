import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box} from 'curls'
import {Content, Highlight, NextLink} from '~/ui'
import * as urls from '~/urls'


const KindProp = props => (
  <Content>
    <Helmet>
      <title>kind prop / Curls</title>
      <link rel='canonical' href={urls.kindProp()}/>
      <meta name='description' content={`Learn how to add variants to your React components using style hooks.`}/>
    </Helmet>

    <Text kind='h1' m='b2'>
      <code>kind</code> prop (variants)
    </Text>

    <Text kind='h2' m='b3'>
      Kinds <Text color='secondaryText'>
      (or variants as they are known in some lesser systems that don't value
      short property names)</Text> are another powerful pattern built in to Style Hooks
    </Text>

    <Text kind='p' m='b3'>
      The <code>kind</code> prop allows you to specify groups of default properties in
      your theme for each hook you create. This is a wonderful feature because it means
      you'll be repeating props less often, creating fewer components, and ensuring
      any memoization employed by you or Emotion is reliable.
    </Text>

    <Highlight sandbox='style-hooks-kind-prop-example-jy2e0' h='2480'/>

    <NextLink to={urls.cssProp()}>
      css prop
    </NextLink>
  </Content>
)

export default KindProp
