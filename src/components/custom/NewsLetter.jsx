import { Button } from "../ui/button"
import { Input } from "../ui/input"


const NewsLetter = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 bg-[#2a317d] text-white py-10">
      <h1 className='font-barlow md:text-[62px] text-[31px] font-bold uppercase'>LET’S STAY IN TOUCH!</h1>

        <div className="w-3/4 flex justify-center items-center">
        <span className='font-barlow md:text-[30px] text-[15px] font-medium uppercase text-center' >Sign up now for gut health tips, exclusive offers, and new products. Check your inbox for 10% off your first order!</span>
        </div>

      <div className="w-fit flex justify-center items-center flex-row gap-0">
        <Input className="border-none outline-none font-barlow font-bold py-[23px] md:text-[25px] text-[16px] bg-white  rounded-tr-[0] rounded-br-[0] text-[#2a317d]" placeholder="Enter your Email here"/>
      <Button className=' uppercase font-rubik font-bold md:text-[20px] text-[16px] py-6 shadow-none bg-[#e21b79] text-white rounded-ss-[0] rounded-es-[0]'>
                    
                    sign up
        </Button>
      </div>
    </div>
  )
}

export default NewsLetter
