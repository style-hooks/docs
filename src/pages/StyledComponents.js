import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Text, Box, Link} from 'curls'
import {Content, Highlight, NextLink, PropDef} from '~/ui'
import * as urls from '~/urls'


const styledComponentsExample = `
import React from 'react'
import {css} from '@emotion/core'
import {createStyleHook} from '@style-hooks/core'
import styled from '@style-hooks/styled'

const useBox = createStyleHook('box', {
  width: value => css\`width: \${value}px;\`
})

const List = styled.ul\`
  background-color: skyblue;
  border-radius: 1rem;
\`.compose(useBox)

<List width='200'/>
// <ul/>
// width: 200px;
// background-color: skyblue;
// border-radius: 1rem;

const ListItem = styled.li(
  \`
    color: white;
    list-style: circle;
  \`,
  [useBox]
)

<ListItem width='100'/>
// <li/>
// width: 100px;
// color: white;
// list-style: circle;
`.trim()

const CustomComponents = props => (
  <Content>
    <Helmet>
      <title>Styled Components / Style Hooks</title>
      <link rel='canonical' href={urls.styled()}/>
      <meta name='description' content={`Learn how to create styled components with style hooks.`}/>
    </Helmet>

    <Text kind='h1'>
      Styled components
    </Text>

    <Text kind='h2' m='b3'>
      Supercharge your styled components with style hook composition and themes
    </Text>

    <Text kind='p' m='b3'>
      Using <code>@style-hooks/styled</code> means better composition and less typing
      at a fraction of the bundle cost of <code>@emotion/styled</code>.
    </Text>

    <Highlight
      code={`npm i @style-hooks/styled @style-hooks/core @emotion/core`}
      language='shell'
      br='t3'
      bw='1 b0'
    />
    <Highlight code={styledComponentsExample} m='b4' br='b3'/>

    <Text kind='h2'>
      Use them with style hooks
    </Text>
    <Text kind='p'>
      The coolest thing about <code>@style-hooks/styled</code> components is that you can compose them
      with your style hooks. This allows your styled components to inherit the style props
      defined in your hooks!
    </Text>
    <Highlight sandbox='style-hooksstyled-with-hooks-rn4rb' m='b4' h='1248'/>

    <Text kind='h2'>
      Use them without style hooks
    </Text>
    <Text kind='p'>
      You don't lose any emotion or styled-components features by
      selecting <code>@style-hooks/styled</code>
    </Text>
    <Highlight sandbox='style-hooksstyled-basic-button-2nyfi' m='b4' h='324'/>

    <Text kind='h2'>
      Style components based upon props and theme
    </Text>
    <Text kind='p'>
      With <code>@style-hooks/styled</code> you can change the way your styled
      component renders based upon props and themes
    </Text>
    <Highlight sandbox='style-hooksstyled-props-theme-khc14' m='b4' h='690'/>

    <Text kind='h2'>
      Change the component type with an <code>as</code> prop
    </Text>
    <Text kind='p'>
      You're not inextricably tied to the component type you select in <code>styled.[component]</code> -
      it's just a default. The below component renders a <code>span</code>.
    </Text>
    <Highlight sandbox='style-hooksstyled-as-prop-4enpw' m='b4' h='324'/>

    <Text kind='h2'>
      Styling your own components
    </Text>
    <Text kind='p'>
      You don't have to use HTML primitives to use <code>@style-hooks/styled</code>, you can use
      your own components, too
    </Text>
    <Highlight sandbox='style-hooksstyled-custom-components-bjk26' m='b4' h='420'/>

    <Text kind='h2'>
      Nesting styles
    </Text>
    <Text kind='p'>
      You can use selectors to style nested elements the same way you can with styled-components
      and emotion
    </Text>
    <Highlight sandbox='style-hooksstyled-nesting-d5gr6' m='b4' h='480'/>

    <Text kind='h2'>
      Flexibly style with template literals, strings, objects, and functions
    </Text>
    <Text kind='p'>
      With <code>@style-hooks/styled</code> you're not tied to any one pattern. There are numerous
      ways to generate your component styles.
    </Text>
    <Highlight sandbox='style-hooksstyled-versatility-lu1ep' m='b4' h='1024'/>

    <NextLink to={urls.ssr()}>
      Server-side rendering
    </NextLink>
  </Content>
)

export default CustomComponents
