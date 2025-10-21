import React from 'react'
import Hero from './Header/Hero'
import Category from './Categories/Category'
import Banners from './Promotion-Banner/Banners'
import Deals from './Deals/Deals'
import Offers from '../Offers-Banner/Offers'
import Recommended from './Recommended/Recommended'

const Index = () => {
  return (
    <>
      <Hero />
      <Category />
      <Banners />
      <Deals />
      <Offers />
      <Recommended />
    </>
  )
}

export default Index