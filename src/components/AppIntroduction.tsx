import { useRef } from "react";

const AppIntroduction = () => {
  const text = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLImageElement>(null);
  const arrow = useRef<HTMLImageElement>(null);
  const movePhone = () => {
    if (text.current) {
      text.current.style.position = "absolute";
      text.current.style.left = "35%";
      text.current.style.width = "50%";
      text.current.style.transition = "all ease 1s";
    }
    if (phone.current) {
      phone.current.style.right = "10%";
      phone.current.style.bottom = "0px";
      phone.current.style.transition = "all ease 1s";
    }
    if (arrow.current) {
      arrow.current.style.display = "none";
    }
  };

  return (
    <div id="product" className="relative w-screen h-5/6 overflow-hidden">
      <div
        ref={text}
        id="intro-text"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 w-3/5"
      >
        <h1 className="text-6xl font-bold">Cloudstrike</h1>
        <p className="text-2xl font-semibold">
          Dive into <span className="text-orange">Cloudstrike's</span> exciting
          courses and master cloud technology hands-on. Level up your IT skills
          and unlock endless possibilities!
        </p>
        <div className="flex items-center gap-4">
          <img
            className="w-32 h-14 hover:cursor-pointer"
            src="/appstore.svg"
            alt="Download on the App Store"
          />
          <img
            className="w-36 h-16 hover:cursor-pointer"
            src="/playstore.png"
            alt="Get it on Google Play"
          />
        </div>
      </div>
      <div
        ref={phone}
        className="z-10 absolute h-max w-max -right-[17vw] bottom-0 "
      >
        <img
          ref={arrow}
          src="/arrow.png"
          alt="arrow"
          className="scale-x-[-1] rotate-[220deg] absolute -left-20 top-36 animate-pulse hover:cursor-pointer"
          onClick={movePhone}
        />

        <img
          ref={phone}
          src="/app.png"
          className="h-[70vh] hover:cursor-pointer"
          onClick={movePhone}
        />
      </div>
    </div>
  );
};

export default AppIntroduction;
