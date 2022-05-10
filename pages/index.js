import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade, reveal, revealOut, scale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import SmoothWrapper from '@/components/smooth-wrapper'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Carousel from '@/components/carousel'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import { useContext, useState } from 'react'
import { BioContext } from '../context/bio'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    heroText,
    heroServices[],
    bioImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    bioHeading,
    bioText,
    weWorkWith[] {
      title,
      text
    },
    ethosAndClientsText,
    clients[],
    imageCarousel[]{
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    rolesFilled[]{
      title,
      type,
      client,
      year
    },
    quote {
      text,
      author,
      role
    },
    getStartedClientsText,
    getStartedTalentText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "contact": *[_type == "contact"][0]{
    emailAddress,
    clientsEmailAddress,
    talentEmailAddress,
    socials[]{
      title,
      url
    }
  }
}`
const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home, contact } } = pageService.getPreviewHook(initialData)()
  const [workExpanded, setWorkExpanded] = useState(false)
  const [bioContext, setBioContext] = useContext(BioContext);

  const ToggleWork = () => {
    setWorkExpanded(!workExpanded)
  }

  return (
    <Layout>
      <div className="fixed-target" id="fixed-global"></div>
      <NextSeo title={home.title} />
      
      <LazyMotion features={domAnimation}>
        <div className={`transition-translate ease-[cubic-bezier(0.77,0,0.18,1)] duration-[750ms] ${bioContext ? 'md:translate-x-[-10%]' : 'md:translate-x-[0]' }`}>
          <SmoothWrapper>
            
            <m.main
              initial="initial"
              animate="enter"
              exit="exit"
              className="mb-12 md:mb-16 xl:mb-24"
            >
              <m.div variants={fade}>
                <Header bioImage={home.bioImage} bioHeading={home.bioHeading} bioText={home.bioText} bioContext={bioContext} />
                
                <section className="h-screen relative p-3 md:p-4 xl:p-6 pt-[120px] md:pt-[160px] xl:pt-[160px]">
                  <m.h1 initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.03 }}}} className="text-[13vw] md:text-[13.5vw] font-display uppercase leading-[0.95] md:leading-[0.94] text-center relative z-10 mix-blend-lighten pt-[2vw]" data-scroll data-scroll-speed={0.4}>
                    <span className="block overflow-hidden relative">
                      <m.span className="block mb-[-1.5vw]" variants={reveal}>Connecting</m.span>
                    </span>
                    <span className="block overflow-hidden relative">
                      <m.span className="block mb-[-1.5vw]" variants={reveal}>Humans</m.span>
                    </span>
                  </m.h1>

                  <div className="absolute inset-0 flex items-center justify-center z-0" data-scroll data-scroll-speed={-0.55}>
                    <div className="relative overflow-hidden w-[88vw] md:w-[50vw] lg:w-[45vw] xl:w-[44vw] 2xl:w-[42vw] h-[33vh] md:h-[50vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[77vh] rounded-xl rotate-[-3deg] max-w-[840px] hero-image mt-[-15vh] md:mt-[4vw] lg:mt-[24vh] xl:mt-[26vh] 2xl:mt-[30vh]">
                      <m.div variants={revealOut} className="absolute inset-0 bg-yellow-dark z-50"></m.div>

                      <m.div variants={scale} className="w-full h-full">
                        <Image
                          src={home.heroImage.asset.url}
                          alt="Something"
                          layout="fill"
                          className="w-full h-full object-cover object-center will-change-transform"
                        />
                      </m.div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 p-3 md:p-4 xl:p-6 max-w-[80vw] md:max-w-[36vw] lg:w-[26vw]">
                    <p className="indent-9 text-base lg:text-lg lg:leading-[1.2] xl:text-xl xl:leading-[1.2] 2xl:text-[24px] 2xl:leading-[1.2]">{home.heroText}.</p>

                    <m.ul initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.03 }}}} className="leading-tight xl:leading-tight text-sm xl:text-lg 2xl:text-base 2xl:leading-tight flex flex-wrap md:hidden mt-5">
                      <li className="w-full mt-5 mb-3"><span className="-mr-1 inline-block"><svg className="w-[14px]" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#DEE212" d="M11.5 12V0M11 .5H0"/><path d="m11.5 15-2.165-3.75h4.33L11.5 15Z" fill="#DEE212"/></svg></span></li>

                      {home.heroServices.map((e, i) => {
                        return (
                          <li className="w-1/2 overflow-hidden relative" key={i}>
                            <m.span variants={reveal} className="block">{e}</m.span>
                          </li>
                        )
                      })}
                    </m.ul>
                  </div>

                  <div className="absolute bottom-0 right-0 p-3 md:p-4 xl:p-6 max-w-[70vw] md:max-w-[36vw] lg:w-[28vw] hidden md:block">
                    <m.ul initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.03 }}}} className="leading-tight xl:leading-tight text-base xl:text-lg 2xl:text-lg 2xl:leading-tight text-right">
                      <li className="w-full mb-4 -ml-[5px]"><span className="-mr-1 inline-block"><svg className="w-[15px]" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#DEE212" d="M11.5 12V0M11 .5H0"/><path d="m11.5 15-2.165-3.75h4.33L11.5 15Z" fill="#DEE212"/></svg></span></li>

                      {home.heroServices.map((e, i) => {
                        return (
                          <li key={i} className="relative overflow-hidden">
                            <m.span variants={reveal} className="block">{e}</m.span>
                          </li>
                        )
                      })}
                    </m.ul>
                  </div>
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[14vw] md:pt-[16vw] xl:pt-[15vw]">
                  <span className="block mb-4 md:mb-6 md:text-lg">(We work with)</span>

                  <ul className="fancy-nav">
                    {home.weWorkWith.map((e, i) => {
                      return (
                        <li className={`text-yellow pt-3 pb-5 md:py-2 fancy-nav__item group md:hover:text-off-black relative overflow-hidden`} key={i}>
                          <span className="block rounded-xl bg-yellow h-0 md:group-hover:h-[92%] absolute bottom-0 left-0 right-0 z-0 fancy-nav__item-inner my-2">
                          </span>

                          <span className="block bg-yellow-dark md:group-hover:bg-yellow transition ease-in-out duration-500 h-[1px] w-full absolute bottom-0 left-0 right-0 z-0">
                          </span>
                          <span className={`block bg-yellow-dark md:group-hover:bg-yellow transition-all ease-in-out duration-500 h-[1px] delay-150 ${ i == 0 ? 'mt-[0px]' : 'mt-[-1px]' } md:group-hover:mt-0 w-full absolute top-0 left-0 right-0 z-0`}>
                          </span>
                          
                          <span className="relative z-10 block md:flex items-center md:py-2 md:group-hover:pl-4 md:group-hover:pr-6 md:group-focus-visible:pl-4 md:group-focus-visible:pr-6 fancy-nav__item-inner-inner">
                            <span className="block uppercase flex-1 font-display text-[10vw] md:text-[7.4vw] leading-[1] pt-2 pb-1 md:pb-0">{e.title}</span>
                            <span className="block md:ml-auto max-w-[300px] md:max-w-[240px] 2xl:max-w-[300px] md:text-right text-base lg:text-lg lg:leading-[1.2] 2xl:text-xl 2xl:leading-[1.2]">{e.text}</span>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[17vw] md:pt-[12vw] xl:pt-[10vw]">
                  <div className="grid grid-cols-8 md:grid-cols-12 gap-6">
                    <div className="col-span-8 md:col-span-3 xl:col-span-2">
                      <span className="block mb-4 md:mb-6 md:text-lg">(Ethos &amp; Clients)</span>
                    </div>
                    <div className="col-span-6 md:col-start-4 md:col-span-4 content md:text-lg md:leading-tight max-w-[500px]">
                      <div className="ethos-text">
                        <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.ethosAndClientsText} />
                      </div>
                    </div>

                    <div className="col-span-3 xl:col-span-4 col-start-10 xl:col-start-10 max-w-[300px] ml-auto">
                      <ul className="xl:flex xl:flex-wrap md:text-lg">
                        {home.clients.map((e, i) => {
                          return (
                            <li className="xl:w-1/2 text-right" key={i}>{e}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section className="pt-[17vw] md:pt-[12vw] xl:pt-[10vw]">
                  <Carousel items={home.imageCarousel} />
                </section>
                
                <section className="p-3 md:p-4 xl:p-6 pt-[17vw] md:pt-[12vw] xl:pt-[10vw]">
                  <h2 className="text-[14vw] md:text-[8.4vw] font-display uppercase leading-[0.9] md:leading-[0.9] text-center relative z-10 mix-blend-lighten pt-[2vw]">Roles Filled <span className="text-xl md:text-2xl font-sans align-top hidden md:inline-block md:-ml-6 md:-mt-6">({home.rolesFilled.length})</span></h2>

                  <div className="relative mb-5 md:mb-6 xl:mb-8 fancy-nav">
                    <ul className="mt-[12vw] md:mt-[8vw] xl:mt-[6vw] fancy-nav">
                      {home.rolesFilled.map((e, i) => {
                        return (
                          <li className={`text-yellow pt-3 pb-5 md:py-2 fancy-nav__item group md:hover:text-off-black relative overflow-hidden`} key={i}>
                            <span className="block rounded-xl bg-yellow h-0 md:group-hover:h-[83%] absolute bottom-0 left-0 right-0 z-0 fancy-nav__item-inner my-2"></span>

                            <span className="block bg-yellow-dark md:group-hover:bg-yellow transition ease-in-out duration-500 h-[1px] w-full absolute bottom-0 left-0 right-0 z-0">
                            </span>
                            <span className={`block delay-150 bg-yellow-dark md:group-hover:bg-yellow transition-all ease-in-out duration-500 h-[1px] ${ i == 0 ? 'mt-[0px]' : 'mt-[-1px]' } md:group-hover:mt-0 w-full absolute top-0 left-0 right-0 z-0`}>
                            </span>
                            
                            <span className="flex flex-wrap items-center rounded-xl md:py-3 2xl:py-4 md:group-hover:pl-5 md:group-hover:pr-5 md:group-focus-visible:pl-5 relative z-10 md:group-focus-visible:pr-5 transition-all ease-in-out duration-300">
                              <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl leading-right md:leading-tight">{e.title}</span>
                              <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl leading-right md:leading-tight">{e.type}</span>
                              <span className="block w-1/2 md:flex-1 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl leading-right md:leading-tight">{e.client}</span>
                              <span className="block w-1/2 md:w-auto text-xl md:text-2xl xl:text-3xl 2xl:text-4xl leading-right md:leading-tight ml-auto">{e.year}</span>
                            </span>
                          </li>
                        )
                      })}
                    </ul>

                    <div className="fancy-nav__shadow absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-off-black to-transparent z-10 pointer-events-none"></div>
                  </div>

                  {/* <button onClick={ToggleWork} className="md:text-xl xl:text-2xl text-right ml-auto block focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow">{workExpanded ? '- Show Less' : '+ Show More'}</button> */}
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[18vw] md:pt-[13vw] xl:pt-[12vw]">
                  <div className="relative flex justify-center">
                    <div className="px-[3vw] md:px-[10vw] flex flex-wrap items-center justify-center">
                      <div className="w-full pt-[10vw]">
                        <span className="block mx-auto text-center mb-6 md:mb-12 md:text-lg" data-scroll data-scroll-speed={1.1}>(Kind words)</span>
                        <h3 className="text-[9vw] md:text-[5.9vw] font-display uppercase leading-[0.92] md:leading-[0.92] text-center relative z-10 mix-blend-lighten w-full mb-12 md:mb-12" data-scroll data-scroll-speed={1.1}>“{home.quote.text}”</h3>
                        
                        <span className="block w-10 md:w-12 xl:w-14 mx-auto text-center mb-3 md:mb-4 xl:mb-5" data-scroll data-scroll-speed={1.1}>
                          <svg className="w-full" viewBox="0 0 60 83" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m59.383 53.803.013.001c.203-4.613.784-20.353-.255-29.166-.299-2.555-2.21-5.651-4.63-9.572-1.944-3.153-4.147-6.729-5.704-10.444-1.245-2.968-3.334-4.33-5.585-3.635-2.515.774-4.783 4.117-5.339 8.916-2.225-3.216-3.835-3.439-5.639-2.407-2.549 1.457-4.04 6.46-2.121 12.312.91 2.779 2.58 4.506 4.049 6.028 1.105 1.144 2.058 2.132 2.439 3.302l.358 1.168A323.8 323.8 0 0 0 33.9 28.33c-2.244-1.432-3.911-2.133-5.409-2.28-2.026-.2-3.572.62-5.527 1.66-2.455 1.302-5.814 3.085-12.34 4.2-1.94.33-3.353 1.225-4.08 2.592-.727 1.365-.728 3.076-.004 5.09l.02.053c-5.779.959-3.846 8.71-5.394 15.925-.407 1.892-.806 3.363.21 5.483C7.724 74.29 16.226 80.509 29.803 81.846c5.426.534 9.267.77 13.078-.756 4.76-1.901 14.068-12.987 16.114-22.534.362-1.679.481-3.266.387-4.753ZM42.067 5.26c1.313-3.165 3.967-2.603 4.889-.321 1.592 3.943 3.856 7.948 5.855 11.188 2.058 3.332 4.135 6.715 4.362 8.633.72 6.11.379 17.002.199 23.692-2.118-3.645-6.117-7.264-8.835-9.583-.174-2.673-.545-7.34-1.316-13.603-.511-4.19-4.875-7.03-5.608-12.88-.337-2.71-.331-5.232.454-7.126Zm-9.558 12.177c-.538-1.504-.82-7.013 1.171-8.334 1.853-1.23 3.014 1.642 4.067 3.924.245 4.033 2.164 7.789 3.554 9.96 1.083 1.692 2.018 3.15 2.19 4.754.214 1.981.46 5.221.63 7.58a112.537 112.537 0 0 0-3.204-2.336 144.998 144.998 0 0 0-2.606-8.018c-.926-2.62-4.495-3.876-5.802-7.53Zm8.823 59.44c-3.391 1.36-6.761 1.178-12.052.657C17.244 76.349 5.837 68.69 2.856 59.207c-.507-1.609.29-3.744.534-6.663.586-6.987 1.09-11.104 4.361-10.782 1.57.154 6.186 4.733 5.315 15.115l11.435 6.998c3.802-3.517 14.202-8.617 14.202-8.617-1.376-2.293-.024-8.312-.024-8.312-3.222-.775-9.859-5.013-11.832-10.22-3.29 2.544-17.907 6.446-18.26-.337-.105-2.008 1.598-2.544 2.26-2.657 6.905-1.178 10.344-2.979 12.796-4.28 1.786-.95 3.463-1.721 4.782-1.592 1.105.11 2.766.876 4.67 2.094 5.413 3.45 14.449 8.931 22.159 17.689.718.817 1.574 2.539 1.803 3.614 2.062 9.724-11.015 23.727-15.725 25.62Zm-5.34-21.767c-2.38 1.076-7.952 3.738-11.396 6.548l-8.306-7.02c.436-5.207-.293-9.076-1.613-11.662 3.883.111 8.75-.512 11.291-1.677 1.55 2.1 5.537 6.918 10.238 8.083-.305 1.495-.616 3.785-.213 5.728Z" fill="#DEE212"/></svg>
                        </span>
                        <span className="block mx-auto text-center uppercase text-lg leading-tight md:text-xl md:leading-tight" data-scroll data-scroll-speed={1.1}>{home.quote.author}<span className="block">{home.quote.role}</span></span>
                      </div>
                    </div>

                    <div className="opacity-25 absolute inset-0 z-0 w-full h-full flex items-center justify-center">
                      <div className="w-10/12 md:w-[58%] overflow-hidden py-[1vw]">
                        <svg className="blur-[6px] md:blur-[0.8vw] spin w-[95%] mx-auto" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.358 58.706h.637V29.442h-.637v29.264Z" fill="#DEE212"/><path d="m24.331 58.33.631.09 4.035-28.98-.63-.09-4.036 28.98Z" fill="#DEE212"/><path d="m20.394 57.395.612.177 7.99-28.13-.612-.177-7.99 28.13Z" fill="#DEE212"/><path d="m16.627 55.915.582.261L29 29.443l-.582-.262-11.79 26.734Z" fill="#DEE212"/><path d="m13.09 53.922.54.34L28.99 29.446l-.54-.34L13.09 53.922Z" fill="#DEE212"/><path d="m9.874 51.445.488.413 18.634-22.417-.488-.413L9.874 51.445Z" fill="#DEE212"/><path d="m7.022 48.541.427.478 21.543-19.581-.426-.478L7.022 48.54Z" fill="#DEE212"/><path d="m4.611 45.235.357.534 24.06-16.388-.356-.534-24.06 16.388Z" fill="#DEE212"/><path d="m2.655 41.691.28.578L28.99 29.442l-.28-.578L2.656 41.691Z" fill="#DEE212"/><path d="m1.23 37.866.197.612 27.57-9.043-.197-.612-27.57 9.043Z" fill="#DEE212"/><path d="m.335 33.892.11.632 28.548-5.081-.11-.633L.334 33.892Z" fill="#DEE212"/><path d="m0 29.818.022.642 28.972-1.021-.023-.642L0 29.817Z" fill="#DEE212"/><path d="m.228 25.74-.066.639 28.83 3.057.067-.639L.229 25.74Z" fill="#DEE212"/><path d="m1.02 21.736-.154.624 28.128 7.08.154-.624-28.128-7.08Z" fill="#DEE212"/><path d="m2.35 17.881-.24.596L28.99 29.44l.238-.596L2.35 17.88Z" fill="#DEE212"/><path d="m4.205 14.25-.318.556 25.105 14.632.319-.557L4.205 14.25Z" fill="#DEE212"/><path d="m6.539 10.914-.392.507L28.99 29.438l.393-.507L6.539 10.914Z" fill="#DEE212"/><path d="m9.313 7.942-.458.447 20.138 21.05.458-.446L9.313 7.943Z" fill="#DEE212"/><path d="m12.468 5.386-.515.378 17.04 23.675.515-.378-17.04-23.675Z" fill="#DEE212"/><path d="m15.948 3.293-.563.302 13.61 25.838.563-.302-13.61-25.838Z" fill="#DEE212"/><path d="m19.677 1.719-.598.22 9.915 27.498.598-.22L19.677 1.72Z" fill="#DEE212"/><path d="m23.591.678-.623.134 6.027 28.624.623-.134L23.591.678Z" fill="#DEE212"/><path d="m27.613.199-.636.045 2.024 29.192.636-.045L27.613.2Z" fill="#DEE212"/><path d="m31.658.29-.636-.045L29 29.437l.636.045L31.658.29Z" fill="#DEE212"/><path d="m35.646.948-.623-.134-6.028 28.624.624.134L35.646.948Z" fill="#DEE212"/><path d="m39.513 2.158-.599-.22L29 29.437l.599.22 9.915-27.5Z" fill="#DEE212"/><path d="m43.17 3.902-.562-.302-13.61 25.839.563.302 13.61-25.839Z" fill="#DEE212"/><path d="m46.55 6.138-.516-.378-17.04 23.675.516.378L46.55 6.138Z" fill="#DEE212"/><path d="m49.595 8.835-.459-.446L29 29.439l.458.447 20.138-21.05Z" fill="#DEE212"/><path d="m52.234 11.93-.392-.507-22.844 18.016.392.507 22.844-18.017Z" fill="#DEE212"/><path d="m54.39 15.53-.32-.56-25.22 14.632.319.56 25.22-14.632Z" fill="#DEE212"/><path d="m56.12 19.072-.239-.596-26.878 10.962.238.596L56.12 19.072Z" fill="#DEE212"/><path d="m57.283 22.98-.154-.623L29 29.437l.154.623 28.128-7.08Z" fill="#DEE212"/><path d="m57.895 27.013-.067-.639-28.83 3.057.066.639 28.83-3.057Z" fill="#DEE212"/><path d="m57.95 31.1.022-.641L29 29.438l-.022.642 28.971 1.02Z" fill="#DEE212"/><path d="m57.44 35.154.11-.633-28.547-5.08-.11.632 28.547 5.081Z" fill="#DEE212"/><path d="m56.369 39.091.197-.611-27.57-9.043-.198.611 27.57 9.043Z" fill="#DEE212"/><path d="m54.778 42.847.279-.578-26.055-12.828-.28.578 26.056 12.828Z" fill="#DEE212"/><path d="m52.68 46.334.355-.533-24.033-16.364-.356.533L52.68 46.334Z" fill="#DEE212"/><path d="m50.115 49.5.426-.479L28.998 29.44l-.426.478 21.543 19.581Z" fill="#DEE212"/><path d="m47.146 52.273.488-.414L29 29.442l-.488.413 18.634 22.418Z" fill="#DEE212"/><path d="m43.82 54.602.54-.341L29 29.444l-.54.34L43.82 54.603Z" fill="#DEE212"/><path d="m40.21 56.442.583-.262-11.791-26.733-.582.261 11.79 26.734Z" fill="#DEE212"/><path d="m36.377 57.749.612-.178-7.99-28.13-.613.178 7.99 28.13Z" fill="#DEE212"/><path d="m32.398 58.512.631-.09-4.035-28.979-.63.09 4.034 28.979Z" fill="#DEE212"/></svg>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[20vw] md:pt-[15vw] xl:pt-[15vw]">
                  <h2 className="text-[14vw] md:text-[8.4vw] font-display uppercase leading-[0.9] md:leading-[0.9] text-center relative z-10 mix-blend-lighten pt-[2vw] pb-[6vw]">Get <span className="block">Started</span></h2>

                  <div className="flex flex-wrap mb-[3vw]">
                    <div className="w-full md:w-1/2 flex justify-center border-b md:border-b-0 md:border-r border-yellow">
                      <div className="max-w-[420px] text-center py-[10vw] md:py-[5vw]">
                        <a href={`mailto:${contact.clientsEmailAddress}`} className="inline-block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl ml-auto px-3 md:px-4 2xl:px-6 pt-[3px] md:pt-[5px] pb-[2px] md:pb-[2px] rounded-full border-yellow border  focus-visible:text-yellow focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow mb-8 overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500 relative">
                          <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
                          <span className="block overflow-hidden relative z-[10]">
                            <span>Clients</span>
                          </span>
                        </a>

                        <p className="md:px-8 lg:px-0 text-base lg:text-lg lg:leading-[1.2] xl:text-lg xl:leading-[1.2] 2xl:text-xl 2xl:leading-[1.2]">{home.getStartedClientsText}</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="max-w-[420px] text-center py-[10vw] md:py-[5vw]">
                        <a href={`mailto:${contact.talentEmailAddress}`} className="inline-block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl ml-auto px-3 md:px-4 2xl:px-6 pt-[3px] md:pt-[5px] pb-[2px] md:pb-[2px] rounded-full border-yellow border  focus-visible:text-yellow focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow mb-8 overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500 relative">
                          <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
                          <span className="block overflow-hidden relative z-[10]">
                            <span>Talent</span>
                          </span>
                        </a>

                        <p className="md:px-8 lg:px-0 text-base lg:text-lg lg:leading-[1.2] xl:text-lg xl:leading-[1.2] 2xl:text-xl 2xl:leading-[1.2]">{home.getStartedTalentText}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </m.div>
              
              <Footer contact={contact} />
            </m.main>
          </SmoothWrapper>
        </div>
      </LazyMotion>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}