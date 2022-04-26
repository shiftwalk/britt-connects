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
              </m.div>
            </m.main>

            {/* <Footer /> */}
          </SmoothWrapper>
        </div>
      </LazyMotion>
    </Layout>
  )
}
