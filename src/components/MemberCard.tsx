import { IMember } from "../interfaces";

const MemberCard = ({ member }: { member: IMember }) => {
  return (
    <div className="flex flex-col h-auto bg-[#1D1D1F] text-white w-auto gap-y-5">
      {/* Heading */}
      <div className="bg-[#FB8700] h-5"></div>
      {/* {pic} */}
      <div className="flex justify-center">
        <div className="flex justify-center items-center w-60 h-60 rounded-full bg-[#D9D9D9] m-4">
          Pic
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col m-4 gap-y-6 text-[20px]">
        <div>
          <span className="color-[#F5F5F7]">NIM</span>
        </div>
        <div>
          <span className="color-[#F5F5F7]">{member.name}</span>
        </div>
        <div>
          <span className="color-[#F5F5F7]">Major</span>
        </div>
        <div>
          <span className="color-[#F5F5F7]">Role</span>
        </div>
        <div className="cursor-pointer">
          <span className="text-[#FB8700] underline transition duration-200 ease-in-out hover:text-white duration-200">
            Gmail
          </span>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
