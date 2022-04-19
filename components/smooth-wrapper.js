import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

export default function SmoothWrapper({ children }) {
  const containerRef = useRef(null)

  return(
    <LocomotiveScrollProvider
      options={{ smooth: true, lerp: 0.1 }}
      containerRef={containerRef}
      watch={[]}
    >
      <div data-scroll-container ref={containerRef} id="scroll-container">
        <div data-scroll-section>
          {children}
        </div>
      </div>
    </LocomotiveScrollProvider>
  )
}