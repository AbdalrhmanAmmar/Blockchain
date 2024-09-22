import CutCornerButton from "../components/UI/CutCornerButton";

function HeroSection() {
  return (
    <section className="py-24 overflow-x-clip md:py-52 ">
      <div className="container">
        <p className="text-center uppercase font-extrabold text-zinc-500 tracking-wider">
          Introducing BlockForge
        </p>
        <h1 className="font-heading font-black text-5xl  text-center mt-4 md:text-6xl max-w-3xl mx-auto lg:text-7xl ">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-zinc-400  my-6 text-xl md:text-2xl max-w-xl mx-auto">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="flex justify-center mt-10 ">
          <CutCornerButton />
        </div>
        <div className="flex justify-center  mt-24">
          <div className="inline-flex  relative z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                width="82"
                height="72"
                viewBox="0 0 82 72"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                xmlns="http://www.w3.org/2000/svg"
                className="size-[1100px] text-fuchsia-500/10"
              >
                <path
                  d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"
                  vector-effect="non-scaling-stroke"
                />
              </svg>
            </div>
            <img
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[225deg] "
              src="/assets/images/icosahedron.png"
              alt="Icosahedron 3D Image"
            />
            <img
              src="/assets/images/icosahedron.png"
              alt="Icosahedron 3D Image"
              className="w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
