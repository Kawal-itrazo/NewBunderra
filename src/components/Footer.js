import React from 'react'
import { Link } from 'react-router-dom'
import CertLogos from './CertLogos'
import buderralogo from './images/Blogo.png'
// import organiccertlogo from './images/organic-cert-logo2.png'
// import organiccertlogo from './images/group-certs-logo.svg'
// import pasturefedcertlogo from './images/pasturefed-cert-logo.png'
// import welfarecertlogo from './images/welfare-cert-logo.png'
import footerLogo from './images/footerLogo.svg'
import organiccertlogo from './images/organic-cert-logo.svg'
// import organiccertlogo from './images/group-certs-logo.svg'
// import organiccertlogo from './images/GroupOrganic.png'
import pasturefedcertlogo from './images/pasturefed-cert-logo.png'
import welfarecertlogo from './images/welfare-cert-logo1.png'
const nav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Grazing Properties', href: '/grazingproperties' },
  { name: 'Organic Certified Beef', href: '/organiccertifiedbeef' },
  { name: 'Work For Us', href: '/workforus' },
  { name: 'Contact Us', href: '/contactus' },
]

const locationsone = [
  { name: 'Washpool', location: 'Humbolt QLD 4702' },
  { name: 'Shauna Hills', location: 'Bauhina QLD 4718' },
  { name: 'Crescent', location: 'Rolleston QLD ' },
  { name: 'Brooklee', location: 'Rolleston QLD ' },
  { name: 'Murranji', location: 'Saly Saters NT ' },
]
const locationstwo = [
  { name: 'Deepdale', location: 'Roleston QLD ' },
  { name: 'Mt Ogg', location: 'Roleston QLD ' },
  { name: 'Mt Ingils', location: 'Rolleston QLD ' },
  { name: 'Maryvale', location: 'Alpha QLD 4724' },
  { name: 'Bandana', location: 'Rewan QLD 4702 ' },
]
console.log(
  <ul>
    {locationsone.map((l) => {
      ;<li key={l.name}>
        <h3 className=' text-sm font-semibold text-gray-400 tracking-wider uppercase'>
          {l.name}{' '}
        </h3>
        <p className='text-base text-gray-500 hover:text-gray-900'>
          {' '}
          {l.location}{' '}
        </p>
      </li>
    })}
  </ul>
)

function Footer(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    
    window.addEventListener("resize", () => setWidth(window.innerWidth));

  }, []);
 
  return (
    <footer className='' aria-labelledby='footer-heading'>
      <div style={{ backgroundColor: '#657676' }}>
        <div className='footerLogos wrap'>
        <CertLogos topCertLogos={true} logos={[organiccertlogo,welfarecertlogo,pasturefedcertlogo]} />

        </div>
      </div>
      <div className='wrap footWrap'>
     
         {width > '850' ?(
          <>
           <div className='widthImg'>
            <img className='mx-auto w-6/12 sm:h-30 md:mx-auto lg:block lg:mb-28 footerLogoImg'
                  //className="hidden lg:block h-auto w-auto"
                  src={buderralogo}
                  alt='Logo'
                />

          </div>
          <div className='bunderraSoc'>
          <div className=' mt-2 md:mt-1'>
                <h3 className='font16 fontXs md:text-sm font-semibold text-gray-400 tracking-wider fontBund'>
                  Bunderra Cattle Company Pty Ltd
                </h3>
                {/* <h3 className="text-sm font-semibold text-gray-400 tracking-wider fontReg">Bunderra Cattle Company Pty Ltd</h3> */}
                <ul role='list' className=' space-y-4 footerSocialList'>
                  <li className='fontXs md:text-base text-gray-400 fontRobotoReg'>
                    ABN 93 976 106 830
                  </li>
                  <li className='fontXs md:text-base text-gray-400 underline break-all fontRobotoReg'>
                    <a
                      href='mailto:admin@bunderracattleco.com.au?subject=Me&body=Hello!'
                      style={{ cursor: 'pointer' }}
                    >
                      admin@bunderracattleco.com.au
                    </a>
                    {/* <a to='/contactus' style={{ cursor: 'pointer' }}>
                      admin@bunderracattleco.com.au
                    </a> */}
                  </li>

                  <li
                    className='fontXs md:text-base text-gray-400 hover:text-gray-900'
                    style={{ cursor: 'pointer' }}
                  >
                    <svg
                      fill='currentColor'
                      viewBox='0 0 25 25'
                      class='h-10 w-10 inline-block'
                      // viewBox='0 0 24 24'
                      style={{ paddingRight: '4px' }}
                      // class='h-6 w-6 inline-block'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>

                    <a
                      href='https://www.facebook.com/bunderracattleco'
                      target='_blank'
                      className='fontXs md:text-base text-gray-400 extrabold break-all fontRobotoReg'
                      rel='noreferrer'
                    >
                      fb.com/bunderracattleco
                    </a>
                  </li>
                  <li
                    className='fontXs md:text-base extrabold text-gray-400 hover:text-gray-900'
                    style={{ cursor: 'pointer' }}
                  >
                    <svg
                      fill='currentColor'
                      viewBox='0 0 25 25'
                      class='h-10 w-10 inline-block'
                      // viewBox='0 0 24 24'
                      style={{ paddingRight: '4px' }}
                      // class='inline-block h-6 w-6'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <a
                      href='https://www.instagram.com/bunderracattleco/?hl=en'
                      target='_blank'
                      className='fontXs md:text-base text-gray-400 extrabold fontRobotoReg'
                      rel='noreferrer'
                    >
                      @bunderracattleco
                    </a>
                  </li>
                </ul>
              </div>
           
          </div>
          <div className='linksBun'>
          <div className='mt-2 md:mt-0'>
                <ul className='footerList'>
                  {locationsone.map((l) => (
                    <li key={l.name} className='py-3'>
                      <h3 className='font16 fontXs md:text-sm font-extrabold text-gray-400 tracking-wider fontBund'>
                        {l.name}
                      </h3>
                      <p className='fontXs md:text-base text-gray-400 hover:text-gray-900 fontRobotoReg footerLocationText'>
                        {' '}
                        {l.location}{' '}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
             
          </div>
          <div className='linksBun'>
                <div className='mt-2 md:mt-0'>
                  <div className='mt-2 md:mt-0'>
                <ul className='footerList footerList2'>
                  {locationstwo.map((l) => (
                    <li key={l.name} className='py-3'>
                      <h3 className='font16 fontXs md:text-sm font-extrabold text-gray-400 tracking-wider fontBund'>
                        {l.name}
                      </h3>
                      <p className='fontXs md:text-base text-gray-400 hover:text-gray-900 fontRobotoReg footerLocationText'>
                        {' '}
                        {l.location}{' '}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
          
              </div>
                </div>
          <div className='linksBunLi'>
                <div className='mt-2 md:mt-0'>
                <ul role='list' className=' space-y-2 footerLinkList'>
                  {nav.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className='fontXs md:text-base underline text-gray-400 hover:text-gray-900 fontRobotoReg'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
           
                </div>
          <div style={{clear:'both'}}></div>
          </>

        ): (
          <>
          {width > '480' ?(
            <>
               <div className='leftRes'>
            <div className='widthImg'>
              <img className='mx-auto w-6/12 sm:h-30 md:mx-auto lg:block lg:mb-28 footerLogoImg'
                    //className="hidden lg:block h-auto w-auto"
                    src={buderralogo}
                    alt='Logo'
                  />

            </div>
            <div className='bunderraSoc'>
            <div className=' mt-2 md:mt-1'>
                  <h3 className='font16 fontXs md:text-sm font-semibold text-gray-400 tracking-wider fontBund'>
                    Bunderra Cattle Company Pty Ltd
                  </h3>
                  {/* <h3 className="text-sm font-semibold text-gray-400 tracking-wider fontReg">Bunderra Cattle Company Pty Ltd</h3> */}
                  <ul role='list' className=' space-y-4 footerSocialList'>
                    <li className='fontXs md:text-base text-gray-400 fontRobotoReg'>
                      ABN 93 976 106 830
                    </li>
                    <li className='fontXs md:text-base text-gray-400 underline break-all fontRobotoReg'>
                      <a
                        href='mailto:admin@bunderracattleco.com.au?subject=Me&body=Hello!'
                        style={{ cursor: 'pointer' }}
                      >
                        admin@bunderracattleco.com.au
                      </a>
                      {/* <a to='/contactus' style={{ cursor: 'pointer' }}>
                        admin@bunderracattleco.com.au
                      </a> */}
                    </li>

                    <li
                      className='fontXs md:text-base text-gray-400 hover:text-gray-900'
                      style={{ cursor: 'pointer' }}
                    >
                      <svg
                        fill='currentColor'
                        viewBox='0 0 25 25'
                        class='h-10 w-10 inline-block'
                        // viewBox='0 0 24 24'
                        style={{ paddingRight: '4px' }}
                        // class='h-6 w-6 inline-block'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>

                      <a
                        href='https://www.facebook.com/bunderracattleco'
                        target='_blank'
                        className='fontXs md:text-base text-gray-400 extrabold break-all fontRobotoReg'
                        rel='noreferrer'
                      >
                        fb.com/bunderracattleco
                      </a>
                    </li>
                    <li
                      className='fontXs md:text-base extrabold text-gray-400 hover:text-gray-900'
                      style={{ cursor: 'pointer' }}
                    >
                      <svg
                        fill='currentColor'
                        viewBox='0 0 25 25'
                        class='h-10 w-10 inline-block'
                        // viewBox='0 0 24 24'
                        style={{ paddingRight: '4px' }}
                        // class='inline-block h-6 w-6'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                      <a
                        href='https://www.instagram.com/bunderracattleco/?hl=en'
                        target='_blank'
                        className='fontXs md:text-base text-gray-400 extrabold fontRobotoReg'
                        rel='noreferrer'
                      >
                        @bunderracattleco
                      </a>
                    </li>
                  </ul>
                </div>
              
            </div>
            <div className='linksBunLi'>
              <div className='mt-2 md:mt-0'>
              <ul role='list' className=' space-y-2 footerLinkList'>
                {nav.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className='fontXs md:text-base underline text-gray-400 hover:text-gray-900 fontRobotoReg'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          
              </div>
       
           </div>
          <div className='rightRes'>
          <div className='linksBun'>
          <div className='mt-2 md:mt-0'>
                <ul className='footerList'>
                  {locationsone.map((l) => (
                    <li key={l.name} className='py-3'>
                      <h3 className='font16 fontXs md:text-sm font-extrabold text-gray-400 tracking-wider fontBund'>
                        {l.name}
                      </h3>
                      <p className='fontXs md:text-base text-gray-400 hover:text-gray-900 fontRobotoReg footerLocationText'>
                        {' '}
                        {l.location}{' '}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              
          </div>
          <div className='linksBun'>
                <div className='mt-2 md:mt-1'>
                  <div className='mt-2 md:mt-0'>
                <ul className='footerList footerList2'>
                  {locationstwo.map((l) => (
                    <li key={l.name} className='py-3'>
                      <h3 className='font16 fontXs md:text-sm font-extrabold text-gray-400 tracking-wider fontBund'>
                        {l.name}
                      </h3>
                      <p className='fontXs md:text-base text-gray-400 hover:text-gray-900 fontRobotoReg footerLocationText'>
                        {' '}
                        {l.location}{' '}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
          
              </div>
                </div>
          
          </div>
          <div style={{clear:'both'}}></div>
            </>
          ):  <>
          <div className='leftRes'>
            <div className='widthImg'>
              <img className='mx-auto w-6/12 sm:h-30 md:mx-auto lg:block lg:mb-28 footerLogoImg'
                    //className="hidden lg:block h-auto w-auto"
                    src={buderralogo}
                    alt='Logo'
                  />

            </div>
            <div className='bunderraSoc'>
            <div className=' mt-2 md:mt-0'>
                  <h3 className='font16 fontXs md:text-sm font-semibold text-gray-400 tracking-wider fontBund'>
                    Bunderra Cattle Company Pty Ltd
                  </h3>
                  {/* <h3 className="text-sm font-semibold text-gray-400 tracking-wider fontReg">Bunderra Cattle Company Pty Ltd</h3> */}
                  <ul role='list' className=' space-y-4 footerSocialList'>
                    <li className='fontXs md:text-base text-gray-400 fontRobotoReg'>
                      ABN 93 976 106 830
                    </li>
                    <li className='fontXs md:text-base text-gray-400 underline break-all fontRobotoReg'>
                      <a
                        href='mailto:admin@bunderracattleco.com.au?subject=Me&body=Hello!'
                        style={{ cursor: 'pointer' }}
                      >
                        admin@bunderracattleco.com.au
                      </a>
                      {/* <a to='/contactus' style={{ cursor: 'pointer' }}>
                        admin@bunderracattleco.com.au
                      </a> */}
                    </li>

                    <li
                      className='fontXs md:text-base text-gray-400 hover:text-gray-900'
                      style={{ cursor: 'pointer' }}
                    >
                      <svg
                        fill='currentColor'
                        viewBox='0 0 25 25'
                        class='h-10 w-10 inline-block'
                        // viewBox='0 0 24 24'
                        style={{ paddingRight: '4px' }}
                        // class='h-6 w-6 inline-block'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>

                      <a
                        href='https://www.facebook.com/bunderracattleco'
                        target='_blank'
                        className='fontXs md:text-base text-gray-400 extrabold break-all fontRobotoReg'
                        rel='noreferrer'
                      >
                        fb.com/bunderracattleco
                      </a>
                    </li>
                    <li
                      className='fontXs md:text-base extrabold text-gray-400 hover:text-gray-900'
                      style={{ cursor: 'pointer' }}
                    >
                      <svg
                        fill='currentColor'
                        viewBox='0 0 25 25'
                        class='h-10 w-10 inline-block'
                        // viewBox='0 0 24 24'
                        style={{ paddingRight: '4px' }}
                        // class='inline-block h-6 w-6'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                      <a
                        href='https://www.instagram.com/bunderracattleco/?hl=en'
                        target='_blank'
                        className='fontXs md:text-base text-gray-400 extrabold fontRobotoReg'
                        rel='noreferrer'
                      >
                        @bunderracattleco
                      </a>
                    </li>
                  </ul>
                </div>
              
            </div>
            <div className='linksBun'>
          <div className='mt-2 md:mt-0'>
                <ul className='footerList'>
                  {locationsone.map((l) => (
                    <li key={l.name} className='py-3'>
                      <h3 className='font16 fontXs md:text-sm font-extrabold text-gray-400 tracking-wider fontBund'>
                        {l.name}
                      </h3>
                      <p className='fontXs md:text-base text-gray-400 hover:text-gray-900 fontRobotoReg footerLocationText'>
                        {' '}
                        {l.location}{' '}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              
          </div>
            <div className='linksBun'>
                <div className='mt-2 md:mt-0'>
                  <div className='mt-2 md:mt-0'>
                <ul className='footerList footerList2'>
                  {locationstwo.map((l) => (
                    <li key={l.name} className='py-3'>
                      <h3 className='font16 fontXs md:text-sm font-extrabold text-gray-400 tracking-wider fontBund'>
                        {l.name}
                      </h3>
                      <p className='fontXs md:text-base text-gray-400 hover:text-gray-900 fontRobotoReg footerLocationText'>
                        {' '}
                        {l.location}{' '}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
          
              </div>
                </div>
          
          
            
           </div>
          <div className='rightRes'>
          <div className='linksBunLi'>
              <div className='mt-2 md:mt-0'>
              <ul role='list' className='space-y-2 footerLinkList'>
                {nav.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className='fontXs md:text-base underline text-gray-400 hover:text-gray-900 fontRobotoReg'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          
              </div>
       
          </div>
          <div style={{clear:'both'}}></div>
     </>}
       </>
        )
      }
        
      </div>
    <div class='max-w-full mx-auto px-2 sm:px-6 lg:px-8 bg-gray-400 '>
        <div className='mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16 copyrightBox'>
          <p
            className='fontXs mt-8 md:text-base md:mt-0 md:order-1 mx-auto text-white fontRobotoReg copyrightText'
            style={{ color: '#fff' }}
          >
            <span>
              {' '}
              &copy; Pickersgill Group PTY LTD trading as Bunderra Cattle Co. |
              Website Designed & Maintained by FMSTUDIOS.
            </span>

            <span className='copyrightLogo'>
              <img
                src={footerLogo}
                alt='footer logo'
                className='copyrightImg'
              />
            </span>
          </p>
        </div>
      </div>
  
    </footer>
  )
}

export default Footer
