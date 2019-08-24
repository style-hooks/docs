import {Link} from 'react-router-dom'


export default {
  component: Link,
  /*
  getHoverClass: (theme, props) => {
    const hoverClass = css`
      &:hover {
        color: ${theme.colors.hover[props.color] || props.color};
      }
    `

    const noneClass = css`
      &:hover {
        color: ${theme.colors[props.color] || props.color};
      }
    `

    return getHoverQuery(hoverClass, noneClass)
  }
  */
}