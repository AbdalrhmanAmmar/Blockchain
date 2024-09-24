import { CardData } from "../../data/CardData";
import CardDataComponent from "../components/UI/CardData";

function FeatureCard() {
  return (
    <section className="py-24 md:-mt-28 overflow-x-clip">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl   text-center font-heading font-black  ">
          Discover the future of blockchain with Blockforge.
        </h2>

        <div className="mt-36 lg:mt-48 flex ">
          {/* <div className="relative z-0 p-8 max-w-xl group  ">
            <div className="size-16 rounded-xl bg-fuchsia-500 right-1.5 top-1.5 absolute -z-10 blur-2xl opacity-0 group-hover:opacity-100"></div>
            <div className="size-16 rounded-xl bg-fuchsia-500 right-1.5 top-1.5 absolute -z-10 group-hover:bg-fuchsia-400"></div>
            <div className="inset-0 absolute bg-zinc-800 -z-10 rounded-2xl mask-card space-y-8 "></div>
            <div className="flex justify-center -mt-28">
              <div className="inline-flex relative">
                <div className="absolute h-4 w-full bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 top-[calc(100%+16px)] rounded-[100%] CardImgMask"></div>
                <img
                  className="size-40 group-hover:-translate-y-6  transition duration-300 "
                  src="assets/images/pill.png"
                  alt=""
                />
              </div>
            </div>

            <h3 className="text-3xl font-heading font-black mt-12">
              Revolutionary Blockchain API
            </h3>
            <p className="text-lg text-zinc-400 mt-4">
              Effortlessly integrate and manage blockchain data with our
              cutting-edge API, designed for seamless connectivity
            </p>

            <div className="flex justify-between mt-12">
              <button className="text-sm uppercase text-fuchsia-500 font-heading font-extrabold tracking-wider">
                Learn more
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div> */}
          <div className="flex flex-none  gap-8 ">
            {CardData.map((card, index) => (
              <CardDataComponent key={index} card={card} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex  rounded-full gap-4 p-2.5">
            {[...new Array(4)].fill(0).map((_, i) => (
              <div
                key={i}
                className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureCard;
