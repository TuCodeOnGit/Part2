import { useParams } from "react-router-dom"

// api
import { useGetShoesDetailQuery } from '../api/apiSlice'

// Components
import ProductDetail from '../Components/ProductDetail';
import ProductFeature from '../Components/ProductFeature';
import ProductCard from '../Components/ProductCard'

export default function Detail() {
  let content
  let relatedProducts
  
  const { id } = useParams()
  
  const {
    data: shoes,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetShoesDetailQuery(id)

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = shoes.content
    relatedProducts = content.relatedProducts.map(shoe => {
      return (
        <ProductCard key={shoe.id} id={shoe.id} name={shoe.name} shortDescription={shoe.shortDescription} price={shoe.price} image={shoe.image} />
      )
    })
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <div>
      <ProductDetail shoes={content} />
      <ProductFeature title='-Related Product-' content={relatedProducts} />
    </div>
  )
}
