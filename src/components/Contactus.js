import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import family from './images/family.jpeg'

function Contactus(props) {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  const goTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    const btn = document.getElementById('toTopBtn')
    window.onscroll = function () {
      scrollFunction()
    }

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        btn.style.display = 'block'
      } else {
        btn.style.display = 'none'
      }
    }
  }, [])
  return (
    <div className='flex flex-col overflow-hidden'>
      <div>
        <Header />
      </div>
      <button onClick={goTop} id='toTopBtn' title='Go to top'>
        <b>&#8679;</b>
      </button>
      <main className='flex-grow fixedPad'>
        <div className='relative '>
          <div className=' max-w-full mx-auto '>
            <div className='relative max-w-full  sm:overflow-hidden'>
              <div className='absolute inset-0'>
                <img
                  className='h-full w-full object-cover'
                  src={family}
                  alt='Main image'
                />
              </div>

              <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 smBannerBox'>
                {/* <h1 className="mx-auto fontBund text-4xl text-center mt-10  text-white font-extrabold">  */}

                <h1 className='font100 text-center fontBund block  text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mainTitleShadow'>
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className='w-4/5 md:w-1/3 mx-auto my-10 formContainer'>
          <div>
            <form>
              <div className='grid grid-cols-2 gap-5 fontRobotoReg'>
                <input
                  type='text'
                  className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-green-700'
                  placeholder='First Name'
                />

                <input
                  type='text'
                  className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-green-700'
                  placeholder='Last Name'
                />

                <select
                  type='text'
                  id='carType'
                  className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-green-700 text-gray-400'
                  name='carType'
                  v-model='carType'
                >
                  <option value='' disabled selected>
                    Inquiry - Select one option
                  </option>

                  <option value='Option 1'>Option 1</option>

                  <option value='Option 2'>Option 2</option>

                  <option value='Option 3'>Option 3</option>

                  <option value='Others'>Others</option>
                </select>

                <input
                  type='email'
                  className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-green-700'
                  placeholder='Email'
                />

                <input
                  type='tel'
                  className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-green-700'
                  placeholder='Phone'
                />

                <input
                  type='text'
                  className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-green-700'
                  placeholder='Industry'
                />

                <textarea
                  cols='10'
                  rows='5'
                  className='border border-gray-500 px-4 py-2 focus:outline-none focus:border-green-700 col-span-2'
                  placeholder='Message...'
                ></textarea>
              </div>

              <div className='fontRobotoReg' style={{ align: 'center' }}>
                <input
                  type='submit'
                  value='Send'
                  className='md:ml-32 md:w-3/5 text-white bg-gray-400 px-2 py-2 mx-auto mt-5 rounded-xl'

                  // className="sm:ml-24 md:ml-24 lg:ml-52 mt-5 focus:outline-none bg-gray-400 px-2 py-1 text-white font-bold font-face rounded-xl"

                  // className="focus:outline-none w-1/5 mt-5 ml-48 bg-gray-400 px-0 py-1 text-white font-bold rounded-xl"
                />
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contactus
