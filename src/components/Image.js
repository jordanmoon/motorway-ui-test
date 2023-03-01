import React from 'react'

const Image = ({ jpgSrc, webpSrc, sizes, alt, figureClassName, imgClassName }) => {
  return (
    <picture>
      <source
        srcSet={webpSrc}
        type="image/webp"
      />
      <source
        srcSet={jpgSrc}
        type="image/jpeg"
      />
      <figure className={figureClassName}>
        <img
          sizes={sizes}
          src={jpgSrc}
          alt={alt}
          className={imgClassName}
          onLoad={console.log('loaded')}
        />
      </figure>
    </picture>
  )
}

export default Image