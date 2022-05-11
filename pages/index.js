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
import Quotes from '@/components/quotes'
import Clock from 'react-live-clock'
import RevealOnEnter from '@/components/reveal-on-enter'
import FadeOnEnter from '@/components/fade-on-enter'

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
    quotes[] {
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
        <div className={`transition-translate ease-[cubic-bezier(0.77,0,0.18,1)] duration-[750ms] ${bioContext ? 'translate-x-[-10%]' : 'translate-x-[0]' }`}>
          <SmoothWrapper>
            
            <m.main
              initial="initial"
              animate="enter"
              exit="exit"
              className=""
            >
              <m.div variants={fade}>
                <Header bioImage={home.bioImage} bioHeading={home.bioHeading} bioText={home.bioText} bioContext={bioContext} />
                
                <section className="md:h-screen relative p-3 md:p-4 xl:p-6 pt-[120px] md:pt-[160px] xl:pt-[160px]">
                  <span className="tracking-tight leading-none md:leading-none xl:leading-none text-sm md:text-lg xl:text-xl mx-auto md:hidden w-full flex justify-center mt-2">
                    <div className="relative overflow-hidden -ml-8 md:-ml-[80px] mb-3">
                      <m.div variants={reveal} className="flex items-center space-x-[6px]">
                        <svg className="w-[18px] md:w-[23px] xl:w-[28px] mb-px" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M28.401 18.535c2.84-1.868 4.374-4.295 4.374-6.785s-1.534-4.917-4.374-6.785C25.571 3.103 21.58 1.906 17.1 1.906S8.629 3.103 5.799 4.966C2.959 6.832 1.425 9.26 1.425 11.75s1.534 4.917 4.374 6.785c2.83 1.862 6.821 3.059 11.301 3.059s8.471-1.197 11.301-3.06ZM17.1 23c9.444 0 17.1-5.037 17.1-11.25S26.544.5 17.1.5C7.656.5 0 5.537 0 11.75S7.656 23 17.1 23Z" fill="#DEE212"/><path fillRule="evenodd" clipRule="evenodd" d="M17.1 21.594c3.951 0 7.615-4.12 7.615-9.844 0-5.723-3.664-9.844-7.615-9.844s-7.615 4.12-7.615 9.844c0 5.724 3.664 9.844 7.615 9.844Zm0 1.406c4.97 0 9-5.037 9-11.25S22.07.5 17.1.5s-9 5.037-9 11.25S12.13 23 17.1 23Z" fill="#DEE212"/><path fillRule="evenodd" clipRule="evenodd" d="M33.3 12.2H.9v-1.8h32.4v1.8Z" fill="#DEE212"/><path fillRule="evenodd" clipRule="evenodd" d="M16.2 23V1.4H18V23h-1.8Z" fill="#DEE212"/></svg>
                        <span className="block leading-none"><span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></span>, <span className="hidden md:inline-block">Los Angeles</span><span className="inline-block md:hidden">LA</span></span>
                      </m.div>
                    </div>
                  </span>
                  <m.h1 initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.03 }}}} className="text-[13.5vw] md:text-[13.5vw] font-display uppercase leading-[0.99] md:leading-[0.94] text-center relative z-10 mix-blend-lighten pt-[2vw]" data-scroll data-scroll-speed={0.4}>
                    <span className="block overflow-hidden relative">
                      <m.span className="block mb-[-1.5vw]" variants={reveal}>Connecting</m.span>
                    </span>
                    <span className="block overflow-hidden relative">
                      <m.span className="block mb-[-1.5vw]" variants={reveal}>Humans</m.span>
                    </span>
                  </m.h1>

                  <div className="md:absolute inset-0 flex items-center justify-center z-0 py-5 mt-[-50px] md:mt-0 md:py-0 overflow-hidden md:overflow-visible -mx-3" data-scroll data-scroll-speed={-0.55}>
                    <div className="relative overflow-hidden w-[100vw] md:w-[50vw] lg:w-[45vw] xl:w-[44vw] 2xl:w-[42vw] h-[60vh] md:h-[50vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[77vh] md:rounded-xl rotate-[-2deg] md:rotate-[-3deg] max-w-[840px] hero-image md:mt-[4vw] lg:mt-[24vh] xl:mt-[26vh] 2xl:mt-[30vh] scale-105 md:scale-100">
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

                  <div className="relative md:absolute bottom-0 left-0 p-0 md:p-4 xl:p-6 max-w-[100vw] md:max-w-[40vw] lg:w-[30vw] mt-8 md:mt-0">
                    <p className="indent-9 text-lg leading-[1.175] lg:text-lg lg:leading-[1.175] xl:text-xl xl:leading-[1.175] 2xl:text-[24px] 2xl:leading-[1.175] w-[80%]">{home.heroText}.</p>

                    <m.ul initial="initial" animate="enter" exit="exit" variants={{ enter: { transition: { staggerChildren: 0.03 }}}} className="leading-tight xl:leading-tight text-sm xl:text-lg 2xl:text-base 2xl:leading-tight  ml-auto text-right md:hidden mt-5">
                      <li className="block ml-auto text-right mt-5 mb-3"><span className="-mr-1 inline-block"><svg className="w-[14px]" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#DEE212" d="M11.5 12V0M11 .5H0"/><path d="m11.5 15-2.165-3.75h4.33L11.5 15Z" fill="#DEE212"/></svg></span></li>

                      {home.heroServices.map((e, i) => {
                        return (
                          <li className="overflow-hidden relative block ml-auto text-right" key={i}>
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
                  <span className="block mb-4 md:mb-6">
                    <RevealOnEnter>
                      <span className="block md:text-lg">(We work with)</span>
                    </RevealOnEnter>
                  </span>

                  <ul className="fancy-nav">
                    {home.weWorkWith.map((e, i) => {
                      return (
                        <li className={`text-yellow pt-2 pb-4 md:py-2 fancy-nav__item group md:hover:text-off-black relative overflow-hidden`} key={i}>
                          <span className="block rounded-xl bg-yellow h-0 md:group-hover:h-[88%] xl:group-hover:h-[90%] absolute bottom-0 left-0 right-0 z-0 fancy-nav__item-inner my-2">
                          </span>

                          <span className="block bg-yellow-dark md:group-hover:bg-yellow transition ease-in-out duration-500 h-[1px] w-full absolute bottom-0 left-0 right-0 z-0">
                          </span>
                          <span className={`block bg-yellow-dark md:group-hover:bg-yellow transition-all ease-in-out duration-500 h-[1px] delay-150 ${ i == 0 ? 'mt-[0px]' : 'mt-[-1px]' } md:group-hover:mt-0 w-full absolute top-0 left-0 right-0 z-0`}>
                          </span>
                          
                          <span className="relative z-10 block md:flex items-center md:pt-2 md:pb-1 md:group-hover:pl-4 md:group-hover:pr-6 md:group-focus-visible:pl-4 md:group-focus-visible:pr-6 fancy-nav__item-inner-inner">
                            <span className="uppercase flex-1 font-display text-[11vw] md:text-[7.4vw] leading-[1] pt-2 pb-1 md:pb-0 xl:pt-[1vw] flex md:translate-x-[-50px] xl:translate-x-[-85px] md:group-hover:translate-x-0 transition-transform ease-in-out duration-500 items-center">
                              <span className="md:w-[30px] xl:w-[60px] md:ml-2 xl:ml-3 mr-5 hidden md:block"><svg className="w-full wave md:-mt-3 xl:-mt-[2vw] block" viewBox="0 0 58 89" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m32.261 6.96.32 25.599L21.881 8.695C17.897-.611 5.156 5.105 9.26 13.894l7.791 17.53c-3.731-.583-8.777 3.674-6.914 9.265-2.798-2.777-12.104.063-9.072 9.237 0 0 2.324 6.2 2.945 8.31C5.123 62.02 6.57 69.103 8.224 73.44c4.897 12.837 17.704 16.705 28.222 14.845.22-.038.442-.08.663-.124 10.764-2.168 20.968-10.698 19.976-25.178-.721-10.494-5.053-14.413-10.353-16.992l-.594-38.58c-.045-9.008-14.002-9.819-13.877-.452Zm-21.4 5.308c-2.169-4.872 5.314-7.366 7.486-2.413L32.784 42.78c-1.115.387-3.095 1.897-5.796 2.605l-3.216-9c-.676-1.906-2.732-3.902-4.294-4.73l-8.616-19.387Zm5.882 21.96c2.299.628 3.243 1.186 6.801 11.88-2.682.54-4.23 3.607-3.472 6.728-1.684.34-3.124-1.297-4.143-3.114-1.488-2.648-3.121-6.74-3.959-9.014-1.689-4.598 2.391-7.133 4.773-6.48ZM10.85 45.811c.69 1.33 4.218 8.128 4.431 11.427.354 5.541-7.624 5.938-9.55.544L2.545 48.95c-1.88-5.299 5.008-9.5 8.307-3.138ZM52.332 69.28c-3.736 12.962-16.922 17.8-27.135 15.49-8.801-1.989-15.911-6.637-18.431-22.55 2.14 2.19 11.644 2.853 11.492-6.968a6.302 6.302 0 0 0 2.925.421c2.272 3.509 6.904 3.8 8.352 3.808-2.451 2.315-3.94 6.16-1.197 11.385-2.323-9.075 6.134-13.503 7.573-13.258 1.668.287 4.322 2.808 5.166 4.28.332.58.849 2.54.849 2.54s.055-2.082-.193-2.73c-.763-1.989-4.18-5.398-6.176-5.792-2.372-.465-7.736 1.212-10.067.504-4.667-1.418-4.873-8.263-1.388-8.558 3.945-.334 5.942-1.48 7.7-2.434 2.035-1.102 3.81-2.103 6.115-.953 2.403 1.198 7.617 3.754 9.275 4.876 5.43 3.676 6.872 13.925 5.14 19.939ZM42.463 8.804l.754 35.662c-3.338-1.313-5.076-2.51-6.35-2.346l-2.394-5.27-.234-30.063c-.064-5.042 8.21-3.953 8.224 2.017Z" fill="#2E2B16"/></svg></span>
                              <RevealOnEnter>
                                <span className="block overflow-hidden relative">
                                  <span className="block leading-0 md:group-hover:translate-y-full transition-transform ease-in-out duration-500">{e.title}</span>
                                  <span className="block leading-0 absolute inset-0 -translate-y-full md:group-hover:translate-y-0 transition-transform ease-in-out duration-500">{e.title}</span>
                                </span>
                              </RevealOnEnter>
                            </span>
                            <FadeOnEnter>
                              <span className="block md:ml-auto max-w-[300px] md:max-w-[240px] 2xl:max-w-[300px] md:text-right text-sm leading-[1.25] md:text-base lg:text-lg lg:leading-[1.2] 2xl:text-xl 2xl:leading-[1.2]">{e.text}</span>
                            </FadeOnEnter>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[17vw] md:pt-[12vw] xl:pt-[10vw]">
                  <div className="grid grid-cols-8 md:grid-cols-12 gap-6">
                    <div className="col-span-8 md:col-span-3 xl:col-span-2">
                      <span className="block mb-4 md:mb-6 md:text-lg">
                        <RevealOnEnter>(Ethos &amp; Clients)</RevealOnEnter>
                      </span>
                    </div>
                    <div className="col-span-7 md:col-start-4 md:col-span-4 content md:text-lg md:leading-tight max-w-[500px]">
                      <div className="ethos-text">
                        <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.ethosAndClientsText} />
                      </div>
                    </div>

                    <div className="col-span-3 xl:col-span-4 col-start-10 xl:col-start-10 max-w-[300px] ml-auto hidden md:block">
                      <ul className="xl:flex xl:flex-wrap md:text-lg">
                        {home.clients.map((e, i) => {
                          return (
                            <li className="xl:w-1/2 text-right" key={i}><RevealOnEnter>{e}</RevealOnEnter></li>
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
                  <h2 className="text-[14vw] md:text-[8.4vw] font-display uppercase leading-[0.9] md:leading-[0.9] text-center relative z-10 mix-blend-lighten pt-[2vw]"><span className="block md:inline-block -ml-8 md:ml-0">
                  <RevealOnEnter>Roles&nbsp;</RevealOnEnter>
                  </span> 
                  <span className="block md:inline-block ml-6 md:ml-0">
                  <RevealOnEnter>Filled</RevealOnEnter>
                  </span> <span className="text-xl md:text-2xl font-sans align-top hidden md:inline-block md:-ml-6 md:-mt-6">({home.rolesFilled.length})</span></h2>

                  <div className="relative mb-5 md:mb-6 xl:mb-8 fancy-nav">
                    <ul className="mt-[12vw] md:mt-[8vw] xl:mt-[6vw] fancy-nav">
                      {home.rolesFilled.map((e, i) => {
                        return (
                          <li className={`text-yellow pt-2 pb-2 md:pt-2 md:pb-[6px] fancy-nav__item group md:hover:text-off-black relative overflow-hidden`} key={i}>
                            <span className="block rounded-xl bg-yellow h-0 md:group-hover:h-[80%] xl:group-hover:h-[83%] absolute bottom-0 left-0 right-0 z-0 fancy-nav__item-inner my-2"></span>

                            <span className="block bg-yellow-dark md:group-hover:bg-yellow transition ease-in-out duration-500 h-[1px] w-full absolute bottom-0 left-0 right-0 z-0">
                            </span>
                            <span className={`block delay-150 bg-yellow-dark md:group-hover:bg-yellow transition-all ease-in-out duration-500 h-[1px] ${ i == 0 ? 'mt-[0px]' : 'mt-[-1px]' } md:group-hover:mt-0 w-full absolute top-0 left-0 right-0 z-0`}>
                            </span>
                            
                            <span className="flex flex-wrap items-center rounded-xl md:py-2 2xl:py-2 md:group-hover:pl-5 md:group-hover:pr-5 md:group-focus-visible:pl-5 relative z-10 md:group-focus-visible:pr-5 transition-all ease-in-out duration-300">
                              <span className="w-1/2 md:flex-1 text-lg md:text-2xl xl:text-3xl 2xl:text-4xl leading-right md:leading-tight md:-translate-x-8 xl:-translate-x-14 md:group-hover:translate-x-0 transition-transform ease-in-out duration-500 flex items-center">
                                <span className="md:w-8 xl:w-14 -translate-x-3 hidden md:block"><svg className="w-full wave" viewBox="0 0 78 81" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.383 26.391c-1.858-.908-3.634-2.725-2.502-6.34 1.873-5.98.57-11.988-2.97-13.68-2.056-.988-4.133-.763-5.696.615-1.589 1.402-2.434 3.788-2.376 6.723.1 5.133-.595 9.436-1.266 13.6-.672 4.166-1.308 8.1-.934 12.098.41 4.38 1.466 11.063 2.814 15.388 2.201 7.036 10.564 10.264 15.356 9.395l.05-.01.05-.013c3.98-1.02 8.496-2.143 9.301-2.285 3.24.14 11.697.867 11.782.876l.042.003h.042c1.382.038 2.634-.403 3.623-1.276 1.71-1.508 2.41-4.174 1.706-6.483-.677-2.215-2.45-3.574-4.743-3.634l-5.982-.303a5.13 5.13 0 0 0 .67-3.02 5.851 5.851 0 0 0-1.115-2.941l.296-.314c1.791-1.924 2.081-4.59.875-6.88 1.178-1.302 1.698-2.958 1.472-4.688-.083-1.156-.497-2.252-1.23-3.258-2.16-2.957-6.303-6.02-19.265-3.573Zm18.055 4.61c.587.806.948 1.768.917 2.426-.028.623-.452 1.51-1.105 2.21l-4.347 4.625c-.896.973-1.646 1.22-2.773 1.264l-6.058-.006c-2.222.01-3.444-1.725-3.683-3.667a5.677 5.677 0 0 0 .3 2.335c-1.354 3.17-4.094 5.584-7.499 6.144a8.499 8.499 0 0 1-1.198.105c1.129.4 2.33.508 3.504.315 2.79-.46 5.015-2.488 6.052-5.125.608.654 1.451 1.072 2.541 1.067l6.058.005c1.127-.043 1.878-.29 2.775-1.264l3.474-3.685a5.002 5.002 0 0 1 1.133 2.457c-.106.777-.446 1.553-1.09 2.247L50.09 47.08c-.896.973-1.647 1.22-2.772 1.264l-6.062-.006c-2.221.011-3.441-1.725-3.683-3.667-.181 2.355 1.036 4.853 3.7 4.84l6.058.005c1.13-.044 2.03-.076 2.965-1.016l3.017-3.037c.718.395 1.294 1.386 1.467 2.516a3.497 3.497 0 0 1-.934 1.922l-3.938 3.664c-.824.767-1.852 1.072-2.817 1.11l-4.53.266c-1.903.007-2.948-1.48-3.156-3.142-.154 2.016.763 4.382 3.046 4.372l4.97-.224c.964-.037 1.858-.357 2.715-1.082l2.7-2.287 8.763.445c.089.002.166.02.252.028 4.185.567 3.584 7.734-1.225 7.151-3.785-.455-7.59-1.088-13.56-.218-3.439.501-6.918 1.19-6.918 1.19-4.172.758-11.223-1.77-13.134-7.884-1.292-4.13-2.317-10.374-2.726-14.747-.708-7.543 2.125-15.236 1.918-25.829-.03-1.51.18-4.146 1.98-5.068.868-.444 1.961-.3 3.086.239 2.738 1.308 3.793 6.444 2.158 11.66-1.51 4.82 1.151 7.458 3.751 8.56C50.25 25.55 53.8 28.755 55.438 31Z" fill="#2E2B16"/><path d="M45.762 32.872s-5.805-.695-7.445 3.423c2.473-3.38 8.767-1.59 8.767-1.59s.14-2.318 2.056-3.756c-1.89.411-3.378 1.923-3.378 1.923Z" fill="#2E2B16"/></svg></span>
                                <RevealOnEnter>
                                  <span className="block overflow-hidden relative">
                                    <span className="block leading-0 md:group-hover:translate-y-full transition-transform ease-in-out duration-500">{e.title}</span>
                                    <span className="block leading-0 absolute inset-0 -translate-y-full md:group-hover:translate-y-0 transition-transform ease-in-out duration-500">{e.title}</span>
                                  </span>
                                </RevealOnEnter>
                              </span>
                              <span className="hidden md:block w-1/2 md:flex-1 text-lg md:text-2xl xl:text-3xl 2xl:text-4xl leading-right md:leading-tight">
                              <RevealOnEnter>
                                <span className="block overflow-hidden relative">
                                  <span className="block leading-0 md:group-hover:translate-y-full transition-transform ease-in-out duration-500">{e.type}</span>
                                  <span className="block leading-0 absolute inset-0 -translate-y-full md:group-hover:translate-y-0 transition-transform ease-in-out duration-500">{e.type}</span>
                                </span>
                              </RevealOnEnter>
                              </span>
                              <span className="w-1/2 md:flex-1 text-lg md:text-2xl xl:text-3xl 2xl:text-4xl leading-right md:leading-tight hidden md:block">
                                <RevealOnEnter>
                                  <span className="block overflow-hidden relative">
                                    <span className="block leading-0 md:group-hover:translate-y-full transition-transform ease-in-out duration-500">{e.client}</span>
                                    <span className="block leading-0 absolute inset-0 -translate-y-full md:group-hover:translate-y-0 transition-transform ease-in-out duration-500">{e.client}</span>
                                  </span>
                                </RevealOnEnter>
                              </span>
                              <span className="block w-1/2 md:w-auto text-lg md:text-2xl xl:text-3xl 2xl:text-4xl leading-right md:leading-tight ml-auto text-right md:text-left">
                                <RevealOnEnter>
                                  <span className="block overflow-hidden relative">
                                    <span className="block leading-0 md:group-hover:translate-y-full transition-transform ease-in-out duration-500">{e.year}</span>
                                    <span className="block leading-0 absolute inset-0 -translate-y-full md:group-hover:translate-y-0 transition-transform ease-in-out duration-500">{e.year}</span>
                                  </span>
                                </RevealOnEnter>
                              </span>
                            </span>
                          </li>
                        )
                      })}
                    </ul>

                    {/* <div className="fancy-nav__shadow absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-off-black to-transparent z-10 pointer-events-none"></div> */}
                  </div>

                  {/* <button onClick={ToggleWork} className="md:text-xl xl:text-2xl text-right ml-auto block focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow">{workExpanded ? '- Show Less' : '+ Show More'}</button> */}
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[18vw] md:pt-[13vw] xl:pt-[12vw]">
                  <div className="relative flex justify-center">
                    <div className="px-[3vw] md:px-[10vw] flex flex-wrap items-center justify-center">
                      <Quotes quotes={home.quotes} />
                    </div>

                    <div className="opacity-25 absolute inset-0 z-0 w-full h-full flex items-center justify-center">
                      <div className="w-[120%] md:w-[58%] overflow-hidden py-[1vw]">
                        <svg className="blur-[6px] md:blur-[0.8vw] spin w-[95%] mx-auto" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.358 58.706h.637V29.442h-.637v29.264Z" fill="#DEE212"/><path d="m24.331 58.33.631.09 4.035-28.98-.63-.09-4.036 28.98Z" fill="#DEE212"/><path d="m20.394 57.395.612.177 7.99-28.13-.612-.177-7.99 28.13Z" fill="#DEE212"/><path d="m16.627 55.915.582.261L29 29.443l-.582-.262-11.79 26.734Z" fill="#DEE212"/><path d="m13.09 53.922.54.34L28.99 29.446l-.54-.34L13.09 53.922Z" fill="#DEE212"/><path d="m9.874 51.445.488.413 18.634-22.417-.488-.413L9.874 51.445Z" fill="#DEE212"/><path d="m7.022 48.541.427.478 21.543-19.581-.426-.478L7.022 48.54Z" fill="#DEE212"/><path d="m4.611 45.235.357.534 24.06-16.388-.356-.534-24.06 16.388Z" fill="#DEE212"/><path d="m2.655 41.691.28.578L28.99 29.442l-.28-.578L2.656 41.691Z" fill="#DEE212"/><path d="m1.23 37.866.197.612 27.57-9.043-.197-.612-27.57 9.043Z" fill="#DEE212"/><path d="m.335 33.892.11.632 28.548-5.081-.11-.633L.334 33.892Z" fill="#DEE212"/><path d="m0 29.818.022.642 28.972-1.021-.023-.642L0 29.817Z" fill="#DEE212"/><path d="m.228 25.74-.066.639 28.83 3.057.067-.639L.229 25.74Z" fill="#DEE212"/><path d="m1.02 21.736-.154.624 28.128 7.08.154-.624-28.128-7.08Z" fill="#DEE212"/><path d="m2.35 17.881-.24.596L28.99 29.44l.238-.596L2.35 17.88Z" fill="#DEE212"/><path d="m4.205 14.25-.318.556 25.105 14.632.319-.557L4.205 14.25Z" fill="#DEE212"/><path d="m6.539 10.914-.392.507L28.99 29.438l.393-.507L6.539 10.914Z" fill="#DEE212"/><path d="m9.313 7.942-.458.447 20.138 21.05.458-.446L9.313 7.943Z" fill="#DEE212"/><path d="m12.468 5.386-.515.378 17.04 23.675.515-.378-17.04-23.675Z" fill="#DEE212"/><path d="m15.948 3.293-.563.302 13.61 25.838.563-.302-13.61-25.838Z" fill="#DEE212"/><path d="m19.677 1.719-.598.22 9.915 27.498.598-.22L19.677 1.72Z" fill="#DEE212"/><path d="m23.591.678-.623.134 6.027 28.624.623-.134L23.591.678Z" fill="#DEE212"/><path d="m27.613.199-.636.045 2.024 29.192.636-.045L27.613.2Z" fill="#DEE212"/><path d="m31.658.29-.636-.045L29 29.437l.636.045L31.658.29Z" fill="#DEE212"/><path d="m35.646.948-.623-.134-6.028 28.624.624.134L35.646.948Z" fill="#DEE212"/><path d="m39.513 2.158-.599-.22L29 29.437l.599.22 9.915-27.5Z" fill="#DEE212"/><path d="m43.17 3.902-.562-.302-13.61 25.839.563.302 13.61-25.839Z" fill="#DEE212"/><path d="m46.55 6.138-.516-.378-17.04 23.675.516.378L46.55 6.138Z" fill="#DEE212"/><path d="m49.595 8.835-.459-.446L29 29.439l.458.447 20.138-21.05Z" fill="#DEE212"/><path d="m52.234 11.93-.392-.507-22.844 18.016.392.507 22.844-18.017Z" fill="#DEE212"/><path d="m54.39 15.53-.32-.56-25.22 14.632.319.56 25.22-14.632Z" fill="#DEE212"/><path d="m56.12 19.072-.239-.596-26.878 10.962.238.596L56.12 19.072Z" fill="#DEE212"/><path d="m57.283 22.98-.154-.623L29 29.437l.154.623 28.128-7.08Z" fill="#DEE212"/><path d="m57.895 27.013-.067-.639-28.83 3.057.066.639 28.83-3.057Z" fill="#DEE212"/><path d="m57.95 31.1.022-.641L29 29.438l-.022.642 28.971 1.02Z" fill="#DEE212"/><path d="m57.44 35.154.11-.633-28.547-5.08-.11.632 28.547 5.081Z" fill="#DEE212"/><path d="m56.369 39.091.197-.611-27.57-9.043-.198.611 27.57 9.043Z" fill="#DEE212"/><path d="m54.778 42.847.279-.578-26.055-12.828-.28.578 26.056 12.828Z" fill="#DEE212"/><path d="m52.68 46.334.355-.533-24.033-16.364-.356.533L52.68 46.334Z" fill="#DEE212"/><path d="m50.115 49.5.426-.479L28.998 29.44l-.426.478 21.543 19.581Z" fill="#DEE212"/><path d="m47.146 52.273.488-.414L29 29.442l-.488.413 18.634 22.418Z" fill="#DEE212"/><path d="m43.82 54.602.54-.341L29 29.444l-.54.34L43.82 54.603Z" fill="#DEE212"/><path d="m40.21 56.442.583-.262-11.791-26.733-.582.261 11.79 26.734Z" fill="#DEE212"/><path d="m36.377 57.749.612-.178-7.99-28.13-.613.178 7.99 28.13Z" fill="#DEE212"/><path d="m32.398 58.512.631-.09-4.035-28.979-.63.09 4.034 28.979Z" fill="#DEE212"/></svg>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="p-3 md:p-4 xl:p-6 pt-[20vw] md:pt-[15vw] xl:pt-[15vw]">
                  <h2 className="text-[14vw] md:text-[8.4vw] font-display uppercase leading-[0.9] md:leading-[0.9] text-center relative z-10 mix-blend-lighten pt-[2vw] pb-[6vw]"><RevealOnEnter>Get</RevealOnEnter> <span className="block"><RevealOnEnter>Started</RevealOnEnter></span></h2>

                  <div className="flex flex-wrap mb-[3vw]">
                    <div className="w-full md:w-1/2 flex justify-center border-b md:border-b-0 md:border-r border-yellow">
                      <div className="max-w-[420px] text-center py-[8vw] md:py-[5vw]">
                        <a href={`mailto:${contact.clientsEmailAddress}`} className="hidden md:inline-block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl ml-auto px-3 md:px-4 2xl:px-6 pt-[3px] md:pt-[5px] pb-[2px] md:pb-[2px] rounded-full border-yellow border  focus-visible:text-yellow focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow mb-8 overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500 relative">
                          <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
                          <span className="block overflow-hidden relative z-[10]">
                            <span>Clients</span>
                          </span>
                        </a>

                        <p className="md:px-8 lg:px-0 leading-[1.2] text-base lg:text-lg lg:leading-[1.2] xl:text-lg xl:leading-[1.2] 2xl:text-xl 2xl:leading-[1.2] mb-6 md:mb-0">{home.getStartedClientsText}</p>

                        <a href={`mailto:${contact.clientsEmailAddress}`} className="inline-block md:hidden uppercase tracking-tight leading-none md:leading-none xl:leading-none text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl ml-auto px-3 md:px-4 2xl:px-6 pt-[3px] md:pt-[5px] pb-[2px] md:pb-[2px] rounded-full border-yellow border  focus-visible:text-yellow focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow mb-8 overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500 relative">
                          <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
                          <span className="block overflow-hidden relative z-[10]">
                            <span>Clients</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="max-w-[420px] text-center py-[8vw] md:py-[5vw]">
                        <a href={`mailto:${contact.talentEmailAddress}`} className="hidden md:inline-block uppercase tracking-tight leading-none md:leading-none xl:leading-none text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl ml-auto px-3 md:px-4 2xl:px-6 pt-[3px] md:pt-[5px] pb-[2px] md:pb-[2px] rounded-full border-yellow border  focus-visible:text-yellow focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow mb-8 overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500 relative">
                          <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
                          <span className="block overflow-hidden relative z-[10]">
                            <span>Talent</span>
                          </span>
                        </a>

                        <p className="md:px-8 lg:px-0 leading-[1.2] text-base lg:text-lg lg:leading-[1.2] xl:text-lg xl:leading-[1.2] 2xl:text-xl 2xl:leading-[1.2] mb-6 md:mb-0">{home.getStartedTalentText}</p>

                        <a href={`mailto:${contact.talentEmailAddress}`} className="inline-block md:hidden uppercase tracking-tight leading-none md:leading-none xl:leading-none text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl ml-auto px-3 md:px-4 2xl:px-6 pt-[3px] md:pt-[5px] pb-[2px] md:pb-[2px] rounded-full border-yellow border  focus-visible:text-yellow focus-visible:outline-none ring-offset-4 ring-offset-off-black focus-visible:ring-[2px] ring-yellow mb-8 overflow-hidden group hover:text-off-black transition-colors ease-in-out duration-500 relative">
                          <span className="absolute bottom-0 left-0 right-0 bg-yellow z-[0] h-0 group-hover:h-full transition-all ease-in-out duration-[400ms]"></span>
                          <span className="block overflow-hidden relative z-[10]">
                            <span>Talent</span>
                          </span>
                        </a>
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