import CloudstrikeLogo from "./CloudstrikeLogo";

const Header = () => {
  return (
    <div className="fixed top-0 z-[1000] w-screen h-max flex justify-center gap-16 items-center bg-[#1E1E1E] text-[#86868B]">
      <a href="#product">
        <CloudstrikeLogo />
      </a>
      <ul className="flex items-center gap-36 font-semibold">
        <a href="#product" className="hover:cursor-pointer">
          Product
        </a>
        <a href="#video" className="hover:cursor-pointer">
          Video
        </a>
        <a href="#team" className="hover:cursor-pointer">
          Team
        </a>
        <a href="#about" className="hover:cursor-pointer">
          About
        </a>
      </ul>
    </div>
  );
};

export default Header;
