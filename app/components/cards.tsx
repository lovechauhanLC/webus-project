import Image from "next/image";

export default function Cards() {
  return (
    <>
      <div className="min-w-[1262px] min-h-[226px] absolute inset-x-[90px] inset-y-[900px] gap-[22px] flex ">
        {/* <link href="#" > */}
        <a href="#">
          <div className="bg-[#f9f9f9] h-[226px] min-w-[250px] cursor-pointer ease-in-out hover:-translate-y-[5px] hover:bg-black hover:text-white duration-300 p-5 ">
            <div className="min-w-[208px] min-h-[196px] p-[10px] gap-[60px] flex flex-col ">
              <div className="w-[188px] min-h-[26px] gap-[21px] ">
                <h2 className=" text-[25px] leading-6 font-normal">Contact</h2>
                {/* <Image src={Arrow} height={18} width={20} alt="arrow" /> */}
              </div>
              <div className="w-[188px] h-[90px] gap-[10px] ">
                <div className="min-w-[184px] min-h-[40px] gap-[10px] ">
                  <p className=" text-[40px] font-extralight leading-[40px] ">
                    Hit us up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* </link> */}

        <a href="1">
          <div className="bg-[#f9f9f9] h-[226px] min-w-[250px] cursor-pointer ease-in-out hover:-translate-y-[5px] hover:bg-red-500 hover:text-white duration-300 p-5  ">
            <div className="min-w-[208px] min-h-[196px] p-[10px] gap-[60px] flex flex-col">
              <div className="w-[188px] min-h-[26px] gap-[21px] ">
                <h2 className=" text-[25px] leading-6 font-normal">Career</h2>
                {/* <Image src={Arrow} height={18} width={20} alt="arrow" /> */}
              </div>
              <div className="w-[188px] h-[90px] gap-[10px] ">
                <div className="min-w-[184px] min-h-[80px] gap-[10px] ">
                  <p className=" text-[40px] font-extralight leading-[40px]">
                    Work with us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="2">
          <div className="bg-[#f9f9f9] h-[226px] w-[450px] cursor-pointer ease-in-out hover:-translate-y-[5px] duration-300 p-5 bg-[url('/image/cardbg.png')] bg-blend-luminosity hover:bg-blend-normal ">
            <div className="w-[441px] min-h-[196px] p-[10px] gap-[60px] flex flex-col ">
              <div className="w-[388px] min-h-[26px] gap-[21px] ">
                <h2 className=" text-[25px] leading-6 font-normal w-[340px] -my-[2px] -mx-[1px]">Projects</h2>
                {/* <Image src={Arrow} height={18} width={20} alt="arrow" /> */}
              </div>
              <div className="w-[388px] h-[90px] gap-[10px] ">
                <div className="min-w-[184px] min-h-[80px] gap-[10px] ">
                  <p className=" text-[40px] font-extralight leading-[40px] ">
                  Our Work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="4">
        <div className="bg-[#f9f9f9] h-[226px] min-w-[250px] cursor-pointer ease-in-out hover:-translate-y-[5px] hover:bg-black hover:text-white duration-300 p-5  ">
            <div className="min-w-[208px] min-h-[196px] p-[10px] gap-[60px] flex flex-col">
              <div className="w-[188px] min-h-[26px] gap-[21px] ">
                <h2 className=" text-[25px] leading-6 font-normal">Insights</h2>
                {/* <Image src={Arrow} height={18} width={20} alt="arrow" /> */}
              </div>
              <div className="w-[188px] h-[90px] gap-[10px] ">
                <div className="min-w-[184px] min-h-[80px] gap-[10px] ">
                  <p className=" text-[40px] font-extralight leading-[40px]">
                  News & Blogs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
