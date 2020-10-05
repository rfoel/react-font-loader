# React Font Loader

[![npm](https://img.shields.io/npm/v/react-font-loader)](https://www.npmjs.com/react-font-loader)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-font-loader)](https://www.npmjs.com/react-font-loader)
[![NPM](https://img.shields.io/npm/l/react-font-loader)](LICENSE.md)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

React Font Loader works with any Google Fonts for instance. Ideally you would use it inside a layout component that wraps everything or a Theme Provider.

```
yarn add react-font-loader
```

## Use as a component

```js
import React from 'react'
import ReactFontLoader from 'react-font-loader'

const App = () => {
  return (
    <div>
      <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap' />
      <h1 style={{ fontFamily: 'Red Hat Display' }}>Custom font</h1>
    </div>
  )
}

export default App
```

## Use as a hook

```js
import React from 'react'
import useReactFontLoader from 'react-font-loader'

const App = () => {
  useReactFontLoader({
    url:
      'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap',
  })

  return (
    <div>
      <h1 style={{ fontFamily: 'Red Hat Display' }}>Custom font</h1>
    </div>
  )
}

export default App
```
