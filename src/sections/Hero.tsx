import CutCornerButton from "../components/UI/CutCornerButton";

function HeroSection() {
  return (
    <section className="py-24 overflow-x-clip md:py-52">
      <div className="container">
        <p className="text-center uppercase font-extrabold text-zinc-500 tracking-wider">
          Introducing BlockForge
        </p>
        <h1 className="font-heading font-black text-5xl  text-center mt-4 md:text-6xl ">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-zinc-400  my-6 text-xl md:text-2xl max-w-xl mx-auto">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="flex justify-center mt-10 ">
          <CutCornerButton />
        </div>

        <div className="inline-flex mt-24 relative z-0">
          <img
            className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[225deg] "
            src="/assets/images/icosahedron.png"
            alt="Icosahedron 3D Image"
          />
          <img
            src="/assets/images/icosahedron.png"
            alt="Icosahedron 3D Image"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
