import OpenToWork from './OpenToWork';

const About = () => {
  return (
    <section className="w-full">
      <div className="mb-4">
        <OpenToWork />
      </div>

      <h1 className="m-0 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
        Hi, I am Ishan Taunk
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-7 text-white/80 sm:text-lg md:text-xl md:leading-8">
        As a Web Developer, I engineer scalable web applications end-to-end turning complex requirements into high-performance, AI-driven solutions that deliver real business impact.
      </p>
    </section>
  );
};

export default About;