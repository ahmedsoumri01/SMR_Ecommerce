import React from 'react'

export default function Slider() {
  return (

<>
    <div id="carouselMaterialStyle" class="carousel slide carousel-fade " data-mdb-ride="carousel">

      <div class="carousel-indicators">
        <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
      </div>
    

      <div class="carousel-inner rounded-5 shadow-4-strong">

        <div class="carousel-item active">
          <img src="https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg" class="d-block w-100"
            alt="Sunset Over the City" />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
    
    
        <div class="carousel-item">
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Go-2-for-Business-C:VP1-539x440" class="d-block w-100"
            alt="Canyon at Nigh" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
    
    

        <div class="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSazllFFXiYe_xP3wbp9uKmk0PA5Hw5chk5Kxu2q3dk78S1xO3i0DkZSLwT4935bjhSlYk&usqp=CAU" class="d-block w-100"
            alt="Cliff Above a Stormy Sea" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      
      <button class="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
   </>
  )
}
