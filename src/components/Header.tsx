import CloudstrikeLogo from "./CloudstrikeLogo";
import SearchIcon from "./SearchIcon";

const Header = () => {
  return (
    <div className="fixed top-0 z-[100000] w-screen h-max flex justify-center gap-4 items-center bg-[#1E1E1E] text-[#515154]">
      <CloudstrikeLogo />
      <ul className="flex items-center gap-24">
        <li>Video</li>
        <li>About</li>
        <li>Team</li>
        <li>Contacts</li>
        <SearchIcon />
      </ul>
    </div>
  );
};

export default Header;
