import profile from '../assets/profile.jpg';

const AboutImage = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px]">
        <img
          src={profile}
          alt="Ishan Taunk profile"
          className="w-full shadow-xl animate-slideUp  duration-2000 transition ease-in-out delay-350 grayscale hover:grayscale-0"
        />
      </div>
    </div>
  );
};

export default AboutImage;