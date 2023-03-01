import React from 'react'
import InputField from './Form/InputField'
import ColorField from './Form/ColorField'
import RangeField from './Form/RangeField'

const Form = () => {
  return (
    <div className="flex p-10">
      <form onSubmit={(e) => e.preventDefault()} className="block border border-gray-400 rounded-lg p-10 mx-auto w-[400px] space-y-5">
        <InputField id="name" name="name" type="text" label="Name *" placeholder="Spongebob..." required />
        <InputField id="email" name="email" type="email" label="Email *" placeholder="spongebob@pineapple.sea" required />
        <InputField id="date" name="date" type="date" label="Date of birth *" placeholder="spongebob@pineapple.sea" required min="1900-01-01" max={new Date().toJSON().split('T')[0]} />
        <ColorField id="colour" name="colour" type="color" label="Favorite colour *" required />
        <RangeField id="salary" name="salary" type="range" label="Salary *" required />
        <button type="submit" className="bg-black px-5 py-2 rounded text-white">Submit</button>
      </form>

    </div>
  )
}

export default Form