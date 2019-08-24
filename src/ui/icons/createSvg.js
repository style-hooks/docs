import {jsx} from 'curls'
import withoutProps from 'object-without-props'


const defaultWithout = {pathStyle: 0, title: 0, name: 0}
export default (props, children, viewBox = '0 0 25 25', without = defaultWithout) => {
  const svgProps = withoutProps(props, without)
  svgProps.xmlns = 'http://www.w3.org/2000/svg'
  svgProps.viewBox = viewBox
  return jsx('svg', svgProps, children)
}