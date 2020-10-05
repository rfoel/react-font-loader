import { useEffect } from 'react'
import { string } from 'prop-types'

const createElement = url => {
  const element = document.createElement('link')
  element.rel = 'stylesheet'
  element.href = url
  return element
}

const ReactFontLoader = ({ url }) => {
  useEffect(() => {
    const element = createElement(url)
    document.head.appendChild(element)
    return () => document.head.removeChild(element)
  }, [])
  return null
}

ReactFontLoader.propTypes = {
  url: string.isRequired,
}

export default ReactFontLoader
