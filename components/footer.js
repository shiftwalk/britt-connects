import Link from "next/link"

export default function Footer({ contact }) {
  return (
    <footer className="p-3 md:p-4 xl:p-6">
      <div className="bg-yellow w-full rounded-full text-off-black pt-2 pb-1 md:pb-2 px-6 text-sm md:text-base xl:text-lg">
        <div className="flex flex-wrap">
          <div className="space-x-1 mb-1 md:mb-0 justify-center md:justify-start w-full md:w-auto hidden md:flex">
            <span className="block py-1">&copy; Copyright { new Date().getFullYear()}, BrittConnects</span>
          </div>

          <div className="w-full md:w-auto flex space-x-2 lg:space-x-3 mb-1 md:mb-0 mx-auto items-center justify-center md:justify-start">

            {contact.socials.map((e, i) => {
              return (
                <>
                  <span className="block"><a href={e.url} target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none ring-offset-4 ring-offset-yellow focus-visible:ring-[2px] ring-off-black relative overflow-hidden group leading-none block">
                    <span className="block py-1 transition-all ease-in-out duration-500 group-hover:translate-y-full">{e.title}</span>
                    <span className="block py-1 absolute inset-0 -translate-y-full transition-all ease-in-out duration-500 group-hover:translate-y-0">{e.title}</span>
                    <span className="absolute bottom-0 left-0 right-0 w-0 h-[1px] bg-off-black block group-hover:w-full transition-all ease-in-out duration-500 delay-150"></span>
                  </a></span>
                  
                  <span className="block w-[7px] h-[7px] rounded-full border border-off-black"></span>
                </>
              )
            })}

            <span className="block"><a href={`mailto:${contact.emailAddress}`} target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none ring-offset-4 ring-offset-yellow focus-visible:ring-[2px] ring-off-black relative overflow-hidden group leading-none block">
              <span className="block py-1 transition-all ease-in-out duration-500 group-hover:translate-y-full">Email</span>
              <span className="block py-1 absolute inset-0 -translate-y-full transition-all ease-in-out duration-500 group-hover:translate-y-0">Email</span>
              <span className="absolute bottom-0 left-0 right-0 w-0 h-[1px] bg-off-black block group-hover:w-full transition-all ease-in-out duration-500 delay-150"></span>
            </a></span>

            <span className="block md:hidden w-[7px] h-[7px] rounded-full border border-off-black"></span>

            <span className="block md:hidden"><Link href="/terms"><a className="focus-visible:outline-none ring-offset-4 ring-offset-yellow focus-visible:ring-[2px] ring-off-black">Terms</a></Link></span>
          </div>

          <div className="space-x-3 mb-1 md:mb-0 mx-auto items-center hidden md:flex">
            <span className="block"><Link href="/terms"><a className="focus-visible:outline-none ring-offset-4 ring-offset-yellow focus-visible:ring-[2px] ring-off-black relative overflow-hidden group leading-none block">
              <span className="block py-1 transition-all ease-in-out duration-500 group-hover:translate-y-full">Terms</span>
              <span className="block py-1 absolute inset-0 -translate-y-full transition-all ease-in-out duration-500 group-hover:translate-y-0">Terms</span>
              <span className="absolute bottom-0 left-0 right-0 w-0 h-[1px] bg-off-black block group-hover:w-full transition-all ease-in-out duration-500 delay-150"></span>
              </a>
              </Link></span>
          </div>

          <div className="md:ml-auto w-full md:w-auto space-x-1 justify-center md:justify-start hidden md:flex">
            <span className="flex items-center space-x-1 py-1">
              <span className="block">Site by</span>
              <a href="https://shiftwalk.studio" target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none ring-offset-4 ring-offset-yellow focus-visible:ring-[2px] ring-off-black relative overflow-hidden group leading-none inline-block">
              <span className="block py-1 transition-all ease-in-out duration-500 group-hover:translate-y-full">ShiftWalk</span>
              <span className="block py-1 absolute inset-0 -translate-y-full transition-all ease-in-out duration-500 group-hover:translate-y-0">ShiftWalk</span>
              <span className="absolute bottom-0 left-0 right-0 w-0 h-[1px] bg-off-black block group-hover:w-full transition-all ease-in-out duration-500 delay-150"></span></a></span>
          </div>
        </div>
      </div>
      <span className="block pt-3 text-xs text-center md:hidden">&copy; Copyright { new Date().getFullYear()}, BrittConnects</span>
      <span className="flex items-center space-x-1 py-1 text-xs text-center justify-center md:hidden">
        <span className="block">Site by</span>
        <a href="https://shiftwalk.studio" target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none ring-offset-4 ring-offset-yellow focus-visible:ring-[2px] ring-off-black relative overflow-hidden group leading-none inline-block">
        <span className="block py-1 transition-all ease-in-out duration-500 group-hover:translate-y-full">ShiftWalk</span>
        <span className="block py-1 absolute inset-0 -translate-y-full transition-all ease-in-out duration-500 group-hover:translate-y-0">ShiftWalk</span>
        <span className="absolute bottom-0 left-0 right-0 w-0 h-[1px] bg-off-black block group-hover:w-full transition-all ease-in-out duration-500 delay-150"></span></a>
      </span>
    </footer>
  )
}
