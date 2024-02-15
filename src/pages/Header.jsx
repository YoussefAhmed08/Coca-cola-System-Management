import Planet from "../assets/planet.svg";
import Line from "../assets/line.svg";
import Machines from "../assets/machines.svg";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [factoryName, setFactoryName] = useState("All Factories");

  useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl.includes("/factory")) setFactoryName("Factory Name");
    if (currentUrl.includes("/line")) setFactoryName("Planet Name");
  }, []);

  return (
    <header className="absolute top-0 left-[260px] w-[1660px] h-[50px] bg-white shadow-md opacity-100 flex justify-around items-center gap-[500px]">
      <div className="flex justify-around w-[340px] h-[40px]">
        <div className="flex items-center justify-around w-[214px] h-[40px] bg-[#08415C] rounded-lg text-white opacity-100">
          <img src={Planet} alt="Planet" className="w-[24px] h-[24px]" />
          <span className="ml-2 text-base font-medium">{factoryName}</span>
          <IoIosArrowDown className="ml-2" />
        </div>
        <div>
          {factoryName === "All Factories" || factoryName === "Factory Name" ? (
            <>
              <button className="flex items-center justify-center w-[40px] h-[40px] bg-[#08415C] rounded-lg">
                <img src={Line} alt="Line" onClick={() => navigate("/line")} />
              </button>
              <img
                src={Machines}
                alt="Machines"
                className="absolute top-[13px] left-[430px] "
              />
            </>
          ) : (
            <div className="flex items-center justify-around w-[214px] h-[40px] ml-10 bg-[#08415C] rounded-lg text-white opacity-100 absolute left-[320px] top-[5px]">
              <img src={Line} alt="Line" />
              <span className="ml-2 text-base font-medium">Line Name</span>
              <IoIosArrowDown className="ml-2" />
              <img
                src={Machines}
                alt="Machines"
                className="absolute top-[10px] left-[230px] w-[24px] h-[24px]"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-around w-[440px] h-[41px]">
        <button className="bg-[#08415C] text-[#FFF] w-[87px] h-[40px] rounded-lg opacity-100">
          Today
        </button>
        <button className="text-[#B2BEC3]">Yesterday</button>
        <button className="text-[#B2BEC3]">Last Week</button>
        <MdOutlineDateRange className="absolute text-[#B2BEC3] left-[1570px] w-[24px] h-[27px] top-[10px]" />
      </div>
    </header>
  );
}

export default Header;
