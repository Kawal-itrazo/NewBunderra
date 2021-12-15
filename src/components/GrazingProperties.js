import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import mainImg from './images/mainImg.jpeg'
import bpng from './images/Bpng.png'
import locationone from './images/location1.jpeg'
import locationtwo from './images/location2.jpeg'
import locationthree from './images/location3.jpeg'
import locationfour from './images/location4.jpeg'
import factory from './resizedImages/factory.jpeg'
import { Link } from 'react-router-dom'

const locations = [
  {
    name: 'Washpool',
    role: 'Humbolt QLD 4702',
    sqha: '9,378 ha',
    imageUrl: locationfour,
    bio: `High-value buffel grass and a wide variety of native grasses. Home to Bunderras's headquaters and where the operation was established in 1969`,
    cattle: ['Brahman', 'Santa Gertrudis'],
    staff: [
      'Station Manager',
      'Stationhands',
      'Labourers',
      'Cook',
      'Plant operator',
      'Nanny/ Governess',
    ],
    certification: [
      'Australian Certified Organic',
      'Animal Welfare Certified',
      'Certified Pasturefed',
      'MSA Graded Beef',
    ],
  },
  {
    name: 'Shauna Hills',
    role: 'Bauhinia QLD 4718',
    sqha: '6,014 ha',
    imageUrl: locationone,
    bio: `High-value buffel grass and a wide variety of native grasses. Home to Bunderras's headquaters and where the operation was established in 1969`,
    cattle: ['Brahman', 'Santa Gertrudis'],
    staff: [
      'Station Manager',
      'Stationhands',
      'Labourers',
      'Cook',
      'Plant operator',
      'Nanny/ Governess',
    ],
    certification: [
      'Australian Certified Organic',
      'Animal Welfare Certified',
      'Certified Pasturefed',
      'MSA Graded Beef',
    ],
  },
  {
    name: 'Brooklee',
    role: 'Rolleston QLD 4702',
    sqha: '4,342 ha',

    imageUrl: locationtwo,
    bio: `High-value buffel grass and a wide variety of native grasses. Home to Bunderras's headquaters and where the operation was established in 1969`,
    cattle: ['Brahman', 'Santa Gertrudis'],
    staff: [
      'Station Manager',
      'Stationhands',
      'Labourers',
      'Cook',
      'Plant operator',
      'Nanny/ Governess',
    ],
    certification: [
      'Australian Certified Organic',
      'Animal Welfare Certified',
      'Certified Pasturefed',
      'MSA Graded Beef',
    ],
  },
  {
    name: 'Bandana',
    role: 'Rewan QLD 4702',
    sqha: '44,750 ha',

    imageUrl: locationthree,
    bio: `High-value buffel grass and a wide variety of native grasses. Home to Bunderras's headquaters and where the operation was established in 1969`,
    cattle: ['Brahman', 'Santa Gertrudis'],
    staff: [
      'Station Manager',
      'Stationhands',
      'Labourers',
      'Cook',
      'Plant operator',
      'Nanny/ Governess',
    ],
    certification: [
      'Australian Certified Organic',
      'Animal Welfare Certified',
      'Certified Pasturefed',
      'MSA Graded Beef',
    ],
  },
]

function GrazingProperties(props) {
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
                    src={factory}
                    alt='Main image'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r   mix-blend-multiply' />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 bannerBox'>
                  <img
                    className='h-auto w-50 object-cover imgCenter imgCenterInternal'
                    src={bpng}
                    alt='Main image'
                  />
                  <h1
                    style={{ lineHeight: '1' }}
                    className='text-center fontHomeMob font100 fontBund block text-white font-extrabold tracking-tight mainTitleShadow wrap'
                  >
                    grazing properties
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <div className='relative'>
              <div className='bg-gray-400'>
                <div
                  style={{ paddingBottom: '30px' }}
                  className='lg:mx-auto lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-5 selectedBox wrap'
                >
                  <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 mt-0 mainPara'>
                    <div>
                      <div className=''>
                        <h1 className='text-4xl fontBund text-left lg:text-right  font-extrabold tracking-tight text-white font52'>
                          We've selected properties <br /> to grow the highest{' '}
                          <br /> quality beef
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 max-w-xl mx-auto sm:px-5 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 mainPara'>
                    <div>
                      <div className='mt-8'>
                        <p className='mt-4 fontSz text-sm text-left text-white fontRobotoReg fontLight selectedPara'>
                          Our breeding operation centeres around our Northern
                          Territory holdings at Murranji Station. Once weaned,
                          cattle are brought south to live out their days on
                          exceptionally beautiful fattening country in the
                          foothills of the Great Dividing Range. Our pastures
                          are regenerative, nutrient-rich and fed by natural
                          springs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gray-200'>
            <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 tabsBox'>
              <div className='space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0'>
                <div className='lg:col-span-2'>
                  <ul className='space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0'>
                    {locations.map((location) => (
                      <li
                        key={location.name}
                        className='sm:py-8 fontBund text-gray-400'
                      >
                        {/* <div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'> */}
                        <div className=' space-y-4 sm:grid sm:grid-cols-9 sm:items-start sm:gap-6 sm:space-y-0 tabBox'>
                          <div className='relative sm:col-span-4 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
                            {/* <div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'> */}
                            <img
                              className='object-cover h-96 tabImg '
                              src={location.imageUrl}
                              alt=''
                            />
                            <div className='viewGalleryBox'>
                              <span className='font14 fontRobotoReg text-base'>
                                View Gallery
                              </span>
                              <div className='expand'></div>
                            </div>
                          </div>
                          {/* <div className='sm:col-span-2'> */}
                          <div className='sm:col-span-5 tabTextBox'>
                            <div className='space-y-4'>
                              <div className='text-lg leading-6 font-medium space-y-1'>
                                <h1 className='font52 text-3xl fontBund'>
                                  {location.name}
                                </h1>
                                <p className='font16 text-gray-400 text-base fontRobotoReg'>
                                  {location.role}
                                </p>
                                <p className='font16 text-gray-400 text-base fontRobotoReg'>
                                  {location.sqha}
                                </p>
                              </div>
                              <div className='text-lg'>
                                <p className='font16 text-gray-400 text-base fontRobotoReg'>
                                  {location.bio}
                                </p>
                              </div>
                              <div>
                                <p
                                  className='font16 text-gray-400 text-base fontBund'
                                  style={{ marginBottom: '.5vw' }}
                                >
                                  Cattle
                                </p>
                                {location.cattle.map((rec) => (
                                  <span className='font16 text-gray-400 text-base fontRobotoReg spanCattle'>
                                    {rec}
                                  </span>
                                ))}
                              </div>
                              <div className='wordBreak'>
                                <p
                                  className='font16 text-gray-400  text-base fontBund'
                                  style={{ marginBottom: '.5vw' }}
                                >
                                  Certification
                                </p>
                                {location.certification.map((rec1) => (
                                  <Link
                                    to='/organiccertifiedbeef'
                                    className='noWrapWord'
                                  >
                                    <span className='font16 text-gray-400 text-base fontRobotoReg spanCattle'>
                                      {rec1}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                              <div className='wordBreak'>
                                <p
                                  className='font16 text-gray-400 fontBund'
                                  style={{ marginBottom: '.5vw' }}
                                >
                                  Staff
                                </p>
                                {location.staff.map((rec2) => (
                                  <Link to='/workforus' className='noWrapWord'>
                                    <span className='font16 text-gray-400 text-base fontRobotoReg spanCattle'>
                                      {rec2}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                              <div>
                                <p
                                  className='text-gray-400 text-base fontRobotoReg'
                                  style={{ marginBottom: '10px' }}
                                >
                                  We're often on the lookout to employ
                                  experienced stationhands,{' '}
                                  <Link to='/workforus'>
                                    <u>Find out about applying here.</u>
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
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

export default GrazingProperties
