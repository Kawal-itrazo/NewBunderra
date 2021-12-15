import React from 'react'

function CertLogos(props) {
  return (
    <div
      className={`flex flex-row items-center justify-center certLogos ${
        props.topCertLogos ? 'topCertLogos ' : ''
      }`}
    >
      {props.logos &&
        props.logos.map((item) => (
          <img
            key={item}
            className='certLogo'
            src={item}
            alt='animal welfare certification logo'
          />
        ))}
      {/* <img
        className='certLogo organicLogo'
        src={organiccertlogo}
        alt='animal welfare certification log'
      />
      <img
        className='certLogo welfareLogo'
        src={welfarecertlogo}
        alt='animal welfare certification log'
      />
      <img
        className='certLogo pasturefedLogo'
        src={pasturefedcertlogo}
        alt='animal welfare certification log'
      /> */}
    </div>
  )
}

export default CertLogos
