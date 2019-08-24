import memoize from 'trie-memoize'

export const memoAssign = memoize([WeakMap, WeakMap], (...o) => Object.assign({}, ...o))
