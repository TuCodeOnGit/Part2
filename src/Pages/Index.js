
// api
import { useGetShoesQuery } from '../api/apiSlice'

// Fake data for carousel
import { SliderData } from '../Components/SliderData'

// Components
import Carousel from '../Components/Carousel'
import ProductFeature from '../Components/ProductFeature'
import ProductCard from '../Components/ProductCard'

export default function Index() {
  const {
    data: shoes,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetShoesQuery()

  let content;
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = shoes.content.map(shoe => {
      return (
        <ProductCard key={shoe.id} id={shoe.id} name={shoe.name} shortDescription={shoe.shortDescription} price={shoe.price} image={shoe.image} />
      )
    })
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <>
      <Carousel slides={SliderData} />
      <ProductFeature title='-Product Feature-' content={content} />
    </>
  )
}
