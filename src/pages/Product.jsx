import { Filter } from 'lucide-react'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/breadcrum/BreadCrum'
import { Context } from '../context/Context'
import ProductPage from '../components/productpage/productPage'
import Tabs from '../components/tab/Tabs'
import RelatedProduct from '../components/relatedproduct/RelatedProduct'

function Product() {
  const {products} = useContext(Context)
  const {productId} = useParams()
  console.log(productId)
  const product = products.find((e) => e.id === (productId) )
  console.log('product', product)
  return (
    <div>
      {product ? (
        <>
        <BreadCrum product={product} />
        <ProductPage product={product} />
        <Tabs />
        <RelatedProduct />
        </>
      ) : (
        <><p className='flex justify-center items-center min-h-screen'>Product not found</p></>
      )
      }
      
    </div>
  )
}

export default Product