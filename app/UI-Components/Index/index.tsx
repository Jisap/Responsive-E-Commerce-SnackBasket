import React from 'react'
import Hero from './Header/Hero'
import Category from './Categories/Category'
import Banners from './Promotion-Banner/Banners'
import Deals from './Deals/Deals'
import Offers from '../Offers-Banner/Offers'

const Index = () => {
  return (
    <>
      <Hero />
      <Category />
      <Banners />
      <Deals />
      <Offers />
    </>
  )
}

export default Index