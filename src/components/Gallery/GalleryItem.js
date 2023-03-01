import React from 'react'
import FadeInWhenVisible from '../FadeInWhenVisible'
import Image from '../Image'
import Likes from './Likes'

const GalleryItem = ({ img, openModal }) => {
  
  return (
    <FadeInWhenVisible className="relative h-full flex flex-col space-y-2.5">
      <button className="appearance-none group relative overflow-hidden rounded-lg aspect-[3/2] h-full bg-gray-300" onClick={() => openModal(img)}>
        <Image
          jpgSrc={`${img.url}.jpg`}
          webpSrc={`${img.url}.webp`}
          sizes="(min-width: 1024px) 33.33vw, (min-width: 768px) 50vw, 100vw"
          alt={img.alt_description}
          figureClassName="overflow-hidden rounded-lg absolute inset-0"
          imgClassName="group-hover:scale-105 transition-transform duration-1000 ease-out object-cover w-full h-full" 
        />
        <div className="absolute inset-0 top-auto p-5 bg-gradient-to-t from-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-between items-end">
          <div className="flex items-center space-x-2.5">
            <figure>
              <img src={`${img.user.profile_image}.webp`} alt='' className="rounded-full border-2 border-white w-10 h-10 drop-shadow" />
            </figure>
            <div className="text-sm">
              {img.user.name}
            </div>
          </div>
          <Likes likes={img.likes} />
        </div>
      </button>
    </FadeInWhenVisible>
  )
}

export default GalleryItem