import ProfileTop from "./components/ProfileTop";
import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";
import LinkListComponent from "./components/custom/LinkListComponent";
import Particles from "./components/Particles";
import Cursor from "./components/cursor";
/* import LightRays from "./components/LightRays"; */

function Page() {
  return (
    <div className="relative h-full w-full">
      <div className="root_cursorContainer">
        <Cursor />
      </div>

      <div>
        {/* <div className="w-full h-full absolute inset-0 z-[-1] opacity-[0.95] pointer-events-none">
            <LightRays
              raysOrigin="top-center"
              raysColor="#ffffff"
              raysSpeed={0.5}
              lightSpread={1}
              rayLength={1.5}
              fadeDistance={1}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.21}
              distortion={0.05}
            />
          </div> */}
        <div className="w-full h-full absolute inset-0 z-[2] opacity-[0.45] pointer-events-none">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.15}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>

      <div className="flex items-start justify-center min-h-screen w-full px-4 py-12 sm:py-8 relative z-[1]">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-3 w-2xl p-4">
          <ProfileTop />

          <div className="flex flex-col gap-3 w-full relative">
            <div className="flex flex-col gap-3.5 relative">
              <Suspense
                fallback={
                  <div className="absolute inset-0 z-[9999] flex items-center justify-center w-full h-full">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <LoaderCircle className="circle-rotate w-full h-full" />
                    </div>
                  </div>
                }
              >
                <LinkListComponent />
                <div className="w-full flex items-center justify-center mt-2">
                  <footer className="mt-6 text-center text-sm text-neutral-300">
                    <p>
                      This webiste is open source! Check it out{" "}
                      <a
                        href="https://github.com/Balint2201/website"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-target font-bold hover:text-white transition-colors"
                      >
                        here
                      </a>
                      !
                    </p>
                    <p className="mt-1 text-xs italic text-neutral-400">
                      Based on{" "}
                      <a
                        href="https://spikerko.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-target font-bold hover:text-white transition-colors"
                      >
                        @spikerko
                      </a>
                      's code.
                    </p>
                  </footer>
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
