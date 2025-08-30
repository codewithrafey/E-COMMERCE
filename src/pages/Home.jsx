import React from 'react'
import ShopByCategory from '../components/shopbycategory/ShopByCategory'
import FeatureProducts from '../components/featureproducts/FeatureProducts'
import Hero from '../components/hero/Hero'

function Home() {
  return (
    <div>
        <Hero />
        <ShopByCategory />
        <FeatureProducts />
    </div>
  )
}

export default Home