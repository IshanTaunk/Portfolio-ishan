const Contacts = () => {
  return (
    <div className="space-y-4 text-sm sm:text-base">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className="font-semibold text-white">Phone:</span>
        <span className="text-white/80">+91-9080975271</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className="font-semibold text-white">Email:</span>
        <span className="text-white/80">ishan.taunk444@gmail.com</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className="font-semibold text-white">Github:</span>
        <a
          href="https://github.com/IshanTaunk"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 break-all hover:underline"
        >
          github.com/IshanTaunk
        </a>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className="font-semibold text-white">LinkedIn:</span>
        <a
          href="https://www.linkedin.com/in/ishan-taunk-726b0119b/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 break-all hover:underline"
        >
          linkedin.com/in/ishan-taunk
        </a>
      </div>
    </div>
  );
};

export default Contacts;