import React from 'react'
import {css, Text, Box} from 'curls'
import {LazyIframe} from '@stellar-apps/lazy-load'
import Highlight, {defaultProps} from 'prism-react-renderer'
import highlightTheme from 'prism-react-renderer/themes/vsDark'
import {useCurrentTheme} from './SelectTheme'


export default React.memo(
  ({
    language = 'jsx',
    sandbox,
    sandboxLink,
    enableLineNumbers = false,
    code,
    ...props
  }) => {
    const theme = useCurrentTheme()
    return (
      <>
        {sandboxLink && (
          <Text kind="p" bold center=":phone" left=":tablet">
            Play with the below code on{' '}
            <Text as="a" href={`https://codesandbox.io/s/${sandboxLink}`}>
              CodeSandbox
            </Text>
          </Text>
        )}
        {sandbox ? (
          <Box
            m="y3"
            h="560"
            br="3"
            ov="hidden"
            bw="1"
            bc="darkGrey"
            {...props}
          >
            <LazyIframe
              src={`https://codesandbox.io/embed/${sandbox}?fontsize=14&hidenavigation=1&view=editor`}
              title="@style-hooks / theme example"
              allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
              style={{width: '100%', height: '100%', border: 0}}
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            />
          </Box>
        ) : (
          <Highlight
            {...defaultProps}
            code={code}
            language={language}
            theme={/*theme === 'light' ? highlightThemeLight :*/ highlightTheme}
          >
            {({className, style, tokens, getLineProps, getTokenProps}) => (
              <Box
                as="pre"
                p={enableLineNumbers ? 'y3' : '3 r0'}
                br="3"
                bw="1"
                bc="darkGrey"
                ov="auto touch"
                className={className}
                style={style}
                css={css`
                  font-size: 1rem;
                `}
                {...props}
              >
                {tokens.map((line, i) => (
                  <Box key={i} flex wrap="no">
                    {enableLineNumbers && (
                      <Text
                        right
                        minW="48"
                        p="r2"
                        color="darkGrey"
                        css={css`
                          user-select: none;
                        `}
                      >
                        {i + 1}
                      </Text>
                    )}

                    <div {...getLineProps({line})}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({token, key})} />
                      ))}
                    </div>
                  </Box>
                ))}
              </Box>
            )}
          </Highlight>
        )}
      </>
    )
  },
)
