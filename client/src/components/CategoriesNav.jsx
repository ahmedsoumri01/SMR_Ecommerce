import React from 'react'
import { Link } from 'react-router-dom'
export default function CategoriesNav() {
  return (
    <div className='CategoriesNav' >
<ul>
  <li>
    <Link to={'/'}><i class="fas fa-home"></i>home</Link>
  </li>
  <li>
    <Link to={'/'}><i class="fas fa-mobile-alt"></i>phones</Link>
    </li>
  <li>
    <Link to={'/'}><i class="fas fa-laptop"></i>laptop</Link>
    </li>
  <li>
    <Link to={'/'}><i class="fas fa-headphones"></i>accessoire</Link>
    </li>
</ul>
    </div>
  )
}
