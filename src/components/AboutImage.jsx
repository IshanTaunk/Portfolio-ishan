import profile from '../assets/profile.jpg';

const AboutImage = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px]">
        <img
          src={profile}
          alt="Ishan Taunk profile"
          className="w-full rounded-xl border-[10px] border-white shadow-xl sm:border-[12px] md:border-[14px]"
        />
      </div>
    </div>
  );
};

export default AboutImage;