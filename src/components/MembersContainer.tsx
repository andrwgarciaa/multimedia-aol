import { IMember } from "../interfaces";
import MemberCard from "./MemberCard";

const MembersContainer = () => {
  const members: IMember[] = [
    {
      nim: "000000",
      name: "John Doe",
      role: "CEO",
      major: "Computer Science",
      email: "example@gmail.com",
    },
    {
      nim: "000000",
      name: "John Doe",
      role: "CEO",
      major: "Computer Science",
      email: "example@gmail.com",
    },
    {
      nim: "000000",
      name: "John Doe",
      role: "CEO",
      major: "Computer Science",
      email: "example@gmail.com",
    },
    {
      nim: "000000",
      name: "John Doe",
      role: "CEO",
      major: "Computer Science",
      email: "example@gmail.com",
    },
    {
      nim: "000000",
      name: "John Doe",
      role: "CEO",
      major: "Computer Science",
      email: "example@gmail.com",
    },
  ];
  return (
    <div className="relative w-screen h-screen">
      <div className="w-full h-full absolute opacity-40 z-10 bg-black"></div>
      <img
        className="w-full h-full bg-black"
        src="/members-bg.png"
        alt="background"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 flex-col gap-8 z-20">
        <p className="text-white text-4xl font-semibold">
          Introducing our members
        </p>
        <div className="w-full flex gap-8 overflow-auto">
          {members.map((member) => (
            <MemberCard member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersContainer;
