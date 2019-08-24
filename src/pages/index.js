import React from 'react'
import {Route} from 'react-router-dom'
import lazy from 'react-broker/macro'
import {Box} from 'curls'
import {Spinner} from '@jaredlunde/curls-addons'
// These are the page URL definitions. URLs are defined this way so that they can
// easily be updated later on. Any references in <Link to={}/> should use these
// references
import * as urls from '../urls'


const Loading = <Box
  flex
  minH='calc(100vh - 56px)'
  h='100%'
  align='center'
  bg='lightAccent'
  children={<Spinner size={32}/>}
/>
const lazyProps = {loading: () => Loading}
// this is here so there's no issues with forgetting to add a `key` property
const route = props => <Route key={props.path} {...props}/>

// NOTE: Order here matters
// ------------------------
// The order these routes are defined in is the same order that they show up in
// inside the <Switch> statement in the <Document> of '../index'
//
// It is imperative you keep this in mind, which is why this comment is so logn and different
// from other comments here
export const Home = route({
  path: urls.home(),
  exact: true,
  component: lazy('./Home', lazyProps)
})
export const Theming = route({
  path: urls.theming(),
  exact: true,
  component: lazy('./Theming', lazyProps)
})
export const BreakpointProps = route({
  path: urls.breakpointProps(),
  exact: true,
  component: lazy('./BreakpointProps', lazyProps)
})
export const CssProp = route({
  path: urls.cssProp(),
  exact: true,
  component: lazy('./CssProp', lazyProps)
})
export const KindProp = route({
  path: urls.kindProp(),
  exact: true,
  component: lazy('./KindProp', lazyProps)
})
export const CreateAStyleHook = route({
  path: urls.customHooks(),
  exact: true,
  component: lazy('./CreateAStyleHook', lazyProps)
})
export const StyledComponents = route({
  path: urls.styled(),
  exact: true,
  component: lazy('./StyledComponents', lazyProps)
})
export const ServerSideRendering = route({
  path: urls.ssr(),
  exact: true,
  component: lazy('./ServerSideRendering', lazyProps)
})
export const createStyleHook = route({
  path: urls.api('createStyleHook'),
  exact: true,
  component: lazy('./createStyleHook', lazyProps)
})
export const useStyles = route({
  path: urls.api('useStyles'),
  exact: true,
  component: lazy('./useStyles', lazyProps)
})
export const createElement = route({
  path: urls.api('createElement'),
  exact: true,
  component: lazy('./createElement', lazyProps)
})
export const ThemeProvider = route({
  path: urls.api('ThemeProvider'),
  exact: true,
  component: lazy('./ThemeProvider', lazyProps)
})
export const ThemeConsumer = route({
  path: urls.api('ThemeConsumer'),
  exact: true,
  component: lazy('./ThemeConsumer', lazyProps)
})
export const useTheme = route({
  path: urls.api('useTheme'),
  exact: true,
  component: lazy('./useTheme', lazyProps)
})
export const useStylesContext = route({
  path: urls.api('useStylesContext'),
  exact: true,
  component: lazy('./useStylesContext', lazyProps)
})
export const StylesConsumer = route({
  path: urls.api('StylesConsumer'),
  exact: true,
  component: lazy('./StylesConsumer', lazyProps)
})
export const NotFound = route({
  path: '*',
  component: lazy('./NotFound', lazyProps)
})
