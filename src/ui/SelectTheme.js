import React, {useContext, useState, useEffect, useMemo} from 'react'
import {useCurls} from 'curls'
import Cookies from 'js-cookie'
import {memoAssign} from '../utils'
import * as theme from '../theme'


const SelectThemeContext = React.createContext(null)
export const getInitialTheme = () => {
  // const theme = Cookies.get('theme')
  // if (theme && theme === 'light' || theme === 'dark')
  //   return theme
  return 'light'
}

export const SelectThemeProvider = props => {
  const
    state = useState(getInitialTheme()),
    curls = useCurls()

  useEffect(
    () => {
      const
        variant = state[0],
        nextTheme = memoAssign(theme.main, theme[variant])
      console.log(`[🎉 Theme] ${variant}:`, nextTheme)
      curls.replaceTheme(nextTheme)
    },
    state
  )

  const value = useMemo(
    () => [
      state[0],
      theme => {
        Cookies.set('theme', theme)
        return state[1](theme)
      }
    ],
    state
  )

  return <SelectThemeContext.Provider value={value} children={props.children}/>
}

export const useSelectTheme = () => useContext(SelectThemeContext)[1]
export const useCurrentTheme = () => useContext(SelectThemeContext)[0]