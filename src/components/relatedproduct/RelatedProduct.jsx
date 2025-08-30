import React from 'react'
import { relatedProduct } from '../../assets/all_product'
import Item from '../item/Item'

function RelatedProduct() {
  return (
    <div className='h-full flex flex-col gap-4 py-10'>
      <div className="flex flex-col gap-1.5 items-center justify-center">
        <h1 className='text-[32px] font-bold'>Related Products</h1>
        <p className='text-gray-600'>Check out our most popular items</p>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 px-4 sm:px-12 lg:px-24 xl:px-40 ">
            {relatedProduct.map((product, i) => {
                return  <Item key={i} product={product} />
            })}
        </div>
    </div>
  )
}

export default RelatedProduct