import React from 'react';
import Slider from '../components/Slider';
import CategoriesNav from '../components/CategoriesNav';
import BoxDescrip from '../components/BoxDescrip';
import ProductSlider from '../components/ProductSlider';
export default function Home() {
  return (
 

<div className='container'>
  <div className='slidersection'>
  <div>
      <CategoriesNav />
  </div>
       <Slider />
  </div>
<ProductSlider />
<div className='boxDescripHome'>
  <BoxDescrip />
  <BoxDescrip />
  <BoxDescrip />
  <BoxDescrip />
</div>

</div>
  )
}
