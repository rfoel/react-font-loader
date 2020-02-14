# React Font Loader

[![npm](https://img.shields.io/npm/v/react-font-loader)](https://www.npmjs.com/react-font-loader)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-font-loader)](https://www.npmjs.com/react-font-loader)
[![NPM](https://img.shields.io/npm/l/react-font-loader)](LICENSE.md)

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
      <ReactFontLoader fonts={[{ name: 'Permanent Marker' }]} />
      <h1 style={{ fontFamily: 'Permanent Marker' }}>Custom font</h1>
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
  useReactFontLoader({ fonts: [{ name: 'Permanent Marker' }] })

  return (
    <div>
      <h1 style={{ fontFamily: 'Permanent Marker' }}>Custom font</h1>
    </div>
  )
}

export default App
```