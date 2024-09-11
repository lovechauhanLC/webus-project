const Feature = ({ title }:any) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span  className="w-[20.82px] h-[21px]  top-[220px] left-[423px] gap-0 opacity-.3 mr-[10px]" >↗️</span>
      <span className="font-geomanist text-[25px] font-normal leading-[25px] text-left ">{title}</span>
    </div>
      );


export default Feature;