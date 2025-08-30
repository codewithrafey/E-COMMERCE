import React, { useState } from 'react'
const tabs = [
    {
        title: 'description',
        description: `Introducing our premium collection, crafted with the finest fabrics that not only look stunning but also offer unparalleled comfort. Each piece is designed to elevate your style, combining elegance with superior craftsmanship. Our attention to detail ensures a flawless finish, making every item in our collection not only visually appealing but also long-lasting. Whether you're dressing up for a special occasion or adding a touch of sophistication to your everyday wardrobe, our products promise to stand out with their rich textures, vibrant colors, and luxurious feel. Choose quality, choose style – choose us for your fashion needs. <br/> With our products, you're not just wearing clothing – you're making a statement. Experience the perfect blend of fashion and function, tailored to keep you looking your best in any setting.Step into a world of timeless elegance where every piece is a masterpiece, designed to leave a lasting impression.`
    },
    {
        title: 'review',
        description: 'Customer reviews are the lifeblood of our brand, providing invaluable insights into the quality and performance of our products. We take pride in the positive feedback we receive, which reflects our commitment to excellence. Our customers appreciate the attention to detail, the luxurious feel of our fabrics, and the stylish designs that set us apart. Many highlight how our clothing not only meets but exceeds their expectations, making them feel confident and fashionable. We encourage new customers to explore these reviews to see how our products have transformed wardrobes and enhanced personal style.'
    }
]

function Tabs() {
    const [activeTabs, setactiveTabs] = useState(0)
    const [activeContent, setactiveContent] = useState(tabs[0].description)
    const handleClick = (e)=>{
        setactiveTabs(e)
        setactiveContent(tabs[e].description)   
    }
  return (
    <div className='px-4 md:px-16 pt-10'>
        <ul className='flex gap-0 text-sm font-semibold'>
        {tabs.map((v, i)=>{
            return(
                <li key={i}>
                    <button  onClick={() => handleClick(i)} className={`${activeTabs === i ? 'text-black bg-white' : ''} bg-gray-100  text-xs px-5 py-3 border border-gray-300 cursor-pointer`}>{v.title.toUpperCase()}</button>
                </li>
            )
        })}
        </ul>
        <div className='text-sm border border-gray-300 px-3 py-5'>
        {activeContent.split("<br/>").map((line, i) => (
          <p key={i} className="mb-3">{line}</p>
        ))}        </div>
    </div>
  )
}

export default Tabs