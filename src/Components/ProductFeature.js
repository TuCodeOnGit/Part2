
// styles
import './ProductFeature.scss'

export default function ProductFeature({ title, content }) {

  return (
    <section className='product-feature'>
      <h2 className='product-feature-title'>
        {title}
      </h2>
      <div className='products'>
        {content}
      </div>
    </section>
  )
}
