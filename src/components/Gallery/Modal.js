import React from 'react'
import Image from '../Image'
import Likes from './Likes'

const Slider = ({ open, setOpen, item }) => {
  return (
    <div onClick={() => setOpen(false)} className={`w-screen h-screen fixed inset-0 overflow-scroll bg-gray-900 bg-opacity-90 px-5 md:px-20 p-10 transition-opacity duration-500 ease-in-out ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white rounded-lg p-10 max-w-5xl mx-auto transform transition-transform duration-500 ease-in-out ${open ? 'translate-y-0' : 'translate-y-[10vh]'}`} onClick={(e) => e.stopPropagation()}>
        {item && (
          <div className="space-y-10">
            <div className="w-full">
              <Image
                jpgSrc={`${item.url}.jpg`}
                webpSrc={`${item.url}.webp`}
                sizes="95vw"
                alt={item.alt_description}
                imgClassName="w-full max-h-[70vh] object-contain object-top"
              />
            </div>
            <div className="grid grid-cols-5 gap-10 divide-x">
              <div className="col-span-3">
                <div className="flex items-start space-x-5">
                  <Image 
                    jpgSrc={`${item.user.profile_image}.jpg`}
                    webpSrc={`${item.user.profile_image}.webp`}
                    sizes="80px"
                    alt={item.user.name}
                    imgClassName="rounded-full w-20 h-20 object-cover" 
                    />
                  <div className="space-y-2.5 flex-1">
                    <div className="space-y-1">
                      <h4 className="font-medium text-lg">
                        {item.user.name}
                      </h4>
                      {item.user.location && (
                        <p className="text-sm">{item.user.location}</p>
                      )}
                    </div>
                    <p>{item.user.bio}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-5 col-span-2 pl-10">
                {item.description && <p>{item.description}</p>}
                <Likes likes={item.likes} />
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Slider