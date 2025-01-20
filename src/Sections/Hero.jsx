import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative min-h-screen text-left pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
          </div>
          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Amazingly simple
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10 ">
            We deigned XORA AI Video Editor to be an easy to use quick to learn
            and surprisingly powerful.
          </p>
          <LinkScroll to="features" offset={-100} spy smooth>
            <Button icon="/images/zap.svg">Try It Now!</Button>
          </LinkScroll>
        </div>
        <div>
          <div
            className="absolute -z-1 -top-32 left-[calc(50%-340px)] w-full pointer-events-none
           max-lg:top-28 max-lg:left-[calc(50%-100px)] hero-img-res"
          >
            <img
              src="/images/hero.png"
              className="size-full max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
