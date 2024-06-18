import { IMember } from "../interfaces";
import MemberCard from "./MemberCard";

const MembersContainer = () => {
  const members: IMember[] = [
    {
      nim: "2602101716",
      name: "Andrew Garcia",
      role: "web developer",
      image: "/andrew.jpg",
    },
    {
      nim: "2602165650",
      name: "Farih Muhammad",
      role: "app developer",
      image: "/farih.jpg",
    },
    {
      nim: "2602067640",
      name: "James Richard Renaldo",
      role: "UI designer",
      image: "/james.jpg",
    },
    {
      nim: "2602091892",
      name: "Jenson Christopher Halim",
      role: "video editor",
      image: "/jenson.jpg",
    },
    {
      nim: "2501974605",
      name: "Wiernadi Carney Prasetyo",
      role: "video director",
      image: "/kenny.jpg",
    },
  ];
  return (
    <div
      id="team"
      className="-z-10 -mt-20 relative w-screen h-screen flex justify-center items-center"
    >
      <div className="absolute opacity-40 bg-black w-screen h-screen"></div>
      <div className="w-full p-8 flex flex-col gap-8 z-20">
        <p className="text-white text-6xl font-semibold">
          Introducing the <span className="text-orange">team</span>
        </p>
        <div className="w-full flex gap-2 overflow-auto">
          {members.map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersContainer;
