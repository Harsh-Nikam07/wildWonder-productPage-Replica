import './App.css'
import Footer from './components/custom/Footer'
import NewsLetter from './components/custom/NewsLetter'
import ProductDetails from './components/custom/ProductDetails'
import Stories from './components/custom/Stories'
// import productData from './constants'

function App() {
  return (
    <>
    <div className='mt-10 bg-[#fbf5e7]'>
      {/* {productData.products.map((product, index) => (
        <div key={index}>
          {product.images.map((image, i) => (
            <img key={i} src={image} alt={product.title} />
          ))}
        </div>
      ))} */}
    <ProductDetails/>
    <NewsLetter/>
    <Stories/>
    <Footer/>
    </div>

    </>
  )
}

export default App
