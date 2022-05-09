import Clock from 'react-live-clock'
import { useContext, useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { reveal } from '@/helpers/transitions'
import { BioContext } from 'context/bio'

export default function Header({ bioImage, bioHeading, bioText, noBio }) {
  const [bioOpen, setBioOpen] = useState(false)
  const [bioContext, setBioContext] = useContext(BioContext);
  const { scroll } = useLocomotiveScroll()

  const ToggleBio = () => {
    setBioContext(!bioContext)

    if (!bioContext) {
      scroll.stop()
    } else if (bioContext) {
      scroll.start()
    }
  }
  
  return (
    <header className="p-3 md:p-4 xl:p-6 mb-20 md:mb-20 xl:mb-20  relative z-[100]" id="header" data-scroll data-scroll-sticky data-scroll-target="#__next">
      <div className="fixed-target" id="fixed-target"></div>
      <div className="flex items-center relative z-10">
        <Link href="/">
          <a className="flex flex-wrap space-x-2 items-center mr-auto focus:outline-none focus:border-none ring-offset-4 ring-offset-off-black focus:ring-[2px] ring-yellow">
            <div className="w-[35px] md:w-[45px] xl:w-[50px] 2xl:w-[55px]">
              <svg className="w-full spin" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.358 58.706h.637V29.442h-.637v29.264Z" fill="#DEE212"/><path d="m24.331 58.33.631.09 4.035-28.98-.63-.09-4.036 28.98Z" fill="#DEE212"/><path d="m20.394 57.395.612.177 7.99-28.13-.612-.177-7.99 28.13Z" fill="#DEE212"/><path d="m16.627 55.915.582.261L29 29.443l-.582-.262-11.79 26.734Z" fill="#DEE212"/><path d="m13.09 53.922.54.34L28.99 29.446l-.54-.34L13.09 53.922Z" fill="#DEE212"/><path d="m9.874 51.445.488.413 18.634-22.417-.488-.413L9.874 51.445Z" fill="#DEE212"/><path d="m7.022 48.541.427.478 21.543-19.581-.426-.478L7.022 48.54Z" fill="#DEE212"/><path d="m4.611 45.235.357.534 24.06-16.388-.356-.534-24.06 16.388Z" fill="#DEE212"/><path d="m2.655 41.691.28.578L28.99 29.442l-.28-.578L2.656 41.691Z" fill="#DEE212"/><path d="m1.23 37.866.197.612 27.57-9.043-.197-.612-27.57 9.043Z" fill="#DEE212"/><path d="m.335 33.892.11.632 28.548-5.081-.11-.633L.334 33.892Z" fill="#DEE212"/><path d="m0 29.818.022.642 28.972-1.021-.023-.642L0 29.817Z" fill="#DEE212"/><path d="m.228 25.74-.066.639 28.83 3.057.067-.639L.229 25.74Z" fill="#DEE212"/><path d="m1.02 21.736-.154.624 28.128 7.08.154-.624-28.128-7.08Z" fill="#DEE212"/><path d="m2.35 17.881-.24.596L28.99 29.44l.238-.596L2.35 17.88Z" fill="#DEE212"/><path d="m4.205 14.25-.318.556 25.105 14.632.319-.557L4.205 14.25Z" fill="#DEE212"/><path d="m6.539 10.914-.392.507L28.99 29.438l.393-.507L6.539 10.914Z" fill="#DEE212"/><path d="m9.313 7.942-.458.447 20.138 21.05.458-.446L9.313 7.943Z" fill="#DEE212"/><path d="m12.468 5.386-.515.378 17.04 23.675.515-.378-17.04-23.675Z" fill="#DEE212"/><path d="m15.948 3.293-.563.302 13.61 25.838.563-.302-13.61-25.838Z" fill="#DEE212"/><path d="m19.677 1.719-.598.22 9.915 27.498.598-.22L19.677 1.72Z" fill="#DEE212"/><path d="m23.591.678-.623.134 6.027 28.624.623-.134L23.591.678Z" fill="#DEE212"/><path d="m27.613.199-.636.045 2.024 29.192.636-.045L27.613.2Z" fill="#DEE212"/><path d="m31.658.29-.636-.045L29 29.437l.636.045L31.658.29Z" fill="#DEE212"/><path d="m35.646.948-.623-.134-6.028 28.624.624.134L35.646.948Z" fill="#DEE212"/><path d="m39.513 2.158-.599-.22L29 29.437l.599.22 9.915-27.5Z" fill="#DEE212"/><path d="m43.17 3.902-.562-.302-13.61 25.839.563.302 13.61-25.839Z" fill="#DEE212"/><path d="m46.55 6.138-.516-.378-17.04 23.675.516.378L46.55 6.138Z" fill="#DEE212"/><path d="m49.595 8.835-.459-.446L29 29.439l.458.447 20.138-21.05Z" fill="#DEE212"/><path d="m52.234 11.93-.392-.507-22.844 18.016.392.507 22.844-18.017Z" fill="#DEE212"/><path d="m54.39 15.53-.32-.56-25.22 14.632.319.56 25.22-14.632Z" fill="#DEE212"/><path d="m56.12 19.072-.239-.596-26.878 10.962.238.596L56.12 19.072Z" fill="#DEE212"/><path d="m57.283 22.98-.154-.623L29 29.437l.154.623 28.128-7.08Z" fill="#DEE212"/><path d="m57.895 27.013-.067-.639-28.83 3.057.066.639 28.83-3.057Z" fill="#DEE212"/><path d="m57.95 31.1.022-.641L29 29.438l-.022.642 28.971 1.02Z" fill="#DEE212"/><path d="m57.44 35.154.11-.633-28.547-5.08-.11.632 28.547 5.081Z" fill="#DEE212"/><path d="m56.369 39.091.197-.611-27.57-9.043-.198.611 27.57 9.043Z" fill="#DEE212"/><path d="m54.778 42.847.279-.578-26.055-12.828-.28.578 26.056 12.828Z" fill="#DEE212"/><path d="m52.68 46.334.355-.533-24.033-16.364-.356.533L52.68 46.334Z" fill="#DEE212"/><path d="m50.115 49.5.426-.479L28.998 29.44l-.426.478 21.543 19.581Z" fill="#DEE212"/><path d="m47.146 52.273.488-.414L29 29.442l-.488.413 18.634 22.418Z" fill="#DEE212"/><path d="m43.82 54.602.54-.341L29 29.444l-.54.34L43.82 54.603Z" fill="#DEE212"/><path d="m40.21 56.442.583-.262-11.791-26.733-.582.261 11.79 26.734Z" fill="#DEE212"/><path d="m36.377 57.749.612-.178-7.99-28.13-.613.178 7.99 28.13Z" fill="#DEE212"/><path d="m32.398 58.512.631-.09-4.035-28.979-.63.09 4.034 28.979Z" fill="#DEE212"/></svg>
            </div>
            <m.span initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.03 }}}} className="uppercase tracking-tight leading-none md:leading-none xl:leading-none text-sm md:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-none">
              <span className="overflow-hidden block">
                <m.span variants={reveal} className="block">Britt</m.span>
              </span>
              <span className="overflow-hidden block">
                <m.span variants={reveal} className="block">Connects</m.span>
              </span>
            </m.span>
          </a>
        </Link>

        <span className="block tracking-tight leading-none md:leading-none xl:leading-none text-sm md:text-lg xl:text-xl mx-auto relative">
          <div className="relative overflow-hidden -ml-8 md:-ml-[80px]">
            <m.div variants={reveal} className="flex items-center space-x-[6px]">
              <svg className="w-[18px] md:w-[23px] xl:w-[28px] mb-px" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M28.401 18.535c2.84-1.868 4.374-4.295 4.374-6.785s-1.534-4.917-4.374-6.785C25.571 3.103 21.58 1.906 17.1 1.906S8.629 3.103 5.799 4.966C2.959 6.832 1.425 9.26 1.425 11.75s1.534 4.917 4.374 6.785c2.83 1.862 6.821 3.059 11.301 3.059s8.471-1.197 11.301-3.06ZM17.1 23c9.444 0 17.1-5.037 17.1-11.25S26.544.5 17.1.5C7.656.5 0 5.537 0 11.75S7.656 23 17.1 23Z" fill="#DEE212"/><path fillRule="evenodd" clipRule="evenodd" d="M17.1 21.594c3.951 0 7.615-4.12 7.615-9.844 0-5.723-3.664-9.844-7.615-9.844s-7.615 4.12-7.615 9.844c0 5.724 3.664 9.844 7.615 9.844Zm0 1.406c4.97 0 9-5.037 9-11.25S22.07.5 17.1.5s-9 5.037-9 11.25S12.13 23 17.1 23Z" fill="#DEE212"/><path fillRule="evenodd" clipRule="evenodd" d="M33.3 12.2H.9v-1.8h32.4v1.8Z" fill="#DEE212"/><path fillRule="evenodd" clipRule="evenodd" d="M16.2 23V1.4H18V23h-1.8Z" fill="#DEE212"/></svg>
              <span className="block leading-none"><span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></span>, <span className="hidden md:inline-block">Los Angeles</span><span className="inline-block md:hidden">LA</span></span>
            </m.div>
          </div>
        </span>

        <button onClick={ToggleBio} className="block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-xl md:text-3xl xl:text-4xl 2xl:text-5xl ml-auto px-2 2xl:px-3 pt-[3px] pb-[2px] rounded-full border-yellow border focus:outline-none ring-offset-4 ring-offset-off-black focus:ring-[2px] ring-yellow relative overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500 bg-off-black">
          <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
          <span className="block overflow-hidden relative z-[10]">
            <m.span className="block" variants={reveal}>Bio</m.span>
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
                className="absolute inset-0 w-full h-screen bg-off-black z-40 focus:outline-none focus:border-none"
                onClick={ToggleBio}
              >
              </m.button>
              <m.div
                initial={{ x: '100%' }}
                animate={{ x: '20%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.19,1,0.22,1] }}
                className="absolute top-0 right-0 bottom-0 h-screen md:w-[60vw] lg:w-[50vw] max-w-[900px] bg-off-black z-50"
              >
                <div className="h-screen p-4 md:p-6 xl:p-10" data-scroll data-scroll-sticky data-scroll-target="#fixed-target">

                  <button onClick={ToggleBio} className="absolute top-0 right-0 m-8 md:m-12 xl:m-16 z-50 block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-xl md:text-3xl xl:text-4xl 2xl:text-5xl ml-auto px-2 2xl:px-3 pt-[3px] pb-[2px] rounded-full border-yellow border focus:outline-none ring-offset-4 ring-offset-off-black focus:ring-[2px] ring-yellow overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500">
                  <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
                    <span className="block overflow-hidden relative z-[10]">
                      <span>Close</span>
                    </span>
                  </button>

                  <div className="flex flex-wrap h-full w-full">
                    <div className="w-full h-[45%] relative overflow-hidden">
                      <m.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 1.2 }}
                        transition={{ duration: .550 }}
                        className="w-full h-full absolute inset-0"
                      >
                        <Image
                          src={bioImage.asset.url}
                          alt="Something"
                          layout="fill"
                          className="w-full h-full absolute inset-0 object-cover object-center"
                        />
                      </m.div>
                    </div>

                    <div className="w-11/12 md:w-11/12 max-w-[1800px] h-[45%] flex relative">
                      <span className="block absolute top-0 left-0 text-2xl mt-[-20px]">&darr;</span>
                      <div className="mt-auto w-full">
                        <p className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[58px] indent-[8vw] 2xl:indent-[90px] leading-[0.9] mb-8 w-full">{bioHeading}</p>

                        <p className="text-lg md:text-xl xl:text-xl leading-tight w-11/12 md:w-[80%] xl:w-[75%] 2xl:w-[70%]">{bioText}</p>
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