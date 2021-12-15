import React, { useState, useEffect } from 'react'
import HeaderA from './AboutHeader'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import kid from './resizedImages/Kid.jpeg'
import family from './resizedImages/family.jpeg'
import cow from './resizedImages/cow.jpeg'
import land from './resizedImages/land.jpeg'
import workforus from './resizedImages/workforus.jpeg'
import factory from './resizedImages/factory.jpeg'
import mainImg from './resizedImages/home-mainImg.png'
import bpng from './images/Bpng.png'

import organiccertlogo from './images/organic-cert-logo.svg'
// import organiccertlogo from './images/group-certs-logo.svg'
// import organiccertlogo from './images/GroupOrganic.png'
import pasturefedcertlogo from './images/pasturefed-cert-logo.png'
import welfarecertlogo from './images/welfare-cert-logo1.png'
import CertLogos from './CertLogos'

function Aboutus(props) {
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
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <div>
        <HeaderA />
      </div>
      <button onClick={goTop} id='toTopBtn' title='Go to top'>
        <b>&#8679;</b>
      </button>
      <main className='flex-grow'>
        <div className='bg-white'>
          <div className='relative '>
            <div className=' max-w-full mx-auto  '>
              <div className='mainHt relative max-w-full  sm:overflow-hidden'>
                <div
                  style={{ inset: '0', top: '-44px' }}
                  className='absolute inset-x-0'
                >
                  {/* Background Image */}
                  <img
                    className='w-full h-full object-cover'
                    src={mainImg}
                    alt='Main image'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r mix-blend-multiply' />
                </div>
                <div className='relative padDiv px-4 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                  {/* Logo Image */}
                  <img
                    className='h-auto w-50 object-cover imgCenter'
                    src={bpng}
                    alt='Main image'
                  />
                  {/* <h1 className='text-center fontHomeMob fontHome fontBund block text-white font-extrabold tracking-tight bannerTitle'> */}
                  {/* this is bunderra */}
                  {/* </h1><br/><h1 className="mb-3 text-center fontBund text-4xl extraBold">*/}
                  {/* </h1> */}
                  <h1
                    style={{ lineHeight: '1' }}
                    className='text-center fontHomeMob fontHome fontBund block text-white font-extrabold tracking-tight mb-40 sm:mb-28 mainTitleShadow'
                  >
                    this is bunderra
                    {/* </h1><br/><h1 className="mb-3 text-center fontBund text-4xl extraBold">*/}
                  </h1>

                  {/* Certification logos */}
                  <CertLogos
                    topCertLogos={true}
                    logos={[
                      organiccertlogo,
                      welfarecertlogo,
                      pasturefedcertlogo,
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <div className='relative'>
              <div className='bg-gray-400'>
                <div
                  style={{ paddingBottom: '30px' }}
                  className='lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-5 freeRangeBox wrap'
                >
                  <div className='px-4 max-w-xl mx-auto sm:px-6 sm:py-0 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 mt-0 mainPara'>
                    <div>
                      <div>
                        <h1 className='font52 font40 md:text-4xl pt-1 md:mt-5 fontBund text-left lg:text-right font-extrabold tracking-tight text-white freeRangeTitle'>
                          Free-range beef from the pure, grassy heart of
                          Australia.
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 max-w-xl mx-auto sm:px-5 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 mainPara'>
                    <div>
                      <div
                        className='mt-6'
                        style={{ paddingRight: '1.3rem', paddingTop: '0.2rem' }}
                      >
                        <p className='mt-4 fontSz font20 text-sm text-left text-white fontRobotoReg'>
                          Bunderra, or 'Among the Hills' is an organic beef
                          operation with over half a milllion hectares of some
                          of the best grazing country in Queensland and the
                          Nothern Territory.
                        </p>
                        <p className='mt-4 fontSz font20 text-sm text-left text-white fontRobotoReg'>
                          Our Brahman-Cross herd originated from the foothills
                          of the Carnavon Ranges in Queesnsland's Central
                          Highlands, and our cattle roam on those same
                          bio-diverse pastures, free of chemicals and stress.
                          They have an harmounious journey from paddock to
                          plate, and we believe that's why our beef tastes
                          better.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='max-w-full h-96 mx-auto '>
              <div className='relative shadow-xl '>
                <div className='absolute inset-0 kidImgBox'>
                  <img
                    className='h-96 w-full object-cover kidImg'
                    src={kid}
                    alt='Kid image'
                  />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 object-right kidTitleBox'>
                  {/* <h2 className='text-4xl fontBund text-left lg:text-right  font-extrabold tracking-tight text-white'> */}
                  <h2 className=' text-4xl fontBund text-left lg:text-right font-extrabold tracking-tight text-white kidTitle wrap'>
                    {/* <span className='block font52 font40 text-white pr-2 md:text-right fontBund'>
                      Australian owned
                      <br />
                      <br /> family run
                    </span> */}

                    <p className=' font52 font40 text-white pr-2 md:text-left fontBund mainTitleShadow'>
                      Australian owned family run
                    </p>
                    {/* <p className=' font52 font40 text-white pr-2 md:text-left fontBund'>
                      family run
                    </p> */}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className='backED'>
            {/* <div className='max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-5xl lg:pt-24 lg:px-8'> */}
            {/* <div className='max-w-4xl mx-auto px-4 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-5xl lg:px-8'> */}
            <div
              className='max-w-4xl mx-auto px-4 sm:px-6 sm:pb-24 lg:max-w-5xl lg:px-8 imgsBox wrap'
              // style={{ margin: '0 400px', padding: '0 0' }}
            >
              <div className='mt-10 flex items-center flex-cols-1 gap-x-3 gap-y-3 sm:flex-cols-2 footerImgBox'>
                <div className='pt-6 relative flex-auto firstColImg'>
                  <div style={{ position: 'relative' }}>
                    <Link
                      to='/organiccertifiedbeef'
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        className='object-cover flex items-center justify-center w-50 
                        bg-white bg-opacity-10 imgLink'
                        src={cow}
                        alt='Image one'
                      />
                      <p className='text-white md:text-base md:font-black md:fontReg linkTitle fontBund'>
                        Organic Certified Beef
                      </p>
                    </Link>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <Link to='/workforus' style={{ cursor: 'pointer' }}>
                      <img
                        className=' pt-3 object-cover flex items-center justify-center w-50
                        bg-white bg-opacity-10 imgLink'
                        src={workforus}
                        alt='Image one'
                      />
                      <p className='text-white  md:text-base md:font-black md:fontReg linkTitle fontBund'>
                        Work for Bunderra
                      </p>
                    </Link>
                  </div>
                  {/* <Link
                    to='/organiccertifiedbeef'
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className='object-cover flex items-center justify-center w-50 
                        bg-white bg-opacity-10 imgLink'
                      src={cow}
                      alt='Image one'
                    />
                   
                    <p className='text-white absolute top-10 lg:top-48 md:top-24 lg:left-16 md:left-10 md:text-base md:font-black md:fontReg '>
                      Organic Certified Beef
                    </p>
                  </Link>
                  
                  <Link to='/workforus' style={{ cursor: 'pointer' }}>
                    <img
                      className=' pt-3 object-cover flex items-center justify-center w-50
                        bg-white bg-opacity-10 imgLink'
                      src={workforus}
                      alt='Image one'
                    />
                    <p className='text-white absolute bottom-2 lg:bottom-10 md:bottom-8 md:absolute md:left-16  md:text-base md:font-black md:fontReg'>
                      Work for Bunderra
                    </p>
                  </Link> */}
                </div>
                <div className='relative pb-3 flex-auto'>
                  <div style={{ position: 'relative' }}>
                    <Link to='/grazingproperties' style={{ cursor: 'pointer' }}>
                      <img
                        className=' object-cover flex items-center justify-center h-50 w-50
                        bg-white bg-opacity-10 imgLink'
                        src={factory}
                        alt='Image one'
                      />
                      {/* <p className='text-white absolute top-10 lg:mt-32 md:mt-20 lg:left-24 md:left-12  md:text-base md:font-black md:fontReg'> */}
                      <p className='text-white  md:text-base md:font-black md:fontReg linkTitle fontBund'>
                        Our properties
                      </p>
                    </Link>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <Link to='/contactus' style={{ cursor: 'pointer' }}>
                      <img
                        className='pt-3  object-cover flex items-center justify-center h-50 w-50
                        bg-white bg-opacity-10 imgLink'
                        src={family}
                        alt='Image one'
                      />
                      {/* <p className='text-white absolute bottom-5 lg:left-28 md:left-16  md:text-base md:font-black md:fontReg'> */}
                      <p className='text-white  md:text-base md:font-black md:fontReg linkTitle fontBund'>
                        Contact us
                      </p>
                    </Link>
                  </div>
                </div>
                <div className=' relative flex-auto'>
                  <img
                    className='  object-cover items-center justify-center h-100 w-50
                        bg-white bg-opacity-10 imgLink'
                    src={land}
                    alt='Image one'
                  />
                  {/* <p className='text-white absolute bottom-2 lg:top-40 lg:left-14 md:top-36 md:left-10  md:text-base md:font-black md:fontReg'> */}
                  <p className='text-white md:text-base md:font-black md:fontReg linkTitle fontBund'>
                    Quality assurance
                  </p>
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

export default Aboutus
