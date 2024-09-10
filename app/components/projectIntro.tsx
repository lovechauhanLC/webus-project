import Image from 'next/image';

export default function ProjectIntro () {
    return (
        <div>
            <div className="w-[597px] h-[192px] absolute inset-x-[90px] inset-y-[2085px] ">
                <h1 className="font-light text-[64px] leading-[64px] ">Shaping Digital Futures, 
                </h1>
                <span className="font-light text-[64px] leading-[64px] text-black/10 ">One Design at a Time</span>
            </div>
            <div className="w-[512px] h-[300px] absolute inset-x-[837px] inset-y-[2036px]">
            <Image src="/image/sixisix.png" width={512} height={300} alt="Sixsix Image" />
            </div>
            <h2 className='w-[224px] h-[64px] inset-x-[1112px] inset-y-[2288px] leading-[64px] text-[64px] font-light absolute'>projects</h2>
        </div>
    );
}