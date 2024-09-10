import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative mb-[100px]">
      <div className="w-[1270px] h-[420px] absolute inset-x-[91px] inset-y-[5560px]"></div>
      <div className="w-[1263px] absolute inset-x-[91px] inset-y-[5563px] border border-black"></div>
      <h1 className="w-[350px] absolute h-[65px] inset-x-[91px] inset-y-[5620px] font-black text-[64px] leading-[64px]">
        LET’S TALK
      </h1>
        <Image src="/image/w.png" alt="w" width={140} height={60} className="absolute inset-x-[1160px] inset-y-[5585px]"/>
      <div className="w-[1263px] absolute inset-x-[91px] inset-y-[5723px] border border-black"></div>
      <div>
        <h2 className="w-[82px] absolute h-[25px] inset-x-[91px] inset-y-[5765px] font-medium text-[25px] leading-[25px]">
          WEBUS
        </h2>
        <div className="w-[252px] absolute h-[90px] inset-x-[91px] inset-y-[5800px] ">
          <h3 className="font-bold text-[16px] leading-[30px]">Delhi, INDIA</h3>
          <span className=" font-normal text-[16px] leading-[30px]">
            A-10 Vishwakarma colony New Delhi - 110044
          </span>
        </div>

        <div className="w-[252px] absolute h-[90px] inset-x-[385px] inset-y-[5800px] ">
          <h3 className="font-bold text-[16px] leading-[30px]">
            Tennessee, US
          </h3>
          <span className=" font-normal text-[16px] leading-[30px]">
            1000 Battlefield drive Nashville TN 37204
          </span>
        </div>

        <div>
          <div>
            <p className="w-[51px] h-[30px] absolute inset-x-[1026px] inset-y-[5806px] font-normal text-[18px] leading-[30px]">
              ABOUT
            </p>
            <p className="w-[46px] h-[30px] absolute inset-x-[1108px] inset-y-[5806px] font-normal text-[18px] leading-[30px]">
              WORK
            </p>
            <p className="w-[71px] h-[30px] absolute inset-x-[1185px] inset-y-[5806px] font-normal text-[18px] leading-[30px]">
              EXPERTISE
            </p>
            <p className="w-[71px] h-[30px] absolute inset-x-[1283px] inset-y-[5806px] font-normal text-[18px] leading-[30px]">
              CONTACT
            </p>
          </div>
          <div>
          <p className="w-[65px] h-[30px] absolute inset-x-[1160px] inset-y-[5855px] font-normal text-[18px] leading-[30px] text-[#0085FF]">
          LINKEDIN
            </p>
            <p className="w-[85px] h-[30px] absolute inset-x-[1266px] inset-y-[5855px] font-normal text-[18px] leading-[30px] text-[#EE202E] ">
            INSTAGRAM
            </p>
          </div>
        </div>
        
        <div>
            <p className="w-[115px] h-[30px] absolute inset-x-[600px] inset-y-[5952px] font-normal text-[14px] leading-[30px]">PRIVACY POLICY</p>
            <p className="w-[110px] h-[30px] absolute inset-x-[746px] inset-y-[5952px] font-normal text-[14px] leading-[30px]">COOKIE POLICY</p>
        </div>
      </div>
    </div>
  );
}
