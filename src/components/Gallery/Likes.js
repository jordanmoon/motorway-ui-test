import React from 'react'
import { Heart } from "../Icons"

const Likes = ({likes}) => {
  return (
    <div className=" p-2.5 border border-gray-300 rounded-lg flex space-x-2.5 items-center">
      <div className="w-5 fw-svg">
        <Heart />
      </div>
      <div className="text-sm font-medium">
        {likes}
      </div>
    </div>
  )
}

export default Likes