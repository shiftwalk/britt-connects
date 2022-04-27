import Container from '@/components/container'

export default function Footer() {
  return (
    <footer className="p-3 md:p-4 xl:p-6">
      <div className="bg-yellow w-full rounded-full text-off-black py-3 px-6 text-sm md:text-base xl:text-lg">
        <div className="flex flex-wrap">
          <div className="flex space-x-1 mb-1 md:mb-0 justify-center md:justify-start w-full md:w-auto">
            <span className="block">&copy; Copyright { new Date().getFullYear()}, BrittConnects</span>
          </div>

          <div className="w-full md:w-auto flex space-x-2 lg:space-x-3 mb-1 md:mb-0 mx-auto items-center justify-center md:justify-start">
            <span className="block"><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a></span>

            <span className="block w-[7px] h-[7px] rounded-full border border-off-black"></span>

            <span className="block"><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a></span>

            <span className="block w-[7px] h-[7px] rounded-full border border-off-black"></span>

            <span className="block"><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Email</a></span>

            <span className="block md:hidden w-[7px] h-[7px] rounded-full border border-off-black"></span>

            <span className="block md:hidden"><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Terms</a></span>
          </div>

          <div className="space-x-3 mb-1 md:mb-0 mx-auto items-center hidden md:flex">
            <span className="block"><a href="https://example.com" target="_blank" rel="noopener noreferrer" className="underline">Terms</a></span>
          </div>

          <div className="md:ml-auto w-full md:w-auto flex space-x-1 justify-center md:justify-start">
            <span className="block">Site by <a href="https://shiftwalk.studio" target="_blank" rel="noopener noreferrer" className="underline">ShiftWalk</a></span>
          </div>
        </div>
      </div>
    </footer>
  )
}