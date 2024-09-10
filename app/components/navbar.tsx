

export default function Navbar() {
  return (
    <div className="relative">
      <div className="w-[518px] h-32 absolute inset-x-[90px] inset-y-[208px] ">
        <h1 className="text-[64px] font-light leading-[64px] ">Designing the Future, Today...</h1>
      </div>
      <div className="w-[497px] h-32 absolute inset-x-[874px] inset-y-[336px] z-10 ">
        <h2 className="text-[64px] font-light leading-[64px] ">And Transforming Tomorrow.</h2>
      </div>
      <div className="w-[451px] h-[100px] absolute inset-x-[253px] inset-y-[545px] ">
        <p className="text-base font-light leading-[25px] ">
          At Webus, we don't just anticipate the future—we actively create it.
          Our innovative designs seamlessly blend creativity with cutting-edge
          technology, turning visionary ideas into transformative digital
          realities that captivate and inspire.
        </p>
      </div>
      <div className="w-[363px] h-[363px] absolute inset-x-[750px] inset-y-[246px] opacity-40 bg-custom-radial rounded-full -z-1"></div>
      <div className="w-[233px] h-[233px]  absolute inset-x-[906px] inset-y-[422px] border-[1px] border-white bg-custom-radial-2 rounded-full z-10 backdrop-blur-sm"></div>
    </div>
  );
}
