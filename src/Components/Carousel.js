import { useState } from 'react'

// Styles
import './Carousel.scss'

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className='section-carousel'>
      <div className='carousel-left-arrow' onClick={prevSlide}>
        <img src="/img/Polygon 2.svg" alt="" />
      </div>
      <div className='carousel-right-arrow' onClick={nextSlide}>
        <img src="/img/Polygon 1.svg" alt="" />
      </div>
      <div className='carousel'>
        {slides.map((slide, index) => (
          <div
            className={index === current ? 'carousel-slide active' : 'carousel-slide'}
            key={index}
          >
            {index === current && (
              <>
                <div className='carousel-left'>
                  <img src={slide.image} alt="shoes" />
                </div>
                <div className='carousel-right'>
                  <h1 className='product-name'>{slide.name}</h1>
                  <p className='product-description'>{slide.description}</p>
                  <button className='product-btn'>Buy now</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className='carousel-indicators'>
        {slides.map((slide, index) => (
          <div
            className={index === current ? 'indicator active' : 'indicator'}
            key={index}
            onClick={()=> {setCurrent(index)}}
          >
          </div>
        ))}
      </div>
    </section>
  )
}
