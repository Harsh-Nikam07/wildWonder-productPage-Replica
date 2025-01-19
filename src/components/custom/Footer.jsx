

const Footer = () => {
  return (
    <div className='w-full bg-[#2a317d] flex md:flex-row flex-col justify-center items-center py-8 font-rubik'>
      <div className='w-full flex md:flex-row flex-col md:justify-center justify-start md:items-center items-start max-w-6xl px-4 md:gap-0 gap-5 '>
        <div className='text-white'>
          <h3 className='font-bold'>SHOP</h3>
          <ul>
            <li>Variety Packs</li>
            <li>Our Flavors</li>
            <li>Subscribe & Save</li>
          </ul>
        </div>
        <div className='text-white'>
          <h3 className='font-bold'>SUPPORT</h3>
          <ul>
            <li>Find Us</li>
            <li>Shipping & Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Accessibility Options</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>
        <div className='text-white'>
          <h3 className='font-bold'>QUESTIONS</h3>
          <ul>
            <li>hello@drinkwildwonder.com</li>
          </ul>
        </div>
        <div className='text-white'>
          <h3 className='font-bold'>WHOLESALE</h3>
          <ul>
            <li>sales@drinkwildwonder.com</li>
            <li><a href="#" className='underline'>Buy wholesale products on Faire</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer
