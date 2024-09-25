import CutCornerButton from "../components/UI/CutCornerButton";
import FeatureGridCircle from "../components/UI/FeatureGridCircle";

function FeatureGrid() {
  return (
    <section className="py-24 md:py-30 overflow-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg lg:gap-80">
          <div className="md:grid grid-cols-3 gap-8 lg:gap-9">
            <div className="col-span-2 flex flex-col gap-8  ">
              <h2 className="text-4xl md:text-5xl lg:text-6xl   text-start font-heading font-black">
                Empowering the future of blockchain.
              </h2>
              <p className="text-xl lg:text-2xl  text-zinc-400 ">
                Blockforge provides robuts and secure infrastructure to support
                the next generation of decentralized applications
              </p>
              <div className="flex flex-col mt-4  pl-2   gap-8 md:gap-8  lg:gap-9">
                <div className="flex gap-5 items-center">
                  <FeatureGridCircle />

                  <h3 className="text-xl font-bold   ">
                    Experience unparalleled security and scalability
                  </h3>
                </div>
                <div className="flex gap-5 items-center">
                  <FeatureGridCircle />

                  <h3 className="text-xl font-bold     md:whitespace-nowrap  ">
                    Fully benefit from scalable network effects
                  </h3>
                </div>
                <div className="flex gap-5 items-center">
                  <FeatureGridCircle />

                  <h3 className="text-xl font-bold  md:pt-1  ">
                    Unlock the potential of decentralized networks
                  </h3>
                </div>
              </div>
              <div className="flex gap-8 mt-4 ">
                <CutCornerButton />
                <button className="text-sm uppercase text-fuchsia-500 font-heading font-extrabold tracking-wider">
                  learn more
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="inline-flex relative z-10">
                <img
                  className="size-96 max-w-none"
                  src="assets/images/torus-knot.png"
                  alt=""
                />
                <img
                  className="size-96 max-w-none absolute top-3/4 -z-10 scale-x-[-1]"
                  src="assets/images/hemisphere.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="md:grid grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0">
                <img
                  className="size-96 max-w-none "
                  src="/assets/images/cone.png"
                  alt=""
                />
                <img
                  className="absolute top-3/4 -z-10"
                  src="/assets/images/hemisphere.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-6   col-span-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl   text-start font-heading font-black">
                Blockforge leads the way.
              </h2>
              <p className="text-xl lg:text-2xl  ">
                Blockforge is dedicated to supporting the evolution of Web3
                applications by delivering the necessary infrastructure and
                security for Web3
              </p>
              <p className="text-xl lg:text-2xl  text-zinc-400 ">
                Blockforge champions Web3 for everyone. As a decentralized
                blockchain scaling platform, Blockforge enables developers to
                create scalable, user-friendly dApps with low transaction costs,
                all while ensuring robust security
              </p>

              <div className="flex gap-8 mt-6  ">
                <CutCornerButton />
                <button className="text-sm uppercase text-fuchsia-500 font-heading font-extrabold tracking-wider">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;
