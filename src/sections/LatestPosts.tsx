import CutCornerButton from "../components/UI/CutCornerButton";

function LatestPosts() {
  return (
    <section className="py-60">
      <div className="container">
        <div className="">
          <h2 className="text-4xl md:text-5xl lg:text-6xl   text-center font-heading font-black">
            Your portal to everything blockchain.
          </h2>
          <p className="text-xl lg:text-2xl  text-red-400 text-center mt-8 ">
            keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly.
          </p>
          <div className="mt-16">
            <div>
              <div>Technology</div>
              <h3>Regulatory Challenges Facing Blockchain</h3>
              <p>
                Understanding the regulatory landscape surrounding blockchain
                and what it means for the future of this technology
              </p>
              <div>
                <CutCornerButton />
                <button>arrow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
