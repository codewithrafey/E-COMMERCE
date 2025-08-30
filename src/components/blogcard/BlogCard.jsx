import React from 'react'

function BlogCard({blog}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-16 px-4 sm:px-12 lg:px-24 xl:px-40 ">
      {/* LEFT SIDE */}
      <div className="relative">
        {/* Date */}
        <h2 className="absolute max-sm:-top-10 -top-15 text-5xl md:text-7xl font-bold text-gray-300">
          {blog.date}
        </h2>

        {/* Image */}
        <img 
        loading='lazy'
          src={blog.image} 
          alt="Blog" 
          className="w-[480px] h-64 object-cover relative border border-gray-300 z-10" 
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-2 flex flex-col justify-center items-start">
        <h3 className="text-xl font-bold">{blog.title}</h3>
        <p className="text-gray-600 text-sm">
          {blog.description}
        </p>
        <button className="uppercase text-sm font-semibold flex items-center gap-4 hover:text-[#3a88a1] hover:border-[#3a88a1] transition">
          Continue Reading  <div className="w-16 h-0 border "></div>
        </button>
      </div>
    </div>
  )
}

export default BlogCard
