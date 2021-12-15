import React, { useEffect } from 'react'

import Header from './Header'
import Footer from './Footer'
import organicBeef from './images/OrganicBeef.jpeg'
import certificateone from './images/location1.jpeg'
import organicCertification from './images/OrganicCertification.jpeg'
import cow from './resizedImages/cow.jpeg'
import CertLogos from './CertLogos'
import organiclogogreen from './images/organic-cert-logo-green.svg'
import pasturefedlogogreen from './images/pasturefed-logo-green.svg'
import welfarelogogreen from './images/welfare-logo-green.svg'

const certificates = [
  {
    title: 'Organic Certified',
    description: `Not all beef is created equally,and we believe that organic beef tastes better. There are a number of reasons for this.
    Organic livestock production is about good practises, like choosing quality breeding stock, looking after our country long-term and natural nutrition for our animals.
    Our cattle move together through their lives as a mob, grazing freely on bio-diverse pastures with ample shade, low est numbers, and access to some of the purest spring water on the planet.
    We never use antibiotics and sythetic hormones.
    We try to intervene in their lives as little as possible and when we do, we use low-stress stock handling techiques to ensure our impacts is minimal.
    The foundation of our business is about exceptional animal practices. We know that produces the highest-quality beef and for the past decade, has also enaled us to obtain organic certification. `,
    imageUrl: organicCertification,
  },
  {
    title: 'Quality Assurance',
    description: `We work hard to produce the highest-quality beef by caring for our livestock, the land and the environment. But we don't expect you to jsut take our word for it.  We engage independent consultants to help refine our internal processes and support us through annual auditing processes.  Maintaining trust with the people who eat our beef isn't something we leave to chance. We undertake a number of quality assurance programs to ensure that our meat is ethically produced and a premium quality. Our soil, water and grass is tested for contaminants, along with samples of our meat during processing.`,
    imageUrl: certificateone,
  },
]

function OrganicCertifiedBeef(props) {
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
                    src={cow}
                    alt='Main image'
                  />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-56 lg:px-8 smBannerBox wrap'>
                  <h1 className='font100 text-center fontBund block  text-white text-4xl font-extrabold  sm:text-5xl lg:text-6xl mainTitleShadow'>
                    Organic Certified Beef
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <div className='relative'>
              <div className='bg-gray-400'>
                <div className='lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-5 organicBox wrap'>
                  <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 md:mt-5 mainPara'>
                    <div>
                      <div>
                        <h1 className='font52 text-4xl md:font52 fontBund text-left lg:text-right  font-extrabold tracking-tight text-white'>
                          Organic and sustainable <br /> are more than just buzz{' '}
                          <br /> words to us.
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 mainPara'>
                    <div>
                      <div className='mt-10 certPara'>
                        <p className='fontSz text-base text-white fontRobotoReg'>
                          The trust the consumers of our beef place in us is
                          important to us. That's why we have put in place a
                          series of certifications and quality assurance checks
                          to ensure our beef maintains the highest quality and
                          lives up to the promise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gray-200' style={{ background: '#EDEDED' }}>
            <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 tabsBox'>
              <div className='space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0'>
                <div className='lg:col-span-2'>
                  <ul className='space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0 '>
                    {/* {certificates.map((certificate) => ( */}
                    <li className='sm:py-8'>
                      {/* <div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'> */}
                      <div className='space-y-4 sm:grid sm:grid-cols-9 sm:items-start sm:gap-6 sm:space-y-0 tabBox'>
                        {/* <div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'> */}
                        <div className='sm:col-span-4 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
                          <img
                            className='object-cover h-96 tabImg'
                            src={organicCertification}
                            alt=''
                          />
                        </div>
                        {/* <div className='sm:col-span-2'> */}
                        <div className='sm:col-span-5 tabTextBox'>
                          <div className='space-y-4'>
                            <div className='text-gray-400 leading-6 font-medium space-y-1'>
                              <h1 className='font52 text-4xl fontBund'>
                                Organic Certified
                              </h1>
                              <br />
                              <p
                                className='fontSz text-base fontRobotoReg'
                                style={{ color: '#92A2A2' }}
                              >
                                Not all beef is created equally,and we believe
                                that organic beef tastes better. There are a
                                number of reasons for this.
                              </p>
                              <p
                                className='fontSz text-base fontRobotoReg'
                                style={{ color: '#92A2A2', paddingTop: '10px' }}
                              >
                                {' '}
                                Organic livestock production is about good
                                practises, like choosing quality breeding stock,
                                looking after our country long-term and natural
                                nutrition for our animals.
                              </p>
                              <p
                                className='fontSz text-base fontRobotoReg'
                                style={{ color: '#92A2A2', paddingTop: '10px' }}
                              >
                                Our cattle move together through their lives as
                                a mob, grazing freely on bio-diverse pastures
                                with ample shade, low est numbers, and access to
                                some of the purest spring water on the planet.
                                We never use antibiotics and sythetic hormones.
                                We try to intervene in their lives as little as
                                possible and when we do, we use low-stress stock
                                handling techiques to ensure our impacts is
                                minimal.
                              </p>
                              <p
                                className='fontSz text-base fontRobotoReg'
                                style={{ color: '#92A2A2', paddingTop: '10px' }}
                              >
                                The foundation of our business is about
                                exceptional animal practices. We know that
                                produces the highest-quality beef and for the
                                past decade, has also enaled us to obtain
                                organic certification.
                              </p>
                              <div style={{ display: 'flex' }}>
                                <CertLogos logos={[organiclogogreen]} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='sm:py-8'>
                      {/* <div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'> */}
                      <div className='space-y-4 sm:grid sm:grid-cols-9 sm:items-start sm:gap-6 sm:space-y-0 tabBox'>
                        {/* <div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'> */}
                        <div className='sm:col-span-4 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
                          <img
                            className='object-cover h-96 tabImg'
                            src={certificateone}
                            alt=''
                          />
                        </div>
                        {/* <div className='sm:col-span-2'> */}
                        <div className='sm:col-span-5 tabTextBox'>
                          <div className='space-y-4'>
                            <div className='text-gray-400 leading-6 font-medium space-y-1'>
                              <h1 className='font52 text-4xl fontBund'>
                                Quality Assurance
                              </h1>
                              <br />
                              <p
                                className='fontSz text-base fontRobotoReg'
                                style={{ color: '#92A2A2' }}
                              >
                                We work hard to produce the highest-quality beef
                                by caring for our livestock, the land and the
                                environment. But we don't expect you to jsut
                                take our word for it.
                              </p>
                              <p
                                className='fontSz text-base fontRobotoReg'
                                style={{ color: '#92A2A2', paddingTop: '10px' }}
                              >
                                We engage independent consultants to help refine
                                our internal processes and support us through
                                annual auditing processes.{' '}
                              </p>
                              <p
                                className='fontSz text-base fontRobotoReg'
                                style={{ color: '#92A2A2', paddingTop: '10px' }}
                              >
                                {' '}
                                Maintaining trust with the people who eat our
                                beef isn't something we leave to chance. We
                                undertake a number of quality assurance programs
                                to ensure that our meat is ethically produced
                                and a premium quality. Our soil, water and grass
                                is tested for contaminants, along with samples
                                of our meat during processing.
                              </p>
                              <div
                                style={{ display: 'flex', marginTop: '3vh' }}
                              >
                                <CertLogos
                                  logos={[
                                    welfarelogogreen,
                                    pasturefedlogogreen,
                                  ]}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* ))} */}
                  </ul>
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

export default OrganicCertifiedBeef
