import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box} from 'curls'
import {Content, Highlight, EmotionLink, NextLink} from '~/ui'
import * as urls from '~/urls'


const exampleNothing = `
// See? Nothing of use on this page. 
// You already know what you need to know.
const noop = () => {}
`.trim()

const CustomComponents = props => (
  <Content>
    <Helmet>
      <title>Server side Rendering / Style Hooks</title>
      <link rel='canonical' href={urls.ssr()}/>
      <meta name='description' content={`Learn how to render React style hooks on the server.`}/>
    </Helmet>

    <Text kind='h1'>
      Server side rendering
    </Text>

    <Text kind='h2' m='b3'>
      Server side rendering works out-of-the-box thanks to <EmotionLink/>
    </Text>

    <Text kind='p'>
      To illustrate just how little you need to do to get working, I will continue to fill
      up space on this page with nonsense sentences. You could stop reading right now and
      miss out on no info. Or you could continue reading - life's full of choices.
    </Text>

    <Highlight code={exampleNothing}/>

    <NextLink to={urls.api('createStyleHook')}>
      {'createStyleHook()'}
    </NextLink>
  </Content>
)

export default CustomComponents
