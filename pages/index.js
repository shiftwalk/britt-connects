import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import SmoothWrapper from '@/components/smooth-wrapper'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LazyMotion features={domAnimation}>
        <div className="">
          <SmoothWrapper>
            
            <m.main
              initial="initial"
              animate="enter"
              exit="exit"
              className="mb-12 md:mb-16 xl:mb-24"
            >
              <m.div variants={fade}>
                <section className="h-screen relative p-3 md:p-4 xl:p-6">
                  <Header />
                  <h1 className="text-[13vw] md:text-[12.4vw] font-display uppercase leading-[0.9] md:leading-[0.9] text-center relative z-10 mix-blend-lighten pt-[2vw]">Connecting Humans</h1>

                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="relative overflow-hidden w-[90vw] md:w-[45vw] h-[33vh] md:h-[60vh] rounded-xl rotate-[-3deg] max-w-[560px] hero-image mt-[-15vh] md:mt-0">
                      <Image
                        src="/images/britt.jpg"
                        alt="Something"
                        layout="fill"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 p-3 md:p-4 xl:p-6 max-w-[80vw] md:max-w-[36vw] lg:w-[28vw]">
                    <p className="indent-6 text-base xl:text-lg xl:leading-snug">We connect top-tier talent to high caliber opportunities. That means personal connections over metrics and transactions. We care deeply about our people and will only partner with clients that feel the same. High-quality talent is a critical investment, not an unnecessary expense.</p>
                  </div>

                  <div className="absolute bottom-0 right-0 p-3 md:p-4 xl:p-6 max-w-[70vw] md:max-w-[36vw] lg:w-[28vw] hidden md:block">
                    <ul className="leading-tight xl:leading-tight text-base xl:text-lg text-right">
                      <li><span className="-rotate-90 -mr-1 inline-block">&crarr;</span></li>
                      <li>Creative Directors</li>
                      <li>UX Designers</li>
                      <li>UI Designers</li>
                      <li>Graphic Designers</li>
                      <li>Engineers</li>
                      <li>Creative Technologists</li>
                      <li>3D Designers</li>
                      <li>Motion Designers</li>
                    </ul>
                  </div>
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[17vw] md:pt-[12vw] xl:pt-[10vw]">
                  <span className="block mb-4 md:mb-6">(We work with)</span>

                  <ul>
                    <li className="text-yellow-dark border-t border-b border-y-yellow-dark pt-3 pb-5 md:py-2 group md:hover:text-off-black">
                      <span className="md:flex items-center block rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-4 md:group-hover:pr-6 md:group-focus:bg-yellow md:group-focus:pl-4 md:group-focus:pr-6 transition-all ease-in-out duration-300">
                        <span className="block uppercase flex-1 font-display text-[10vw] md:text-[7.4vw] leading-[1] pt-2 pb-1 md:pb-0">Agencies</span>
                        <span className="block md:ml-auto max-w-[300px] md:max-w-[240px] md:text-right text-base lg:text-lg lg:leading-tight">Traditional ad agencies, digital shops and top production companies</span>
                      </span>
                    </li>

                    <li className="text-yellow-dark border-t border-b border-y-yellow-dark pt-3 pb-5 md:py-2 group md:hover:text-off-black">
                      <span className="md:flex items-center block rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-4 md:group-hover:pr-6 md:group-focus:bg-yellow md:group-focus:pl-4 md:group-focus:pr-6 transition-all ease-in-out duration-300">
                        <span className="block uppercase flex-1 font-display text-[10vw] md:text-[7.4vw] leading-[1] pt-2 pb-1 md:pb-0">Brands</span>
                        <span className="block md:ml-auto max-w-[300px] md:max-w-[240px] md:text-right text-base lg:text-lg lg:leading-tight">The biggest players in Search, Social, and Commerce from Silicon Valley to NYC</span>
                      </span>
                    </li>

                    <li className="text-yellow-dark border-t border-b border-y-yellow-dark pt-3 pb-5 md:py-2 group md:hover:text-off-black">
                      <span className="md:flex items-center block rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-4 md:group-hover:pr-6 md:group-focus:bg-yellow md:group-focus:pl-4 md:group-focus:pr-6 transition-all ease-in-out duration-300">
                        <span className="block uppercase flex-1 font-display text-[10vw] md:text-[7.4vw] leading-[1] pt-2 pb-1 md:pb-0">Startups</span>
                        <span className="block md:ml-auto max-w-[300px] md:max-w-[240px] md:text-right text-base lg:text-lg lg:leading-tight">Well-funded, pre-seed, on a napkin sketch, we're here to help build your perfect team</span>
                      </span>
                    </li>

                    <li className="text-yellow-dark border-t border-b border-y-yellow-dark pt-3 pb-5 md:py-2 group md:hover:text-off-black">
                      <span className="md:flex items-center block rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-4 md:group-hover:pr-6 md:group-focus:bg-yellow md:group-focus:pl-4 md:group-focus:pr-6 transition-all ease-in-out duration-300">
                        <span className="block uppercase flex-1 font-display text-[10vw] md:text-[7.4vw] leading-[1] pt-2 pb-1 md:pb-0">Technology</span>
                        <span className="block md:ml-auto max-w-[300px] md:max-w-[240px] md:text-right text-base lg:text-lg lg:leading-tight">Innovators from fashion to spirits, entertainment to hospitality and everything in between</span>
                      </span>
                    </li>

                    <li className="text-yellow-dark border-t border-b border-y-yellow-dark pt-3 pb-5 md:py-2 group md:hover:text-off-black">
                      <span className="md:flex items-center block rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-4 md:group-hover:pr-6 md:group-focus:bg-yellow md:group-focus:pl-4 md:group-focus:pr-6 transition-all ease-in-out duration-300">
                        <span className="block uppercase flex-1 font-display text-[10vw] md:text-[7.4vw] leading-[1] pt-2 pb-1 md:pb-0">Humans</span>
                        <span className="block md:ml-auto max-w-[300px] md:max-w-[240px] md:text-right text-base lg:text-lg lg:leading-tight">From fashion to spirits, entertainment to hospitality and everything in between</span>
                      </span>
                    </li>
                  </ul>
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[17vw] md:pt-[12vw] xl:pt-[10vw]">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-3 xl:col-span-2">
                      <span className="block mb-4 md:mb-6">(Ethos &amp; Clients)</span>
                    </div>
                    <div className="col-span-6 md:col-span-4 content md:text-lg md:leading-tight max-w-[500px]">
                      <p className="indent-6">People are what truly drive creativity, innovation and every successful company’s trajectory. There simply is no shortcut for a company’s success — assembling the right mix of minds is bar none the smartest goal any team can have. Attracting the right talent today is as much of an art as it is a science.</p>
                      
                      <p>People are rethinking what matters, and time and again we hear that their top job search criteria are their own sense of personal fulfillment and who they’ll be working with. We know, because we listen.</p>
                    </div>

                    <div className="col-span-3 xl:col-span-4 col-start-10 xl:col-start-10 max-w-[300px] ml-auto">
                      <ul className="xl:flex xl:flex-wrap">
                        <li className="xl:w-1/2 text-right">Google</li>
                        <li className="xl:w-1/2 text-right">MediaMonks</li>
                        <li className="xl:w-1/2 text-right">Thinkingbox</li>
                        <li className="xl:w-1/2 text-right">Ntwork</li>
                        <li className="xl:w-1/2 text-right">Tool</li>
                        <li className="xl:w-1/2 text-right">Ragged Edge</li>
                        <li className="xl:w-1/2 text-right">Current/Elliot</li>
                        <li className="xl:w-1/2 text-right">ShiftWalk</li>
                        <li className="xl:w-1/2 text-right">The Supply</li>
                        <li className="xl:w-1/2 text-right">Wink</li>
                        
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section className="p-3 md:p-4 xl:p-6 pt-[17vw] md:pt-[12vw] xl:pt-[10vw]">
                  <h2 className="text-[14vw] md:text-[8.4vw] font-display uppercase leading-[0.9] md:leading-[0.9] text-center relative z-10 mix-blend-lighten pt-[2vw]">Roles Filled <span className="text-xl md:text-2xl font-sans align-top hidden md:inline-block md:-ml-6 md:-mt-6">(42)</span></h2>

                  <ul className="pt-[12vw] md:pt-[8vw] xl:pt-[6vw]">
                    <li className="text-yellow-dark border-t border-b border-y-yellow-dark py-2 group md:hover:text-off-black">
                      <span className="flex flex-wrap items-center rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-3 md:group-hover:pr-3 md:group-focus:bg-yellow md:group-focus:pl-3 md:group-focus:pr-3 transition-all ease-in-out duration-300">
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Managing Director</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Leadership</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Ad Agency</span>
                        <span className="block w-1/2 md:w-auto text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight ml-auto">2022</span>
                      </span>
                    </li>

                    <li className="text-yellow-dark border-b border-y-yellow-dark py-2 group md:hover:text-off-black">
                      <span className="flex flex-wrap items-center rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-3 md:group-hover:pr-3 md:group-focus:bg-yellow md:group-focus:pl-3 md:group-focus:pr-3 transition-all ease-in-out duration-300">
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">3D Designer</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Management</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Design Studio</span>
                        <span className="block w-1/2 md:w-auto text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight ml-auto">2022</span>
                      </span>
                    </li>

                    <li className="text-yellow-dark border-b border-y-yellow-dark py-2 group md:hover:text-off-black">
                      <span className="flex flex-wrap items-center rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-3 md:group-hover:pr-3 md:group-focus:bg-yellow md:group-focus:pl-3 md:group-focus:pr-3 transition-all ease-in-out duration-300">
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Front-End Developer</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Team</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Tech Startup</span>
                        <span className="block w-1/2 md:w-auto text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight ml-auto">2022</span>
                      </span>
                    </li>

                    <li className="text-yellow-dark border-b border-y-yellow-dark py-2 group md:hover:text-off-black">
                      <span className="flex flex-wrap items-center rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-3 md:group-hover:pr-3 md:group-focus:bg-yellow md:group-focus:pl-3 md:group-focus:pr-3 transition-all ease-in-out duration-300">
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Motion Designer</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Management</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Motion House</span>
                        <span className="block w-1/2 md:w-auto text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight ml-auto">2022</span>
                      </span>
                    </li>

                    <li className="text-yellow-dark border-b border-y-yellow-dark py-2 group md:hover:text-off-black">
                      <span className="flex flex-wrap items-center rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-3 md:group-hover:pr-3 md:group-focus:bg-yellow md:group-focus:pl-3 md:group-focus:pr-3 transition-all ease-in-out duration-300">
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">UI Designer</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Team</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">MediaMonks</span>
                        <span className="block w-1/2 md:w-auto text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight ml-auto">2022</span>
                      </span>
                    </li>

                    <li className="text-yellow-dark border-b border-y-yellow-dark py-2 group md:hover:text-off-black">
                      <span className="flex flex-wrap items-center rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-3 md:group-hover:pr-3 md:group-focus:bg-yellow md:group-focus:pl-3 md:group-focus:pr-3 transition-all ease-in-out duration-300">
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Producer</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Management</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Fashion House</span>
                        <span className="block w-1/2 md:w-auto text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight ml-auto">2022</span>
                      </span>
                    </li>
                    
                    <li className="text-yellow-dark border-b border-y-yellow-dark py-2 group md:hover:text-off-black">
                      <span className="flex flex-wrap items-center rounded-xl md:py-2 md:group-hover:bg-yellow md:group-hover:pl-3 md:group-hover:pr-3 md:group-focus:bg-yellow md:group-focus:pl-3 md:group-focus:pr-3 transition-all ease-in-out duration-300">
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Graphic Designer</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Team</span>
                        <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight">Startup</span>
                        <span className="block w-1/2 md:w-auto text-xl md:text-2xl xl:text-3xl leading-right md:leading-tight ml-auto">2022</span>
                      </span>
                    </li>
                  </ul>
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[20vw] md:pt-[16vw] xl:pt-[16vw]">
                  <div className="relative flex justify-center">
                    <div className="px-[3vw] md:px-[10vw] flex flex-wrap items-center justify-center">
                      <div className="w-full">
                        <span className="block mx-auto text-center mb-6 md:mb-12">(Kind words)</span>
                        <h3 className="text-[9vw] md:text-[5.6vw] font-display uppercase leading-[0.92] md:leading-[0.92] text-center relative z-10 mix-blend-lighten w-full mb-12 md:mb-12">“Britt has an incredible knack of reading between the lines to find perfect candidates”</h3>
                        <span className="block mx-auto text-center uppercase text-lg leading-tight md:text-xl md:leading-tight">Kelly Wu<span className="block">Recruiting Lead, Google</span></span>
                      </div>
                    </div>

                    <div className="opacity-25 absolute inset-0 z-0 w-full h-full flex items-center justify-center">
                      <div className="w-10/12 md:w-5/12">
                        <svg className="w-full blur-[6px] md:blur-[0.8vw]" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.358 58.706h.637V29.442h-.637v29.264Z" fill="#DEE212"/><path d="m24.331 58.33.631.09 4.035-28.98-.63-.09-4.036 28.98Z" fill="#DEE212"/><path d="m20.394 57.395.612.177 7.99-28.13-.612-.177-7.99 28.13Z" fill="#DEE212"/><path d="m16.627 55.915.582.261L29 29.443l-.582-.262-11.79 26.734Z" fill="#DEE212"/><path d="m13.09 53.922.54.34L28.99 29.446l-.54-.34L13.09 53.922Z" fill="#DEE212"/><path d="m9.874 51.445.488.413 18.634-22.417-.488-.413L9.874 51.445Z" fill="#DEE212"/><path d="m7.022 48.541.427.478 21.543-19.581-.426-.478L7.022 48.54Z" fill="#DEE212"/><path d="m4.611 45.235.357.534 24.06-16.388-.356-.534-24.06 16.388Z" fill="#DEE212"/><path d="m2.655 41.691.28.578L28.99 29.442l-.28-.578L2.656 41.691Z" fill="#DEE212"/><path d="m1.23 37.866.197.612 27.57-9.043-.197-.612-27.57 9.043Z" fill="#DEE212"/><path d="m.335 33.892.11.632 28.548-5.081-.11-.633L.334 33.892Z" fill="#DEE212"/><path d="m0 29.818.022.642 28.972-1.021-.023-.642L0 29.817Z" fill="#DEE212"/><path d="m.228 25.74-.066.639 28.83 3.057.067-.639L.229 25.74Z" fill="#DEE212"/><path d="m1.02 21.736-.154.624 28.128 7.08.154-.624-28.128-7.08Z" fill="#DEE212"/><path d="m2.35 17.881-.24.596L28.99 29.44l.238-.596L2.35 17.88Z" fill="#DEE212"/><path d="m4.205 14.25-.318.556 25.105 14.632.319-.557L4.205 14.25Z" fill="#DEE212"/><path d="m6.539 10.914-.392.507L28.99 29.438l.393-.507L6.539 10.914Z" fill="#DEE212"/><path d="m9.313 7.942-.458.447 20.138 21.05.458-.446L9.313 7.943Z" fill="#DEE212"/><path d="m12.468 5.386-.515.378 17.04 23.675.515-.378-17.04-23.675Z" fill="#DEE212"/><path d="m15.948 3.293-.563.302 13.61 25.838.563-.302-13.61-25.838Z" fill="#DEE212"/><path d="m19.677 1.719-.598.22 9.915 27.498.598-.22L19.677 1.72Z" fill="#DEE212"/><path d="m23.591.678-.623.134 6.027 28.624.623-.134L23.591.678Z" fill="#DEE212"/><path d="m27.613.199-.636.045 2.024 29.192.636-.045L27.613.2Z" fill="#DEE212"/><path d="m31.658.29-.636-.045L29 29.437l.636.045L31.658.29Z" fill="#DEE212"/><path d="m35.646.948-.623-.134-6.028 28.624.624.134L35.646.948Z" fill="#DEE212"/><path d="m39.513 2.158-.599-.22L29 29.437l.599.22 9.915-27.5Z" fill="#DEE212"/><path d="m43.17 3.902-.562-.302-13.61 25.839.563.302 13.61-25.839Z" fill="#DEE212"/><path d="m46.55 6.138-.516-.378-17.04 23.675.516.378L46.55 6.138Z" fill="#DEE212"/><path d="m49.595 8.835-.459-.446L29 29.439l.458.447 20.138-21.05Z" fill="#DEE212"/><path d="m52.234 11.93-.392-.507-22.844 18.016.392.507 22.844-18.017Z" fill="#DEE212"/><path d="m54.39 15.53-.32-.56-25.22 14.632.319.56 25.22-14.632Z" fill="#DEE212"/><path d="m56.12 19.072-.239-.596-26.878 10.962.238.596L56.12 19.072Z" fill="#DEE212"/><path d="m57.283 22.98-.154-.623L29 29.437l.154.623 28.128-7.08Z" fill="#DEE212"/><path d="m57.895 27.013-.067-.639-28.83 3.057.066.639 28.83-3.057Z" fill="#DEE212"/><path d="m57.95 31.1.022-.641L29 29.438l-.022.642 28.971 1.02Z" fill="#DEE212"/><path d="m57.44 35.154.11-.633-28.547-5.08-.11.632 28.547 5.081Z" fill="#DEE212"/><path d="m56.369 39.091.197-.611-27.57-9.043-.198.611 27.57 9.043Z" fill="#DEE212"/><path d="m54.778 42.847.279-.578-26.055-12.828-.28.578 26.056 12.828Z" fill="#DEE212"/><path d="m52.68 46.334.355-.533-24.033-16.364-.356.533L52.68 46.334Z" fill="#DEE212"/><path d="m50.115 49.5.426-.479L28.998 29.44l-.426.478 21.543 19.581Z" fill="#DEE212"/><path d="m47.146 52.273.488-.414L29 29.442l-.488.413 18.634 22.418Z" fill="#DEE212"/><path d="m43.82 54.602.54-.341L29 29.444l-.54.34L43.82 54.603Z" fill="#DEE212"/><path d="m40.21 56.442.583-.262-11.791-26.733-.582.261 11.79 26.734Z" fill="#DEE212"/><path d="m36.377 57.749.612-.178-7.99-28.13-.613.178 7.99 28.13Z" fill="#DEE212"/><path d="m32.398 58.512.631-.09-4.035-28.979-.63.09 4.034 28.979Z" fill="#DEE212"/></svg>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[20vw] md:pt-[15vw] xl:pt-[15vw]">
                  <h2 className="text-[14vw] md:text-[8.4vw] font-display uppercase leading-[0.9] md:leading-[0.9] text-center relative z-10 mix-blend-lighten pt-[2vw] pb-[6vw]">Get <span className="block">Started</span></h2>

                  <div className="flex flex-wrap mb-[3vw]">
                    <div className="w-full md:w-1/2 flex justify-center border-b md:border-b-0 md:border-r border-yellow">
                      <div className="max-w-[300px] text-center py-[5vw]">
                        <a href="#" className="inline-block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl ml-auto px-2 2xl:px-3 pt-[3px] pb-[2px] rounded-full border-yellow border hover:bg-yellow hover:text-off-black focus:bg-yellow focus:text-off-black focus:outline-none ring-offset-4 ring-offset-off-black focus:ring-[2px] ring-yellow mb-8">Clients</a>

                        <p className="">High-quality talent is your secret to success, not an arbitrary expense. We’re here to ensure that your investment has the greatest ROI based on your company’s needs and culture.</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="max-w-[300px] text-center py-[5vw]">
                        <a href="#" className="inline-block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl ml-auto px-2 2xl:px-4 pt-[3px] pb-[2px] rounded-full border-yellow border hover:bg-yellow hover:text-off-black focus:bg-yellow focus:text-off-black focus:outline-none ring-offset-4 ring-offset-off-black focus:ring-[2px] ring-yellow mb-8">Talent</a>

                        <p className="">High-quality talent is your secret to success, not an arbitrary expense. We’re here to ensure that your investment has the greatest ROI based on your company’s needs and culture.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </m.div>
              
              <Footer />
            </m.main>
          </SmoothWrapper>
        </div>
      </LazyMotion>
    </Layout>
  )
}
