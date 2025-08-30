import React from 'react'
import Hero from '../components/hero/hero'
import ShopByCategory from '../components/shopbycategory/ShopByCategory'
import FeatureProducts from '../components/featureproducts/FeatureProducts'

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