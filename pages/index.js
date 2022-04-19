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
                <div className="h-screen relative p-3 md:p-4 xl:p-6 bg-opacity-10">
                  <Header />
                  <h1 className="text-[13vw] md:text-[12.4vw] font-display uppercase leading-[0.9] md:leading-[0.9] text-center relative z-10 mix-blend-lighten">Connecting Humans</h1>

                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="relative overflow-hidden w-[45vw] h-[70vh] rounded-xl rotate-[-3deg] max-w-[550px] hero-image">
                      <Image
                        src="/images/britt.jpg"
                        alt="Something"
                        layout="fill"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 p-3 md:p-4 xl:p-6 max-w-[70vw] md:max-w-[36vw] lg:w-[28vw]">
                    <p className="indent-6">We connect top-tier talent to high caliber opportunities. That means personal connections over metrics and transactions. We care deeply about our people and will only partner with clients that feel the same. High-quality talent is a critical investment, not an unnecessary expense.</p>
                  </div>

                  <div className="absolute bottom-0 right-0 p-3 md:p-4 xl:p-6 max-w-[70vw] md:max-w-[36vw] lg:w-[28vw]">
                    <ul className="leading-tight text-base text-right">
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
                </div>
              </m.div>
            </m.main>

            {/* <Footer /> */}
          </SmoothWrapper>
        </div>
      </LazyMotion>
    </Layout>
  )
}
