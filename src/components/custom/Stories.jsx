import { Button } from "../ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
  } from "@/components/ui/carousel"
const Stories = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 bg-[#c3e8f1] text-white py-10">
      <h1 className='font-barlow md:text-[62px] text-[31px] font-bold uppercase'>CREATE #EVERYDAYWONDERS</h1>

        <div className=" flex justify-center items-center">
        <Carousel className="w-full ">
                        <CarouselContent className="w-[100%] flex justify-start items-center pl-4">
                                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                    <div className='flex md:justify-start justify-center md:items-start items-center flex-col gap-2'>
                                        <img src="/src/assets/products stories/1.jpg" alt="Story 1" className='w-[80%] aspect-square object-cover  rounded-3xl ' />
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                    <div className='flex md:justify-start justify-center md:items-start items-center flex-col gap-2'>
                                        <img src="/src/assets/products stories/2.jpg" alt="Story 1" className='w-[80%] aspect-square object-cover rounded-3xl ' />
                                    </div>
                                </CarouselItem>


                                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                    <div className='flex md:justify-start justify-center md:items-start items-center flex-col gap-2'>
                                        <img src="/src/assets/products stories/3.jpg" alt="Story 1" className='w-[80%] aspect-square object-cover rounded-3xl ' />
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                    <div className='flex md:justify-start justify-center md:items-start items-center flex-col gap-2'>
                                        <img src="/src/assets/products stories/4.jpg" alt="Story 1" className='w-[80%] aspect-square object-cover rounded-3xl ' />
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                    <div className='flex md:justify-start justify-center md:items-start items-center flex-col gap-2'>
                                        <img src="/src/assets/products stories/5.jpg" alt="Story 1" className='w-[80%] aspect-square object-cover rounded-3xl ' />
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                    <div className='flex md:justify-start justify-center md:items-start items-center flex-col gap-2'>
                                        <img src="/src/assets/products stories/6.jpg" alt="Story 1" className='w-[80%] aspect-square object-cover rounded-3xl ' />
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                    <div className='flex md:justify-start justify-center md:items-start items-center flex-col gap-2'>
                                        <img src="/src/assets/products stories/7.jpg" alt="Story 1" className='w-[80%] aspect-square object-cover rounded-3xl ' />
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                                    <div className='flex md:justify-start justify-center md:items-start items-center flex-col gap-2'>
                                        <img src="/src/assets/products stories/8.jpg" alt="Story 1" className='w-[80%] aspect-square object-cover rounded-3xl ' />
                                    </div>
                                </CarouselItem>

                        </CarouselContent>
                        {/* <CarouselPrevious className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white" />
                        <CarouselNext className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white" /> */}

        </Carousel>
        </div>

      <div className="w-fit flex justify-center items-center flex-row gap-0 mt-5">
      
      <Button className=' uppercase font-rubik font-bold text-[20px] py-6 shadow-none bg-[#e21b79] text-white rounded-xl'>
                    
                    FOLLOW @drinkwildwonder
        </Button>
      </div>
    </div>
  )
}

export default Stories
