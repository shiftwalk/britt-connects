import Clock from 'react-live-clock'
import { useContext, useEffect, useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '@/helpers/transitions'
import { BioContext } from 'context/bio'
import SanityBlockContent from '@sanity/block-content-to-react'
import { useDetectClickOutside } from 'react-detect-click-outside';

export default function Header({ bioImage, bioHeading, bioText, noBio }) {
  const [bioOpen, setBioOpen] = useState(false)
  const [currentTimeZone, setCurrentTimeZone] = useState('la')
  const [bioContext, setBioContext] = useContext(BioContext);
  const [timeToggle, setTimeToggle] = useState(false);
  const { scroll } = useLocomotiveScroll()

  const ToggleBio = () => {
    setBioContext(!bioContext)

    if (!bioContext) {
      scroll.stop()
    } else if (bioContext) {
      scroll.start()
    }
  }

  const scrollToTop = () => {
    scroll.scrollTo(0)
  }

  const timezoneToggle = () => {
    setTimeToggle(!timeToggle);
  }
  
  const timezoneClose = () => {
    if (timeToggle) {
      setTimeToggle(false);
    }
  }

  const timezoneUpdate = (e) => {
    setTimeToggle(false);

    setCurrentTimeZone(e)
  }

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.y / limit.y * 100
        if (progress > 0) {
          setTimeToggle(false);
        } else {
        } 
      })
    }
  }, [scroll, setTimeToggle])

  const ref = useDetectClickOutside({ onTriggered: timezoneClose });
  
  return (
    <header className="p-3 md:p-4 xl:p-6 fixed top-0 left-0 right-0 z-[100]" id="header" data-scroll data-scroll-sticky data-scroll-target="#__next">
      <div className="fixed-target" id="fixed-target"></div>

      <div className={`absolute top-0 left-0 text-off-black p-2 z-[10] mt-24 w-[185px] rounded-xl text-base transition-opacity ease-in-out duration-300 overflow-hidden ml-[45%] ${timeToggle ? 'opacity-100' : 'opacity-100 pointer-events-none' }`} ref={ref}>
        <div className={`bg-yellow inset-0 absolute transition-all ease-in-out duration-500 ${timeToggle ? 'h-full' : 'h-0 delay-[200ms]' }`}></div>
          <div className="relative z-[10]">
          <button onClick={()=> timezoneUpdate('la')} className="block py-1 px-2 tracking-tight w-full text-left rounded-lg relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 w-full bg-off-black transition-all aese-in-out duration-300 h-0 group-hover:h-full z-[9]"></div>
            <span className="block relative overflow-hidden z-[10]">
              <span className={`block transform transition-all ease-in-out duration-500 group-hover:translate-x-3 group-hover:-translate-y-[100%] text-off-black group-hover:text-yellow ${timeToggle ? 'translate-y-0' : 'translate-y-full delay-[0ms]' }`}>Los Angeles</span>
              <span className={`absolute inset-0 block transform transition-all ease-in-out duration-500 text-off-black group-hover:text-yellow translate-y-full group-hover:translate-y-0 -translate-x-3 group-hover:translate-x-0`}>Los Angeles</span>
            </span>
          </button>
          <button onClick={()=> timezoneUpdate('ch')} className="block py-1 px-2 tracking-tight w-full text-left rounded-lg relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 right-0 w-full bg-off-black transition-all aese-in-out duration-300 h-0 group-hover:h-full z-[9]"></div>
            <span className="block relative overflow-hidden z-[10]">
              <span className={`block transform transition-all ease-in-out duration-500 group-hover:translate-x-3 group-hover:-translate-y-[100%] text-off-black group-hover:text-yellow ${timeToggle ? 'translate-y-0 delay-[50ms] group-hover:delay-[0ms]' : 'translate-y-full delay-[0ms]' }`}>Chicago</span>
              <span className={`absolute inset-0 block transform transition-all ease-in-out duration-500 text-off-black group-hover:text-yellow translate-y-full group-hover:translate-y-0 -translate-x-3 group-hover:translate-x-0`}>Chicago</span>
            </span>
          </button>
          <button onClick={()=> timezoneUpdate('ny')} className="block py-1 px-2 tracking-tight w-full text-left rounded-lg relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 right-0 w-full bg-off-black transition-all aese-in-out duration-300 h-0 group-hover:h-full z-[9]"></div>
            <span className="block relative overflow-hidden z-[10]">
              <span className={`block transform transition-all ease-in-out duration-500 group-hover:translate-x-3 group-hover:-translate-y-[100%] text-off-black group-hover:text-yellow ${timeToggle ? 'translate-y-0 delay-[50ms] group-hover:delay-[0ms]' : 'translate-y-full delay-[0ms]' }`}>New York</span>
              <span className={`absolute inset-0 block transform transition-all ease-in-out duration-500 text-off-black group-hover:text-yellow translate-y-full group-hover:translate-y-0 -translate-x-3 group-hover:translate-x-0`}>New York</span>
            </span>
          </button>
          <button onClick={()=> timezoneUpdate('ba')} className="block py-1 px-2 tracking-tight w-full text-left rounded-lg relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 right-0 w-full bg-off-black transition-all aese-in-out duration-300 h-0 group-hover:h-full z-[9]"></div>
            <span className="block relative overflow-hidden z-[10]">
              <span className={`block transform transition-all ease-in-out duration-500 group-hover:translate-x-3 group-hover:-translate-y-[100%] text-off-black group-hover:text-yellow ${timeToggle ? 'translate-y-0 delay-[100ms] group-hover:delay-[0ms]' : 'translate-y-full delay-[0ms]' }`}>Buenos Aires</span>
              <span className={`absolute inset-0 block transform transition-all ease-in-out duration-500 text-off-black group-hover:text-yellow translate-y-full group-hover:translate-y-0 -translate-x-3 group-hover:translate-x-0`}>Buenos Aires</span>
            </span>
          </button>
          <button onClick={()=> timezoneUpdate('sp')} className="block py-1 px-2 tracking-tight w-full text-left rounded-lg relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 right-0 w-full bg-off-black transition-all aese-in-out duration-300 h-0 group-hover:h-full z-[9]"></div>
            <span className="block relative overflow-hidden z-[10]">
              <span className={`block transform transition-all ease-in-out duration-500 group-hover:translate-x-3 group-hover:-translate-y-[100%] text-off-black group-hover:text-yellow ${timeToggle ? 'translate-y-0 delay-[150ms] group-hover:delay-[0ms]' : 'translate-y-full delay-[0ms]' }`}>São Paulo</span>
              <span className={`absolute inset-0 block transform transition-all ease-in-out duration-500 text-off-black group-hover:text-yellow translate-y-full group-hover:translate-y-0 -translate-x-3 group-hover:translate-x-0`}>São Paulo</span>
            </span>
          </button>
          <button onClick={()=> timezoneUpdate('vancouver')} className="block py-1 px-2 tracking-tight w-full text-left rounded-lg relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 w-full bg-off-black transition-all aese-in-out duration-300 h-0 group-hover:h-full z-[9]"></div>
            <span className="block relative overflow-hidden z-[10]">
              <span className={`block transform transition-all ease-in-out duration-500 group-hover:translate-x-3 group-hover:-translate-y-[100%] text-off-black group-hover:text-yellow ${timeToggle ? 'translate-y-0 delay-[200ms] group-hover:delay-[0ms]' : 'translate-y-full delay-[0ms]' }`}>Vancouver</span>
              <span className={`absolute inset-0 block transform transition-all ease-in-out duration-500 text-off-black group-hover:text-yellow translate-y-full group-hover:translate-y-0 -translate-x-3 group-hover:translate-x-0`}>Vancouver</span>
            </span>
          </button>
        </div>
      </div>
      
      <div className="flex items-center relative z-10">
        <button onClick={scrollToTop} className="flex flex-wrap space-x-2 items-center mr-auto focus-visible:outline-none focus-visible:border-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow text-left">
          <div className="w-[45px] md:w-[52px] xl:w-[58px] 2xl:w-[65px]">
            <svg className="w-full spin" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.358 58.706h.637V29.442h-.637v29.264Z" fill="#DEE212"/><path d="m24.331 58.33.631.09 4.035-28.98-.63-.09-4.036 28.98Z" fill="#DEE212"/><path d="m20.394 57.395.612.177 7.99-28.13-.612-.177-7.99 28.13Z" fill="#DEE212"/><path d="m16.627 55.915.582.261L29 29.443l-.582-.262-11.79 26.734Z" fill="#DEE212"/><path d="m13.09 53.922.54.34L28.99 29.446l-.54-.34L13.09 53.922Z" fill="#DEE212"/><path d="m9.874 51.445.488.413 18.634-22.417-.488-.413L9.874 51.445Z" fill="#DEE212"/><path d="m7.022 48.541.427.478 21.543-19.581-.426-.478L7.022 48.54Z" fill="#DEE212"/><path d="m4.611 45.235.357.534 24.06-16.388-.356-.534-24.06 16.388Z" fill="#DEE212"/><path d="m2.655 41.691.28.578L28.99 29.442l-.28-.578L2.656 41.691Z" fill="#DEE212"/><path d="m1.23 37.866.197.612 27.57-9.043-.197-.612-27.57 9.043Z" fill="#DEE212"/><path d="m.335 33.892.11.632 28.548-5.081-.11-.633L.334 33.892Z" fill="#DEE212"/><path d="m0 29.818.022.642 28.972-1.021-.023-.642L0 29.817Z" fill="#DEE212"/><path d="m.228 25.74-.066.639 28.83 3.057.067-.639L.229 25.74Z" fill="#DEE212"/><path d="m1.02 21.736-.154.624 28.128 7.08.154-.624-28.128-7.08Z" fill="#DEE212"/><path d="m2.35 17.881-.24.596L28.99 29.44l.238-.596L2.35 17.88Z" fill="#DEE212"/><path d="m4.205 14.25-.318.556 25.105 14.632.319-.557L4.205 14.25Z" fill="#DEE212"/><path d="m6.539 10.914-.392.507L28.99 29.438l.393-.507L6.539 10.914Z" fill="#DEE212"/><path d="m9.313 7.942-.458.447 20.138 21.05.458-.446L9.313 7.943Z" fill="#DEE212"/><path d="m12.468 5.386-.515.378 17.04 23.675.515-.378-17.04-23.675Z" fill="#DEE212"/><path d="m15.948 3.293-.563.302 13.61 25.838.563-.302-13.61-25.838Z" fill="#DEE212"/><path d="m19.677 1.719-.598.22 9.915 27.498.598-.22L19.677 1.72Z" fill="#DEE212"/><path d="m23.591.678-.623.134 6.027 28.624.623-.134L23.591.678Z" fill="#DEE212"/><path d="m27.613.199-.636.045 2.024 29.192.636-.045L27.613.2Z" fill="#DEE212"/><path d="m31.658.29-.636-.045L29 29.437l.636.045L31.658.29Z" fill="#DEE212"/><path d="m35.646.948-.623-.134-6.028 28.624.624.134L35.646.948Z" fill="#DEE212"/><path d="m39.513 2.158-.599-.22L29 29.437l.599.22 9.915-27.5Z" fill="#DEE212"/><path d="m43.17 3.902-.562-.302-13.61 25.839.563.302 13.61-25.839Z" fill="#DEE212"/><path d="m46.55 6.138-.516-.378-17.04 23.675.516.378L46.55 6.138Z" fill="#DEE212"/><path d="m49.595 8.835-.459-.446L29 29.439l.458.447 20.138-21.05Z" fill="#DEE212"/><path d="m52.234 11.93-.392-.507-22.844 18.016.392.507 22.844-18.017Z" fill="#DEE212"/><path d="m54.39 15.53-.32-.56-25.22 14.632.319.56 25.22-14.632Z" fill="#DEE212"/><path d="m56.12 19.072-.239-.596-26.878 10.962.238.596L56.12 19.072Z" fill="#DEE212"/><path d="m57.283 22.98-.154-.623L29 29.437l.154.623 28.128-7.08Z" fill="#DEE212"/><path d="m57.895 27.013-.067-.639-28.83 3.057.066.639 28.83-3.057Z" fill="#DEE212"/><path d="m57.95 31.1.022-.641L29 29.438l-.022.642 28.971 1.02Z" fill="#DEE212"/><path d="m57.44 35.154.11-.633-28.547-5.08-.11.632 28.547 5.081Z" fill="#DEE212"/><path d="m56.369 39.091.197-.611-27.57-9.043-.198.611 27.57 9.043Z" fill="#DEE212"/><path d="m54.778 42.847.279-.578-26.055-12.828-.28.578 26.056 12.828Z" fill="#DEE212"/><path d="m52.68 46.334.355-.533-24.033-16.364-.356.533L52.68 46.334Z" fill="#DEE212"/><path d="m50.115 49.5.426-.479L28.998 29.44l-.426.478 21.543 19.581Z" fill="#DEE212"/><path d="m47.146 52.273.488-.414L29 29.442l-.488.413 18.634 22.418Z" fill="#DEE212"/><path d="m43.82 54.602.54-.341L29 29.444l-.54.34L43.82 54.603Z" fill="#DEE212"/><path d="m40.21 56.442.583-.262-11.791-26.733-.582.261 11.79 26.734Z" fill="#DEE212"/><path d="m36.377 57.749.612-.178-7.99-28.13-.613.178 7.99 28.13Z" fill="#DEE212"/><path d="m32.398 58.512.631-.09-4.035-28.979-.63.09 4.034 28.979Z" fill="#DEE212"/></svg>
          </div>
          <m.span initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.03 }}}} className="uppercase tracking-tight leading-none md:leading-none xl:leading-none text-base md:text-[21px] xl:text-[23px] 2xl:text-[25px] 2xl:leading-none">
            <span className="overflow-hidden block">
              <m.span variants={reveal} className="block">Britt</m.span>
            </span>
            <span className="overflow-hidden block">
              <m.span variants={reveal} className="block">Connects</m.span>
            </span>
          </m.span>
        </button>

        <span className="tracking-tight leading-[1.025] md:leading-[1.025] xl:leading-[1.025] text-sm md:text-xl xl:text-2xl mx-auto relative hidden md:block">
          <button onClick={()=> timezoneToggle()}>
            <div className="relative overflow-hidden -ml-8 md:-ml-[80px]">
              <m.div variants={reveal} className="flex items-center space-x-[6px]">
                <svg className="w-[18px] md:w-[23px] xl:w-[33px] mb-px" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M28.401 18.535c2.84-1.868 4.374-4.295 4.374-6.785s-1.534-4.917-4.374-6.785C25.571 3.103 21.58 1.906 17.1 1.906S8.629 3.103 5.799 4.966C2.959 6.832 1.425 9.26 1.425 11.75s1.534 4.917 4.374 6.785c2.83 1.862 6.821 3.059 11.301 3.059s8.471-1.197 11.301-3.06ZM17.1 23c9.444 0 17.1-5.037 17.1-11.25S26.544.5 17.1.5C7.656.5 0 5.537 0 11.75S7.656 23 17.1 23Z" fill="#DEE212"/><path fillRule="evenodd" clipRule="evenodd" d="M17.1 21.594c3.951 0 7.615-4.12 7.615-9.844 0-5.723-3.664-9.844-7.615-9.844s-7.615 4.12-7.615 9.844c0 5.724 3.664 9.844 7.615 9.844Zm0 1.406c4.97 0 9-5.037 9-11.25S22.07.5 17.1.5s-9 5.037-9 11.25S12.13 23 17.1 23Z" fill="#DEE212"/><path fillRule="evenodd" clipRule="evenodd" d="M33.3 12.2H.9v-1.8h32.4v1.8Z" fill="#DEE212"/><path fillRule="evenodd" clipRule="evenodd" d="M16.2 23V1.4H18V23h-1.8Z" fill="#DEE212"/></svg>

                { currentTimeZone == 'la' && (
                  <span className="block leading-[1.025]"><span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></span>, <span className="hidden md:inline-block">Los Angeles ▾</span><span className="inline-block md:hidden">LA</span></span>
                )}
                { currentTimeZone == 'ny' && (
                  <span className="block leading-none"><span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'America/New_York'} /></span>, <span className="hidden md:inline-block">New York ▾</span><span className="inline-block md:hidden">NY</span></span>
                )}
                { currentTimeZone == 'ch' && (
                  <span className="block leading-none"><span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Chicago'} /></span>, <span className="hidden md:inline-block">Chicago ▾</span><span className="inline-block md:hidden">CH</span></span>
                )}
                { currentTimeZone == 'ba' && (
                  <span className="block leading-none"><span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Argentina/Buenos_Aires'} /></span>, <span className="hidden md:inline-block">Buenos Aires ▾</span><span className="inline-block md:hidden">BA</span></span>
                )}
                { currentTimeZone == 'sp' && (
                  <span className="block leading-none"><span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Sao_Paulo'} /></span>, <span className="hidden md:inline-block">São Paulo ▾</span><span className="inline-block md:hidden">SP</span></span>
                )}
                { currentTimeZone == 'vancouver' && (
                  <span className="block leading-none"><span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Vancouver'} /></span>, <span className="hidden md:inline-block">Vancouver ▾</span><span className="inline-block md:hidden">VC</span></span>
                )}
              </m.div>
            </div>
          </button>
        </span>

        <button onClick={ToggleBio} className="block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-[25px] md:text-[38px] xl:text-[44px] 2xl:text-[52px] ml-auto px-2 md:px-3 2xl:px-4 pt-[3px] md:pt-[4px] pb-[2px] md:pb-[2px] rounded-full border-yellow border focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow relative overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500 bg-off-black">
          <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
          <span className="block overflow-hidden relative z-[10]">
            <m.span className="block" variants={reveal}>
              <span className="block group-hover:-translate-y-full group-hover:translate-x-3 transition-transform ease-in-out duration-500">Bio</span>
              <span className="block absolute inset-0 translate-y-full group-hover:translate-y-0 -translate-x-3 group-hover:-translate-x-0 transition-transform ease-in-out duration-500">Bio</span>
            </m.span>
          </span>
        </button>
      </div>
      
        <AnimatePresence>
          {bioContext && (
            <>
              <m.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-screen bg-off-black z-40 focus-visible:outline-none focus-visible:border-none"
                onClick={ToggleBio}
              >
              </m.button>
              <m.div
                initial={{ x: '100%' }}
                animate={{ x: '20%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 1.5, ease: [0.19,1,0.22,1] }}
                className="absolute top-0 right-0 bottom-0 h-screen w-[100%] md:w-[60vw] lg:w-[50vw] max-w-[900px] bg-off-black z-50 overflow-y-scroll bio"
              >
                <div className="h-screen p-4 md:p-6 xl:p-10" data-scroll data-scroll-sticky data-scroll-target="#fixed-target">

                  <button onClick={ToggleBio} className="fixed top-0 right-0 m-8 mr-12 md:m-12 xl:m-16 z-50 block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-[25px] md:text-[38px] xl:text-[44px] 2xl:text-[58px] ml-auto px-2 md:px-3 2xl:px-4 pt-[3px] md:pt-[4px] pb-[2px] md:pb-[2px] rounded-full border-yellow border focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500">
                  <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
                    <span className="block overflow-hidden relative z-[10]">
                    <span className="block group-hover:-translate-y-full group-hover:translate-x-3 transition-transform ease-in-out duration-500">Close</span>
                    <span className="block absolute inset-0 translate-y-full group-hover:translate-y-0 -translate-x-3 group-hover:-translate-x-0 transition-transform ease-in-out duration-500">Close</span>
                    </span>
                  </button>

                  <div className="flex flex-wrap h-full w-full">
                    <div className="w-full h-[45%] relative overflow-hidden">
                      <Image
                        src={bioImage.asset.url}
                        alt="Something"
                        layout="fill"
                        className="w-full h-full absolute inset-0 object-cover object-center"
                      />
                    </div>

                    <div className="w-11/12 md:w-11/12 max-w-[1800px] h-[45%] flex relative">
                      <span className="block absolute top-0 left-0 text-2xl mt-[-20px]">&darr;</span>
                      <div className="mt-auto w-full">
                        <p className="text-[28px] md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[58px] indent-[8vw] 2xl:indent-[90px] leading-[0.9] mb-8 w-full">{bioHeading}</p>

                        <div className="leading-[1.2] text-base lg:text-lg lg:leading-[1.2] xl:text-lg xl:leading-[1.2] 2xl:text-xl 2xl:leading-[1.2] w-11/12 md:w-[80%] xl:w-[75%] 2xl:w-[70%] content pb-12">
                          <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={bioText} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            </>
          )}
        </AnimatePresence>
    </header>
  )
}