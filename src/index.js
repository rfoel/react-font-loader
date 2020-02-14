import { useEffect } from 'react'
import { arrayOf, number, oneOfType, shape, string } from 'prop-types'

const createElement = fonts => {
  const families = fonts
    .reduce((accumulator, font) => {
      const family = font.name.replace(' ', '+')
      const weight = (font.weight && `:${font.weight.join(',')}`) || ''
      return [...accumulator, `${family}${weight}`]
    }, [])
    .join('|')

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css?family=${families}`

  return link
}

const ReactFontLoader = ({ fonts }) => {
  useEffect(() => {
    const element = createElement(fonts)
    document.head.appendChild(element)

    return () => document.head.removeChild(element)
  }, [])

  return null
}

ReactFontLoader.propTypes = {
  fonts: arrayOf(
    shape({
      name: string.isRequired,
      weights: arrayOf(oneOfType([string, number])),
    }),
  ).isRequired,
}

export default ReactFontLoader
