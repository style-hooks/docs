import React from 'react'
import {css, Box, Text, NavLink, useTheme} from 'curls'
import * as urls from '~/urls'

const detailsStyle = css`
cursor: pointer;
user-select: none;

& summary::-webkit-details-marker {
  display: none;
}

details > summary:first-of-type {
  list-style-type: none;
}
`
const Section = props => (
  <Box as='details' w='100%' p={props.p || 't4'} open={props.open} className={props.className} css={detailsStyle}>
    <Text as='summary' bold color='emphasis' m='l3' children={props.title}/>
    <Box as='ul' flex column p='t2 l3'>
      {props.children}
    </Box>
  </Box>
)

const SectionLink = props => {
  const
    theme = useTheme(),
    activeStyle = {
      color: theme.colors.primaryLink,
      fontWeight: 700
    }

  return <NavLink
    exact
    to={props.to || `/${props.children}`}
    p='y1 l2'
    w='100%'
    color='secondaryLink'
    activeStyle={activeStyle}
    children={props.children}
  />
}

export default () => (
  <Box
    as='nav'
    flex
    column p='[l3 r3 b4]:phone [l4 r5 b4]:desktop'
    w='100%'
    minH='calc(100vh - 56px)'
    ov='autoY touch'
  >
    <Section title='Introduction' open>
      <SectionLink to={urls.home()}>
        Getting started
      </SectionLink>
      <SectionLink to={urls.theming()}>
        Theming
      </SectionLink>
      <SectionLink to={urls.breakpointProps()}>
        Breakpoint props
      </SectionLink>
      <SectionLink to={urls.kindProp()}>
        <code>kind</code> prop (variants)
      </SectionLink>
      <SectionLink to={urls.cssProp()}>
        <code>css</code> prop
      </SectionLink>
      <SectionLink to={urls.customHooks()}>
        Create a style hook
      </SectionLink>
      <SectionLink to={urls.styled()}>
        Styled components
      </SectionLink>
      <SectionLink to={urls.ssr()}>
        Server-side rendering
      </SectionLink>
    </Section>

    <Section
      title='API'
      open
      css={theme => css`& a { font-family: ${theme.text.families.mono}; }`}
    >
      <SectionLink to={urls.api('createStyleHook')}>
        createStyleHook()
      </SectionLink>
      <SectionLink to={urls.api('useStyles')}>
        useStyles()
      </SectionLink>
      <SectionLink to={urls.api('createElement')}>
        createElement()
      </SectionLink>
      <SectionLink to={urls.api('ThemeProvider')}>
        {`<ThemeProvider>`}
      </SectionLink>
      <SectionLink to={urls.api('ThemeConsumer')}>
        {`<ThemeConsumer>`}
      </SectionLink>
      <SectionLink to={urls.api('useTheme')}>
        useTheme()
      </SectionLink>
      <SectionLink to={urls.api('StylesConsumer')}>
        {'<StylesConsumer>'}
      </SectionLink>
      <SectionLink to={urls.api('useStylesContext')}>
        useStylesContext()
      </SectionLink>
    </Section>
  </Box>
)