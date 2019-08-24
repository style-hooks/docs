import {defaultColors} from 'curls'

const primary = 'rgb(241,15,99)'
export default {
  ...defaultColors,
  primary,
  emphasis: '#2d2a2b',
  background: defaultColors.white,
  lightAccent: 'rgba(20,40,100,0.05)',
  accent: 'rgba(20,40,100,0.10)',
  primaryText: '#464042',
  secondaryText: defaultColors.grey,
  primaryLink: primary,
  secondaryLink: defaultColors.grey
}