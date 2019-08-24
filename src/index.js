import React from 'react'
import {Provider as BrokerProvider} from 'react-broker'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import {
  css,
  Global,
  ThemeProvider,
  Grid,
  GridItem,
  useTheme,
  prettyText,
  containmentAttrs,
  browserResets,
  getHoverQuery
} from 'curls'
import {Route, Switch} from 'react-router-dom'
import {memoAssign} from './utils'
import * as theme from './theme'
import {Header, Sidebar, Footer, SelectThemeProvider, getInitialTheme} from './ui'
import * as pages from './pages'


const defaultCss = css`
  * > a, * > span {
    font-size: inherit;
  }
  
  * {
    transition: background-color 480ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  svg:not(:root) {
    display: inline-block;
  }
  
  svg {
    width: 1em;
    height: 1em;
  }
  
  html {
    word-wrap: break-word;
  }
    
  pre {
    -webkit-font-smoothing: auto;
    font-smoothing: auto;
  }
  
  [role=button] {
    user-select: none;
  }
  
  [disabled=true] {
    pointer-events: none; 
  }
  
  @font-face {
    font-family: "Geomanist";
    font-style: normal;
    font-weight: 700;
    src: url(${require('./public/fonts/geomanist-bold-webfont.woff2')}) format("woff2"),
         url(${require('./public/fonts/geomanist-bold-webfont.woff')}) format("woff");
  }

  @font-face {
    font-family: "Geomanist";
    font-style: normal;
    font-weight: 300;
    src: url(${require('./public/fonts/geomanist-regular-webfont.woff2')}) format("woff2"),
         url(${require('./public/fonts/geomanist-regular-webfont.woff')}) format("woff");
  }
  
  details summary {
    outline: none;
  }
`


const faviconLinks = {
  'apple-touch-icon': [
    {
      sizes: '120x120',
      href: require(`~/public/images/touch-120.png`).src,
    },
    {
      sizes: '152x152',
      href: require(`~/public/images/touch-152.png`).src,
    },
    {
      sizes: '167x167',
      href: require(`~/public/images/touch-167.png`).src,
    },
    {
      sizes: '180x180',
      href: require(`~/public/images/touch-180.png`).src,
    },
  ],
  'apple-touch-startup-image': [
    {
      media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-640x1136.png`).src,
    },
    {
      media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-750x1294.png`).src,
    },
    {
      media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: require(`~/public/images/startup-1242x2148.png`).src,
    },
    {
      media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: require(`~/public/images/startup-1125x2436.png`).src,
    },
    {
      media: '(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-2048x2732.png`).src,
    },
    {
      media: '(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-640x1136.png`).src,
    },
  ],
  icon: [
    {
      type: 'image/png',
      sizes: '16x16',
      href: require(`~/public/images/favicon-16.png`).src,
    },
    {
      type: 'image/png',
      sizes: '32x32',
      href: require(`~/public/images/favicon-32.png`).src,
    },
    {
      type: 'image/png',
      sizes: '96x96',
      href: require(`~/public/images/favicon-96.png`).src,
    },
  ],
}
const faviconMeta = {
  'msapplication-TileColor': [{content: theme.light.colors.primary}],
  'msapplication-TileImage': [{content: require(`~/public/images/metro-310.png`).src}]
}

const twitterCard = require(`~/public/images/twitter-card.png`).src

const Document = ({location}) => {
  const theme = useTheme()

  return (
    <>
      <Helmet>
        <html lang="en"/>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black"
        />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0"
        />
        <meta name="google-site-verification" content="0L8RZ2nrOELypp4uek73-wI_MBwoVSahGmSKiPh6xpg"/>
        <meta name="theme-color" content={theme.colors.primary}/>
        <link rel='manifest' href={`${process.env.PUBLIC_PATH}style-hooks.json`}/>
        <meta property="og:image" content={twitterCard}/>
        <meta name='twitter:title' content='Style Hooks: Create responsive components with style props'/>
        <meta name="twitter:image" content={twitterCard}/>
        <meta name='twitter:url' content={`https://${process.env.DOMAIN}/`}/>
        <meta name='twitter:card' content='summary_large_image'/>
        <meta name='twitter:site' content='@jaredLunde'/>
        <meta name='twitter:creator' content='@jaredLunde'/>
        <meta name='twitter:domain' content={`https://${process.env.DOMAIN}/`}/>
        {process.env.PUBLIC_PATH.startsWith('http') &&
         <link rel="dns-prefetch preconnect" href={process.env.PUBLIC_PATH} crossOrigin/>}

        {Object.keys(faviconLinks).map(
          rel => faviconLinks[rel].map(p => <link rel={rel} {...p}/>),
        )}

        {Object.keys(faviconMeta).map(
          name => faviconMeta[name].map(p => <meta name={name} {...p}/>),
        )}
      </Helmet>

      <Global styles={
        css`
          body {
            quotes: "“" "”";
            background: ${theme.colors.background};
            background-size: 8px 8px;
            font-size: ${theme.text.scale.sm}rem;
            color: ${theme.colors.primaryText};
          }
           
          input, textarea, body, a {
            font-family: ${theme.text.families.primary};
            line-height: normal;
          }
          
          a {
            color: ${theme.colors.primaryLink};
            ${getHoverQuery('')}
          }
          
          p {
            line-height: 1.4;
            margin-bottom: 1em;
          }
          
          pre, code {
            font-family: ${theme.text.families.mono};
          }
          
          code {
            font-size: 0.95em;
            background-color: ${theme.colors.accent};
            padding: 0.025em 0.25em 0.05em;
            border-radius: ${4/16}rem;
          }
          
          ol li {
            list-style-type: decimal;
            margin-left: 1.25rem;
            padding-left: 0.5em;
          }
          
          ul li {
            list-style-type: circle;
            margin-left: 1.25rem;
            padding-left: 0.5em;
          }
        `
      }/>

      <Grid
        rows='56px'
        cols={`
          minmax(0,1fr):phone 
          [minmax(0,1fr) 224px]:tablet
          [minmax(0,1fr) 360px]:desktop
        `}
        areas={`
          ["header" "content" "footer"]:phone 
          ["header header" "content sidebar" "footer footer"]:tablet
        `}
      >
        <GridItem area='header' pos='sticky' z='1000'>
          <Header/>
        </GridItem>

        <GridItem area='content'>
          <Switch location={location}>
            {Object.values(pages)}
          </Switch>
        </GridItem>

        <GridItem area='sidebar' d='none:phone flex:tablet'>
          <Sidebar/>
        </GridItem>

        <GridItem area='footer'>
          <Footer/>
        </GridItem>
      </Grid>

      <div id='portals'/>
    </>
  )
}

const globalStyles = [prettyText, containmentAttrs, browserResets, defaultCss]
const initial = memoAssign(theme.main, theme[getInitialTheme()])

export default ({helmetContext = {}, chunkCache}) => (
  <HelmetProvider context={helmetContext}>
    <ThemeProvider theme={initial} globalStyles={globalStyles}>
      <SelectThemeProvider>
        <BrokerProvider chunkCache={chunkCache}>
          <Route children={({location}) => {
            if (typeof window !== 'undefined') window.scrollTo(0, 0)
            return <Document location={location}/>
          }}/>
        </BrokerProvider>
      </SelectThemeProvider>
    </ThemeProvider>
  </HelmetProvider>
)