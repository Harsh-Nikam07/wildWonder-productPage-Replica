import { productData, ingredients, reviews } from '@/constants'

import { useState, useEffect } from 'react'
import Rating from './Ratings'
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { GiCheckMark } from 'react-icons/gi'
import { Button } from '../ui/button'
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import doodle from '../../assets/doddle/arrow.avif'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

import billionprobiotics from "../../assets/benefits/1-billion-probiotics.avif"

import fivegdietaryfilber from "../../assets/benefits/5g-dietary-filber.avif"

import sugar from '../../assets/benefits/6g-sugar.webp'

import certifiedorganic from '../../assets/benefits/certified-organic.avif'


import gmpfree from '../../assets/benefits/gmp-free.png'

import vegan from '../../assets/benefits/vegan.png'


const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1) // Added state for quantity

  useEffect(() => {
    if (!selectedProduct) {
      setSelectedProduct(productData.products[0])
    }
  }, [selectedProduct])
  const [selectedOption, setSelectedOption] = useState('option-one')
  const handleOptionChange = value => {
    setSelectedOption(value) // Update the state properly
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  } // Function to decrement quantity

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  } // Function to increment quantity

  return (
        <>
        <div className='w-full h-auto flex justify-center md:items-start items-center md:flex-row flex-col gap-6 text-[#2a317d] mb-10 md:px-0 px-4'>
        <div className='relative md:w-[38%] w-[95%] h-auto z-[1]'>
            <div className='images-section flex justify-center items-center flex-col gap-2 sticky top-0'>
            <div className='main-image-section w-full'>
            {selectedProduct && (
                <img
                className='rounded-3xl border border-[#2a317d]'
                src={selectedProduct.mainImage || selectedProduct.images[0]}
                alt={selectedProduct.title}
                />
            )}
            </div>
            <div className='secondary-images-section w-full flex justify-start items-start flex-row gap-3'>
            {selectedProduct &&
                selectedProduct.images.map((image, i) => (
                <img
                    className='md:w-[32%] w-[31%] rounded-3xl cursor-pointer border border-[#2a317d]'
                    key={i}
                    src={image}
                    alt={selectedProduct.title}
                    onClick={() =>
                    setSelectedProduct(prevState => ({
                        ...prevState,
                        mainImage: image
                    }))
                    }
                />
                ))}
            </div>
        </div>
        </div>
      <div className='details-section md:w-[38%] w-[95%] flex justify-center items-center flex-col '>
        <div className='w-full flex justify-start items-start flex-col gap-2'>
          {selectedProduct && (
            <>
              <div className='flex justify-start items-start flex-col gap-2 mt-4'>
                <span className='text-[50px]  uppercase  font-semibold  font-barlow leading-6'>
                  {selectedProduct.title}
                </span>
                <div>
                  <span className='uppercase md:text-[23px] text-[20px]'>
                    <span className='font-semibold font-barlow'>
                      {selectedProduct.quantity}
                    </span>{' '}
                    |{' '}
                    <span className='font-barlow'>
                      {selectedProduct.subtitle}
                    </span>
                  </span>
                </div>
              </div>
              <div className='font-barlow text-[20px] flex justify-start items-center flex-row gap-3'>
                <div>
                  <Rating rating={Math.floor(selectedProduct.rating)} />
                </div>
                <span>{selectedProduct.total_reviews} REVIEWS</span>
              </div>
              <p className='font-barlow text-[23px] leading-6 font-light'>
                {selectedProduct.description}
              </p>

              <span className='text-[23px] font-normal font-barlow mb-2 mt-6'>
                CHOOSE YOUR FLAVOR{' '}
                <span className='font-bold uppercase'>
                  {selectedProduct.title}
                </span>
              </span>
              <div className='w-full flex justify-start items-start flex-row gap-3'>
                {productData.products.map((product, index) => (
                  <div key={index} onClick={() => setSelectedProduct(product)}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className={`w-28 md:rounded-3xl rounded-2xl cursor-pointer ${
                        selectedProduct === product
                          ? 'border-2 border-[#2a317d]'
                          : ''
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className='purchase-section w-full mt-5'>
                <div className='w-full flex justify-start items-center flex-col gap-3'>
                  <RadioGroup
                    value={selectedOption}
                    onValueChange={handleOptionChange}
                    className='w-full'
                  >
                    {/* Option One */}
                    <div
                      className={`w-full flex items-center space-x-2 px-2 py-4 rounded-2xl ${
                        selectedOption === 'option-one'
                          ? 'border-[#2a317d]'
                          : 'border-gray-300'
                      } border-[3px]`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedOption === 'option-one'
                            ? 'border-[#2a317d]'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedOption === 'option-one' && (
                          <div className='w-3 h-3 bg-[#2a317d] rounded-full'></div>
                        )}
                      </div>
                      <Label
                        htmlFor='option-one'
                        className='w-full cursor-pointer'
                        onClick={() => handleOptionChange('option-one')}
                      >
                        <div className='w-full flex justify-between items-center flex-row'>
                          <span className='md:text-[20px] text-[16px] font-rubik font-bold'>
                            One-time Purchase{' '}
                            <span className='font-light md:ml-3'>12 Pack</span>
                          </span>
                          <span className='md:text-[20px] text-[16px] font-rubik font-bold'>
                            Rs.{selectedProduct.prices.one_time_purchase}
                          </span>
                        </div>
                      </Label>
                    </div>

                    {/* Option Two */}
                    <div
                      className={`w-full flex justify-start items-center flex-col gap-4  px-2 py-4 rounded-2xl ${
                        selectedOption === 'option-two'
                          ? 'border-[#2a317d]'
                          : 'border-gray-300'
                      } border-[3px]`}
                    >
                      <div className='w-full flex justify-start items-center flex-row'>
                        <div
                          className={`w-5 h-5 mr-2 rounded-full border-2 flex items-center justify-center ${
                            selectedOption === 'option-two'
                              ? 'border-[#2a317d]'
                              : 'border-gray-300'
                          }`}
                        >
                          {selectedOption === 'option-two' && (
                            <div className='w-3 h-3 bg-[#2a317d] rounded-full'></div>
                          )}
                        </div>
                        <Label
                          htmlFor='option-two'
                          className='w-full cursor-pointer'
                          onClick={() => handleOptionChange('option-two')}
                        >
                          <div className='w-full flex justify-between items-center flex-row'>
                            <span className='md:text-[20px] text-[16px] font-rubik font-bold'>
                              Subscribe & Save
                            </span>
                            <span className='md:text-[20px] text-[16px] font-rubik font-bold'>
                              <span className='mr-2 line-through text-gray-300'>
                                Rs.{selectedProduct.prices.one_time_purchase}
                              </span>
                              Rs.{selectedProduct.prices.subscribe_and_save}
                            </span>
                          </div>
                        </Label>
                      </div>

                      <div className='w-full'>
                        <Select>
                          <SelectTrigger className='w-full border-[3px] border-[#2a317d] rounded-xl text-[20px] font-rubik font-bold py-2'>
                            <SelectValue placeholder='Delivery every 4 weeks - 15% off ' />
                          </SelectTrigger>
                          <SelectContent className='bg-[#003bff] rounded-2xl'>
                            <SelectItem
                              value='delivery1'
                              className='text-[20px] font-rubik font-bold text-white hover:bg-[#34a0ff] rounded-xl'
                            >
                              Delivery every 4 weeks - 15% off{' '}
                            </SelectItem>
                            <SelectItem
                              value='delivery2'
                              className='text-[20px] font-rubik font-bold text-white hover:bg-[#34a0ff] rounded-xl'
                            >
                              Delivery every 8 weeks - 15% off{' '}
                            </SelectItem>
                            <SelectItem
                              value='delivery3'
                              className='text-[20px] font-rubik font-bold text-white hover:bg-[#34a0ff] rounded-xl'
                            >
                              Delivery every 12 weeks - 25% off{' '}
                            </SelectItem>
                            <SelectItem
                              value='delivery4'
                              className='text-[20px] font-rubik font-bold text-white hover:bg-[#34a0ff] rounded-xl'
                            >
                              Delivery every 2 weeks - 15% off{' '}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className='w-full flex justify-start items-start flex-col gap-2 md:px-5 px-1'>
                        <span className='flex justify-start items-center flex-row gap-3 font-rubik'>
                          <GiCheckMark /> Change or cancel anytime
                        </span>
                        <span className='flex justify-start items-center flex-row gap-3 font-rubik'>
                          <GiCheckMark /> Exclusive gifts + discounts
                        </span>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className='w-full flex justify-start items-center flex-row gap-2 mt-5'>
                <div className='counter-qty-section w-1/4 flex justify-start items-center '>
                    <div className='w-full flex justify-center items-center flex-row md:gap-5 gap-3 border-2 border-[#2a317d] py-[9px] rounded-xl'>
                        <button
                            
                            onClick={decrementQuantity}
                        >

                            <FiMinus/>
                        </button>
                        <span className='text-lg font-semibold'>{quantity}</span>
                        <button
                            
                            onClick={incrementQuantity}
                        >
                            <LuPlus/>
                        </button>
                    </div>
                </div>
                <div className='add-to-cart w-3/4'>
                  <Button className='w-full uppercase font-rubik font-bold text-[20px] py-6 shadow-none bg-[#e21b79] text-white rounded-xl'>
                    
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className='w-full flex justify-start items-center flex-row gap-2'>
                <div className='counter-qty-section w-1/4 flex justify-end items-center '>
                    <img src={doodle}  className='w-14'/>
                </div>
                <div className='add-to-cart w-3/4 mt-4'>
                <span className='md:text-[20px] text-[16px] font-rubik'>Order 2+ for <span className='font-semibold font-rubik bg-yellow-500 text-[20px] text-white px-1'>FREE SHIPPING!</span></span>
                </div>
              </div>

              <div className='w-full tabs-section mb-0 mt-5'>
                <Tabs defaultValue="benefits" className="w-full transition-all duration-500 ease-in-out">
                    <TabsList className="w-full flex justify-start items-start p-0 shadow-none rounded-xl">
   
                        <TabsTrigger value="benefits" className="bg-[#c3e8f1] w-1/3 mb-0  shadow md:text-[23px] text-[16px] font-barlow font-semibold py-4 rounded-xl uppercase ">benefits</TabsTrigger>
                        <TabsTrigger value="ingredients" className="bg-[#bce194] w-1/3 mb-0 shadow md:text-[23px] text-[16px] font-barlow font-semibold py-4 rounded-xl uppercase">Ingredients</TabsTrigger>
                        <TabsTrigger value="nutrition" className="bg-[#fde282] w-1/3 mb-0 shadow md:text-[23px] text-[16px] font-barlow font-semibold py-4 rounded-xl uppercase">nutrition facts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="benefits" className="bg-[#c3e8f1] mt-[-14px] px-3 py-3 pt-14 rounded-xl transition-opacity duration-500 ease-in-out">
                        <div className='w-full grid grid-cols-3 gap-2'>
                            <div className='flex justify-center items-center flex-col gap-2  mt-3'>
                                <img src={certifiedorganic} alt="" className='md:w-20 w-14' />
                                <span className='md:text-[23px] text-[16px] font-barlow font-semibold uppercase'>CERTIFIED ORGANIC</span>
                            </div>

                            <div className='flex justify-center items-center flex-col gap-2  mt-3'>
                                <img src={billionprobiotics} alt="" className='md:w-20 w-14' />
                                <span className='md:text-[23px] text-[16px] font-barlow font-semibold uppercase'>1 BILLION PROBIOTICS</span>
                            </div>

                            <div className='flex justify-center items-center flex-col gap-2  mt-3'>
                                <img src={fivegdietaryfilber} alt="" className='md:w-20 w-14' />
                                <span className='md:text-[23px] text-[16px] font-barlow font-semibold uppercase'>5g DIETARY FIBER</span>
                            </div>

                            <div className='flex justify-center items-center flex-col gap-2 mt-3'>
                                <img src={sugar} alt="" className='md:w-20 w-14' />
                                <span className='md:text-[23px] text-[16px] font-barlow font-semibold uppercase'>6g SUGAR</span>
                            </div>


                            <div className='flex justify-center items-center flex-col gap-2 mt-3'>
                                <img src={gmpfree} alt="" className='md:w-20 w-14' />
                                <span className='md:text-[23px] text-[16px] font-barlow font-semibold uppercase'>GMO Free</span>
                            </div>
                            <div className='flex justify-center items-center flex-col gap-2 mt-3'>
                                <img src={vegan} alt="" className='md:w-20 w-14' />
                                <span className='md:text-[23px] text-[16px] font-barlow font-semibold uppercase'>Vegan</span>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="ingredients"  className="bg-[#bce194] mt-[-14px] px-3 py-3 pt-14 rounded-xl transition-opacity duration-500 ease-in-out">
                        <div className='w-full flex justify-start items-start flex-col gap-2'>
                            <span className='font-barlow font-semibold text-[20px] uppercase'>{selectedProduct.title}</span>
                            <span className='font-barlow font-normal text-[20px]'>{selectedProduct.ingredients}</span>
                        </div>
                    </TabsContent>
                    <TabsContent value="nutrition"  className="bg-[#fde282] mt-[-14px] px-3 py-3 pt-14 rounded-xl transition-opacity duration-500 ease-in-out">
                        <div className='w-full flex justify-center items-center flex-col gap-2 px-1 font-barlow font-normal text-[20px]'>
                            <div className='w-full flex justify-between items-center flex-row border-b-2 border-[#2a317d] pb-2'>
                                <span>Serving Size</span>
                                <span>1 Can</span>
                            </div>

                            <div className='w-full flex justify-between items-center flex-row border-b-2 border-[#2a317d] pb-2'>
                                <span>Calories</span>
                                <span>40</span>
                            </div>


                            <div className='w-full flex justify-between items-center flex-row border-b-2 border-[#2a317d] pb-2'>
                                <span>Total Fat	</span>
                                <span>0g</span>
                            </div>


                            <div className='w-full flex justify-between items-center flex-row border-b-2 border-[#2a317d] pb-2'>
                                <span>Sodium	</span>
                                <span>0mg</span>
                            </div>

                            <div className='w-full flex justify-between items-center flex-row border-b-2 border-[#2a317d] pb-2'>
                                <span>Total Carbohydrates	</span>
                                <span>12g</span>
                            </div>


                            <div className='w-full flex justify-between items-center flex-row border-b-2 border-[#2a317d] pb-2'>
                                <span>Dietary Fiber	</span>
                                <span>5g</span>
                            </div>


                            <div className='w-full flex justify-between items-center flex-row border-b-2 border-[#2a317d] pb-2'>
                                <span>Total Sugars	</span>
                                <span>6g</span>
                            </div>

                            <div className='w-full flex justify-between items-center flex-row border-b-2 border-[#2a317d] pb-2'>
                                <span>Protein</span>
                                <span>0g</span>
                            </div>

                        </div>
                        </TabsContent>
                </Tabs>



              </div>
            </>
          )}
        </div>
      </div>

    </div>


            <div className='w-full flex justify-center items-center flex-col text-[#2a317d] '>
                {/* <img src={wave} alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#facad1" fillOpacity="1" d="M0,128L40,144C80,160,160,192,240,208C320,224,400,224,480,208C560,192,640,160,720,154.7C800,149,880,171,960,186.7C1040,203,1120,213,1200,202.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                <div className='bg-[#facad1] w-full flex justify-center items-center flex-col gap-3 pb-12'>
                    <h1 className='font-barlow md:text-[62px] text-[31px] font-bold uppercase'>You may also like</h1>
                    <Carousel className="w-full ">
                        <CarouselContent className="w-[100%] flex justify-start items-center pl-4">
                            {productData.products.slice(0, 4).map((product, index) => (
                                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                                    <div className='flex justify-center items-center flex-col gap-2'>
                                        <img src={product.images[0]} alt={product.title} className='w-full rounded-3xl border-2 border-[#2a317d]' />
                                        <span className='text-center text-[32px] font-bold font-barlow uppercase'>{product.title}</span>
                                        <span className='text-center text-[20px] text-[#e21b79] font-barlow'>Rs. {product.prices.one_time_purchase}</span>
                                        <div className='w-full'>
                                            <Button className='w-full uppercase font-rubik font-bold text-[20px] py-6 shadow-none bg-[#e21b79] text-white rounded-xl'>
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white" />
                        <CarouselNext className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white" />
                    </Carousel>

                </div>

            </div>

            <div className='w-full flex justify-center items-center flex-col text-[#2a317d] mb-12'>
                {/* <img src={wave} alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#c3e8f1" fillOpacity="1" d="M0,128L40,144C80,160,160,192,240,208C320,224,400,224,480,208C560,192,640,160,720,154.7C800,149,880,171,960,186.7C1040,203,1120,213,1200,202.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                <div className='bg-[#c3e8f1] w-full flex justify-center items-center flex-col gap-3 pb-12'>
                    <h1 className='font-barlow md:text-[62px] text-[31px] font-bold uppercase'>You may also like</h1>
                    <Carousel className="w-full ">
                        <CarouselContent className="w-[100%] flex justify-start items-center pl-4">
                        {ingredients.ingredients.map((ingredient, index) => (
                                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                                    <div className='flex justify-start items-start flex-col gap-2'>
                                        <img src={ingredient.image} alt={ingredient.name} className='w-[100%] rounded-3xl ' />
                                        <span className=' md:text-[32px] text-[25px] font-bold font-barlow uppercase'>{ingredient.name}</span>
                                        <span className=' text-[20px]  text-[#e21b79] font-barlow'>{ingredient.description}</span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                    </Carousel>

                </div>
            </div>





              <div className='w-full flex justify-center items-center flex-col gap-3 px-6 mb-10 text-[#2a317d]'>
                <h1 className='font-barlow md:text-[62px] text-[31px] font-bold uppercase'>customer reviews</h1>
                <div className='w-full flex justify-center items-center flex-col gap-1'>
                  <div className='w-full flex justify-center items-center'><Rating rating={selectedProduct ? selectedProduct.rating : 0} /></div>
                  <span>Based on {selectedProduct ? selectedProduct.total_reviews : 0} REVIEWS</span>
                </div>

                <div className='w-full grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-4'>
                  {reviews.reviews.map((review, index) => (
                    <Card key={index} className="rounded-3xl bg-[#c3e8f1]">
                      <CardHeader>
                        <CardTitle>
                          <div className='w-full flex justify-between items-center flex-row'>
                            <div>
                              <Rating rating={review.rating} />  
                            </div>
                            <div>
                              {review.date}
                            </div>
                          </div>
                          </CardTitle>

                        <CardDescription></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className='w-full flex justify-start items-start flex-col gap-3'>
                          <span>{review.name}</span>
                          <span>{review.comment}</span>
                        </div>
                      </CardContent>

                    </Card>
                  ))}

                </div>
              </div>





            
        </>
  )
}

export default ProductDetails
