import {defaultColors} from 'curls'

const
  darkestGrey = '#1d2728',
  primary = 'rgb(241,15,99)'
export default {
  ...defaultColors,
  darkestGrey,
  primary,
  emphasis: '#ffe6ee',
  background: darkestGrey,
  lightAccent: 'rgba(150, 150, 250, 0.05)',
  accent: 'rgba(150, 150, 250, 0.15)',
  primaryText: '#e7d3d4',
  secondaryText: defaultColors.grey,
  primaryLink: primary,
  secondaryLink: defaultColors.lightGrey
}