import CloudstrikeLogo from "./CloudstrikeLogo";
import InstagramIcon from "./InstagramIcon";
import MailIcon from "./MailIcon";
import MapIcon from "./MapIcon";
import PhoneIcon from "./PhoneIcon";
import TwitterIcon from "./TwitterIcon";
import YoutubeIcon from "./YoutubeIcon";

const Footer = () => {
  return (
    <footer
      id="about"
      className="static bottom-0 z-10 w-screen h-max p-4 bg-[#101010] flex flex-col justify-center items-center text-cream"
    >
      <div className="w-full p-4 flex justify-between items-center">
        <div className="flex-1">
          <CloudstrikeLogo />{" "}
        </div>
        <p className="flex-1 text-5xl text-center font-bold">Cloudstrike</p>
        <div className="flex-1 flex gap-4 justify-end">
          <InstagramIcon />
          <YoutubeIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="w-full p-4">
        <hr className="w-full " />
      </div>
      <div className="w-full flex justify-between items-center p-4">
        <div className="w-3/5">
          <p className="text-2xl font-semibold">About Cloudstrike</p>
          <p>
            Cloudstrike, a revolutionary cloud training app designed for IT
            professionals, offers comprehensive, interactive courses, real-time
            progress tracking, and hands-on labs, empowering users to master
            cloud technologies, enhance their skills, and achieve
            industry-recognized certifications, while providing a community
            platform for networking, collaboration, and continuous learning in
            an ever-evolving digital landscape.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <PhoneIcon />
          <MailIcon />
          <MapIcon />
          <p className="underline hover:cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
