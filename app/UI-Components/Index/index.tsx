import React from 'react'
import Hero from './Header/Hero'
import Category from './Categories/Category'
import Banners from './Promotion-Banner/Banners'
import Deals from './Deals/Deals'
import Offers from '../Offers-Banner/Offers'
import Recommended from './Recommended/Recommended'
import HotDeals from './Hot-Deals/HotDeals'
import Vendors from './Vendors/Vendors'

const Index = () => {
  return (
    <>
      <Hero />
      <Category />
      <Banners />
      <Deals />
      <Offers />
      <Recommended />
      <HotDeals />
      <Vendors />
    </>
  )
}

export default Index