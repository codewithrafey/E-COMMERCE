import React from 'react'
import blog_banner from '../assets/blog_banner.jpg'
import { blogData } from '../assets/all_product'
import BlogCard from '../components/blogcard/BlogCard'

function Blog() {
  return (
    <div>
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <img 
        loading='lazy'
          src={blog_banner} 
          alt="Blog Banner"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">#readmore</h1>
          <p className='text-white text-md'>Read all case studies about our products!</p>
        </div>
      </div>
      <div className="pt-10 max-sm:pt-4">
        {blogData.map((blog, index) => {
            return (
                <BlogCard key={index} blog={blog} />
            )
        })}
      </div>
    </div>
  )
}

export default Blog
