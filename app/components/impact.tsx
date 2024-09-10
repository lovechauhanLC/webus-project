import Image from "next/image";

export default function Impact() {
  return (
    <div>
      <div className="w-[1460px] h-[802px] absolute -inset-x-[2px] inset-y-[4080px] bg-[#f9f9f9] ">
      </div>
      <div className="w-[553px] h-[191px] absolute inset-x-[93px] inset-y-[4200px]">
          <h1 className="font-light text-[64px] leading-[64px] ">
            From Vision to Impact:
          </h1>
          <span className="font-light text-[64px] leading-[64px] text-[#b3b3b3] ">
            The Webus Journey
          </span>
        </div>
      <Image
          src="/image/Maskgroup.png"
          alt="random"
          width={656}
          height={521}
          className="absolute inset-x-[852px] inset-y-[4080px]"
        />
        <div className="w-[270px] h-[140px] absolute inset-x-[93px] inset-y-[4460px]">
            <h1 className="w-[112px] h-[64px] font-black text-[64px] leading-[64px] text-[#ee202e] ">66+</h1>
            <h3 className="w-[270px] h-[25px] font-bold text-[16px] leading-[25px]">Innovative Projects</h3>
            <p className="w-[178px] h-[50px] font-normal text-[16px] leading-[25px]">Transforming ideas into digital realities</p>
        </div>

        <div className="w-[270px] h-[140px] absolute inset-x-[410px] inset-y-[4460px]">
            <h1 className="w-[100px] h-[64px] font-black text-[64px] leading-[64px]  ">10+</h1>
            <h3 className="w-[270px] h-[25px] font-bold text-[16px] leading-[25px]">Global Brands Served</h3>
            <p className="w-[178px] h-[50px] font-normal text-[16px] leading-[25px]">Delivering excellence to industry leaders worldwide</p>
        </div>

        <div className="w-[270px] h-[140px] absolute inset-x-[93px] inset-y-[4650px]">
            <h1 className="w-[112px] h-[64px] font-black text-[64px] leading-[64px]">12+</h1>
            <h3 className="w-[270px] h-[25px] font-bold text-[16px] leading-[25px]">Years of Design Excellence</h3>
            <p className="w-[178px] h-[50px]font-normal text-[16px] leading-[25px]">Pioneering creative solutions since 2012</p>
        </div>

        <div className="w-[270px] h-[140px] absolute inset-x-[410px] inset-y-[4650px]">
            <h1 className="w-[112px] h-[64px] font-black text-[64px] leading-[64px] text-[#ee202e] ">15</h1>
            <h3 className="w-[270px] h-[25px] font-bold text-[16px] leading-[25px]">Industries Transformed</h3>
            <p className="w-[178px] h-[50px]font-normal text-[16px] leading-[25px]">Applying our expertise to diverse global sectors</p>
        </div>

        <div className="w-[270px] h-[140px] absolute inset-x-[727px] inset-y-[4650px]">
            <h1 className="w-[112px] h-[64px] font-black text-[64px] leading-[64px]">85%</h1>
            <h3 className="w-[270px] h-[25px] font-bold text-[16px] leading-[25px]">Client Retention Rate</h3>
            <p className="w-[206px] h-[50px]font-normal text-[16px] leading-[25px]">Building lasting partnerships through exceptional work</p>
        </div>

        <div className="w-[300px] h-[140px] absolute inset-x-[1044px] inset-y-[4650px]">
            <h1 className="w-[112px] h-[64px] font-black text-[64px] leading-[64px]  ">30%</h1>
            <h3 className="w-[300px] h-[25px] font-bold text-[16px] leading-[25px]">Average Increase in User Engagement</h3>
            <p className="w-[270px] h-[50px]font-normal text-[16px] leading-[25px]">Driving measurable results through intuitive design</p>
        </div>
    </div>
  );
}
