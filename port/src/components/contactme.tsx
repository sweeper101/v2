import React from 'react'

interface Props {
    
}

export const contactme = (props: Props) => {
    return (

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-green-500 sm:text-3xl">
      Contact Me
    </h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      GEt in touch with me!!
    </p>


    <form
      action=""
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-md sm:p-6 lg:p-8  shadow-green-900"
    >
      <p className="text-center text-lg font-medium text-green-500"> Send Message</p>

      <div>
        

        <div className="relative">
          <input
            type="email"
            className="w-full rounded border-green-500 p-4 pe-12 text-sm shadow-sm text-green-500 bg-black border-2 focus:outline-green-500 focus:outline-none"
            placeholder="Enter email"
          />

          
        </div>
      </div>

      <div>
        <div className="relative">
          <textarea
            className="w-full rounded border-green-500 p-4 pe-12 text-sm shadow-sm text-green-500 bg-black border-2 focus:outline-none focus:outline-green-500"
            placeholder="Enter message"
          />          
        </div>
      </div>

      <div className="flex justify-center">
  <a
    className="group relative inline-block  text-sm font-medium text-white focus:outline-none focus:ring"
    href="/download"
  >
    <span
      className="absolute inset-0 border border-green-600 group-active:border-green-500"
    ></span>
    <span
      className="block border border-green-600 bg-green-600 px-12 py-3 transition-transform active:border-green-500 active:bg-green-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
    >
      send
    </span>
  </a>
</div>
    </form>
  </div>
</div>
    )
}

export default contactme
