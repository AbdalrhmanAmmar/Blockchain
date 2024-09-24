import Circle from "../components/UI/Circle";
import CutCornerButton from "../components/UI/CutCornerButton";
import { Hexagon } from "../components/UI/Hexagon";

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
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]">
                <img
                  src="/assets/images/cube.png"
                  alt="Cube 3D image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[-270px]">
                <img
                  src="/assets/images/cuboid.png"
                  alt="Cube 3D image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <img
                  src="/assets/images/torus.png"
                  alt="Cube 3D image"
                  className="size-[140px]"
                />
              </Circle>
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

        <div className="flex items-center flex-col space-y-4 justify-center mt-40 md:mt-80">
          <div className="w-5 h-10 rounded-full bg-transparent outline outline-[6px] outline-fuchsia-500/10 relative">
            <div className="w-1 h-3 bg-fuchsia-500 rounded-full absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <p className="text-center uppercase font-extrabold text-zinc-500 tracking-wider ">
            scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
