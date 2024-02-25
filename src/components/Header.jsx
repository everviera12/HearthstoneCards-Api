import "../css/Header.css";

const Header = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 md:pr-8">
        <div id="information" className="text-center md:text-left p-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We’re focused on making you
            <span className="text-red-custom"> shine</span>
          </h1>
          <p className="text-lg mb-6">
            We hold the belief that time is the most invaluable resource
          </p>
          <a
            href="https://github.com/everviera12"
            className=" bg-red-custom hover:bg-red-500 text-white font-bold py-2 px-4 rounded-3xl	w-96"
          >
            Github account
          </a>
        </div>
      </div>

      <div className="md:w-1/2">
        <img
          id="img-banner"
          src="https://s3-alpha-sig.figma.com/img/5d9e/477b/7237d7f6a65f179e0cd5870140d3e26b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QNuNqdxEgIm2yvV0QMioEzQYA1E~5RLi3nbvlpL~qdPGBOYhbFg0LeZkG3JGi-xyDfgPBSLLnKN6o51AU90Fvih7kL3i0SrTyNU0HaxGFJBzPH~lvJJM3yIA4Ot7wYBWRCP0EKcB77gYAPy6J9MV9Jd94jyhZRsZGNvDban8pHVteh2-dlsdhRBf6Lu1EOoqw~zo3pkrhWg1ZoVzgfdDAd1Cc92p751TjdWKVWIQYDRjqqaiZRNfPc4pS6Hb5SlnGWMc2BIvDS6WXW8H1WoujskTduFZLynSD8hceYWLwY57lD7~LjLaBGKJQQYSUMFTm1TzHIaNg1dwIo3YamQynQ__"
          alt="pexels-lukas"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Header;
