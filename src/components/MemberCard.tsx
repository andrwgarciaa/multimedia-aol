import { IMember } from "../interfaces";

const MemberCard = ({ member }: { member: IMember }) => {
  return (
    <div className="flex flex-col h-auto bg-[#1D1D1F] text-white w-1/5 gap-y-5">
      <div className="bg-[#FB8700] h-5"></div>
      <div className="flex justify-center items-center">
        <img
          src={member.image}
          alt={member.name}
          className="flex justify-center items-center w-60 h-60 rounded-full m-4 object-cover"
        />
      </div>

      <div className="z-100 flex flex-col m-4 gap-y-6 text-xl">
        <div>
          <span className="text-2xl">{member.name}</span>
          <br />
          <span className="italic text-md">{member.nim}</span>
        </div>
        <p>as the {member.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
