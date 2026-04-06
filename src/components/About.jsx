import Resume from '../assets/Ishan_Taunk_Resume.pdf';
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
        As a Frontend Web Developer I specialise in building responsive,
        user-centric websites and web applications. I bring expertise in
        HTML, CSS, JavaScript, React and Angular to craft seamless digital
        experiences.
      </p>

      <div className="mt-8 flex justify-start max-sm:justify-center">
        <a href={Resume} download="Ishan_Taunk_Resume.pdf">
          <button className="min-h-[50px] rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition hover:scale-[1.02] hover:shadow-xl sm:px-8">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;