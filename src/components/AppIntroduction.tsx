const AppIntroduction = () => {
  return (
    <div
      id="product"
      className="w-screen h-5/6 flex justify-center items-center"
    >
      <div className="flex flex-col gap-4 w-3/5">
        <h1 className="text-6xl font-bold">Cloudstrike</h1>
        <p className="text-2xl font-semibold">
          Dive into <span className="text-orange">Cloudstrike's</span> exciting
          courses and master cloud technology hands-on. Level up your IT skills
          and unlock endless possibilities!
        </p>
        <div className="flex items-center gap-4">
          <img
            className="w-32 h-14 hover:cursor-pointer"
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
            alt="Download on the App Store"
          />
          <img
            className="w-36 h-16 hover:cursor-pointer"
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AppIntroduction;
