export default {
  scale: {
    xxs: 0.675,
    xs: 0.825,
    sm: 1,
    md: 1.5,
    lg: theme => `
      @media ${theme.breakpoints.phone} {
        font-size: 2rem;
      }
      @media ${theme.breakpoints.desktop} {
        font-size: 3rem;
      }
    `,
    xl: 2.5,
    xxl: 3
  },

  families: {
    primary: '"Geomanist", -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Helvetica", sans-serif',
    mono: '"Dank Mono", "Maison Mono", "Hack", "Fira Code", Inconsolata, Courier, monospace'
  },

  kinds: {
    h1: {
      as: 'h1',
      size: 'lg',
      m: 'b0',
      color: 'emphasis'
    },
    apiH1: {
      as: 'h1',
      size: 'md',
      m: 'b1',
      color: 'emphasis'
    },
    h2: {
      as: 'h2',
      size: 'md',
      regular: true,
      m: 'b2',
      color: 'emphasis'
    },
    h3: {
      as: 'h3',
      size: 'sm',
      bold: true,
      m: 'b2',
      color: 'emphasis'
    },
    p: {
      as: 'p'
    },
    a: {
      as: 'a',
      color: 'primaryLink'
    }
  }
}