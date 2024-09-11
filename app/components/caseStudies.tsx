import Image from "next/image";

export default function CaseStudies() {
  return (
    <div>
      <div>
        <Image
          src="/image/rectangle17.png"
          alt="Uspeek"
          width={619}
          height={457}
          className="absolute inset-x-[91px] inset-y-[2498px]"
        />
        <h2 className="w-[85px] h-[25px] absolute inset-x-[91px] inset-y-[3006px] font-medium text-[25px] leading-[25px]">
          Uspeek
        </h2>
        <p className="w-[451px] h-[50px] absolute inset-x-[93px] inset-y-[3049px] font-normal text-[16px] leading-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <a href="">
          <div className="min-w-[103px] min-h-[50px] absolute inset-x-[84px] inset-y-[3108px] p-[10px] ">
            <p className="w-[83px] h-30px font-normal text-[16px] leading-[30px] text-red-600 ">
              Know More
            </p>
            <div className="w-[32px] border-b border-[1px] border-[#EE202E] hover:w-[83px] ease-in-out duration-100"></div>
          </div>
        </a>
      </div>

      <div>
        <Image
          src="/image/rectangle18.png"
          alt="WASL"
          width={619}
          height={626}
          className=" absolute inset-x-[730px] inset-y-[2498px]"
        />

        <h2 className="w-[65px] h-[25px] absolute inset-x-[730px] inset-y-[3165px] font-medium text-[25px] leading-[25px]">
          WASL
        </h2>
        <p className="w-[451px] h-[50px] absolute inset-x-[732px] inset-y-[3208px] font-normal text-[16px] leading-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <a href="">
          <div className="min-w-[103px] min-h-[50px] absolute inset-x-[1246px] inset-y-[3148px] p-[10px] ">
            <p className="w-[83px] h-30px font-normal text-[16px] leading-[30px] text-red-600 ">
              Know More
            </p>
            <div className="w-[32px] border-[1px] border-[#EE202E] "></div>
          </div>
        </a>
      </div>

      <div>
        <Image
          src="/image/rectangle19.png"
          alt="Dragatron"
          width={930}
          height={529}
          className="absolute inset-x-[419px] inset-y-[3307px]"
        />

        <h2 className="w-[114px] h-[25px] absolute inset-x-[91px] inset-y-[3653px] font-medium text-[25px] leading-[25px]">
          Dragatron
        </h2>
        <p className="w-[242px] h-[75px] absolute inset-x-[93px] inset-y-[3696px] font-normal text-[16px] leading-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <a href="">
          <div className="min-w-[103px] min-h-[50px] absolute inset-x-[84px] inset-y-[3786px] p-[10px] ">
            <p className="w-[83px] h-30px font-normal text-[16px] leading-[30px] text-red-600 ">
              Know More
            </p>
            <div className="w-[32px] border-[1px] border-[#EE202E] "></div>
          </div>
        </a>
      </div>
      <a href="">
          <div className="min-w-[200px] h-[47px] absolute inset-x-[1138px] inset-y-[3880px] pt-2.5 pr-3 pb-2.5 pl-3 gap-2.5 border border-black  ">
            <div className="min-w-[176px] min-h-[27px] gap-2.5 flex">
              <p className="min-w-[147px] min-h-[27px] font-medium text-[16px] leading-[27px]  ">
                view all case studies
              </p>
              <Image
                src="/image/Vector.png"
                alt="vector"
                width={12}
                height={14}
                className="-rotate-45 border-2"
              />
            </div>
          </div>
        </a>
    </div>
  );
}
