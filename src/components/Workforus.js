import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import organicBeef from './images/OrganicBeef.jpeg'
import workforus from './resizedImages/workforus.jpeg'
function Workforus(props) {
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
        <div className='bg-white'>
          <div className='relative '>
            <div className=' max-w-full mx-auto  '>
              <div className='relative  max-w-full  sm:overflow-hidden'>
                <div className='absolute inset-0'>
                  <img
                    className='h-full w-full object-cover'
                    src={workforus}
                    alt='Main image'
                  />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-56 lg:px-8 smBannerBox'>
                  <h1 className='font100 text-center fontBund block  text-white text-4xl font-extrabold  sm:text-5xl lg:text-6xl mainTitleShadow'>
                    Work for us
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <div className='relative'>
              <div className='bg-gray-400'>
                <div className='lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-5 workForBox wrap'>
                  <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 mt-5 mainPara'>
                    <div>
                      <div>
                        <h1 className='font52 text-4xl fontBund md:mt-12 text-left lg:text-right font-extrabold tracking-tight text-white workForTitle'>
                          Looking for a job in the <br /> livestock industry?
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 mainPara'>
                    <div>
                      <div className='fontSz text-white text-base fontRobotoReg'>
                        {/* <p className='text-base'> */}
                        <p className='workPara'>
                          Bunderra Cattle Co is always looking for the right
                          candidates to fill a range of roles from station
                          manager to machine operators.
                        </p>
                        <br />
                        <p>
                          We work hard to foster a sense of community in our
                          workforce and welcome a diverse and varied range of
                          team members. We're committed to continued education
                          and training and offer ongoing opportunities for
                          career progression.
                        </p>
                        <br />

                        <button className='ml-2 mb-2 px-3 py-2 text-xl border bg-gray-600 rounded-xl fontRobotoReg'>
                          Apply now
                        </button>

                        <br />
                        <p>
                          Send your resume to the email below: <br />{' '}
                          admin@bunderracattleco.com.au
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Workforus
