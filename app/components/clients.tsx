import Image from "next/image";

export default function Clients(){
    return(
        <div className="relative">
            <div className="w-[1442px] h-[610px] absolute -inset-x-[1px] inset-y-[4880px]"></div>
            <Image src="/image/clientbg.png" alt='companies' width={1442} height={610} className="absolute -inset-x-[2px] inset-y-[4880px] opacity-20"/>
            <h1 className="w-[518px] h-[64px] absolute inset-x-[460px] inset-y-[5036px] font-light text-[64px] leading-[64px] text-center">Clients we praise</h1>
            <p className="w-[212px] h-[30px] absolute inset-x-[614px] inset-y-[5120px] font-medium text-[25px] leading-[30px] text-center">Proudly winners of</p>
            <div className="absolute inset-x-[90px] inset-y-[5220px] ">
                <Image src="/image/Group86301.png" alt='companies' width={1263} height={136}/>
            </div>
        </div>
    );
}