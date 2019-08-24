import {useContext} from 'react'
import {__RouterContext} from 'react-router-dom'

let resolver

if (__CLIENT__) {
  resolver = require('resolve-url')
}
if (__SERVER__) {
  resolver = require('url').resolve
}

// This resolves fully qualified URLs for thinks like <link rel='canonical'/>
export
  const resolve = (...uris) => resolver(`https://${process.env.DOMAIN}`, ...uris),
    useRouter = () => useContext(__RouterContext),
    useHistory = () => useRouter().history,
    useLocation = () => useHistory().location,
    useParams = () => useRouter().match.params

// These are the page URL definitions. URLs are defined this way so that they can
// easily be updated later on. Any references in <Link to={}/> should use these
// references
//
// NOTE: These urls should ALWAYS ALWAYS ALWAYS contain a trailing / for static sites
//       since static sites are directory-based. If this is a Lambda-based SSR solution
//       you can omit trailing slashes
export const home = () => '/'
export const theming = () => '/theming/'
export const breakpointProps = () => '/breakpoint-props/'
export const cssProp = () => '/css-prop/'
export const kindProp = () => '/kind-prop/'
export const customHooks = () => '/create-a-style-hook/'
export const styled = () => '/styled-components/'
export const ssr = () => '/ssr/'

export const api = (crumb = '', component = '') => `/api/${crumb}/${component}/`.replace(/\/\/+/, '/')
export const component = () => '/not-found'
export const hook = (h = '') => api(h)
export const util = (f = '') => api(f)