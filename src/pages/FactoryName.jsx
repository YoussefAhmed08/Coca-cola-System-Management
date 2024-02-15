import Speed from "../assets/speed.svg";
import Production from "../assets/production.svg";
import Cycle from "../assets/cycle.svg";
import Active from "../assets/active.svg";
import Volume from "../assets/volume.svg";
import Quality from "../assets/quality.svg";
import DounutChart from "./DounutChart";
import { useNavigate } from "react-router-dom";

function FactoryName() {
  const navigate = useNavigate();

  return (
    <div className="w-[347px] h-[489px] m-5 bg-white shadow-md opacity-100 rounded-lg">
      <button
        onClick={() => navigate("/factory")}
        className="w-[350px] h-[50px] bg-[#08415C] rounded-t-lg opacity-100"
      >
        <p className="ml-8 w-[600px] h-[18px] text-left font-medium text-base leading-[18px] text-white opacity-100 font-sans">
          Factory name{" "}
          <span className="font-sans text-sm">
            (click here for more information)
          </span>
        </p>
      </button>

      <div className="w-[303px] h-[29px] opacity-100 flex justify-around mt-5">
        <div className="flex items-center">
          <img
            src={Speed}
            alt="Speed"
            className="relative w-[24px] h-[24px] bg-transparent bg-no-repeat"
          />
          <span className="relative left-[30px] w-[118px] h-[14px] text-[#2C3E50] text-left font-bold text-xs leading-[14px] opacity-100">
            Actual speed
          </span>
        </div>
        <span className="relative left-[50px] w-[90px] h-[29px] text-[#8D9192] text-left leading-[29px] font-normal text-lg opacity-100">
          5,000 <span className="text-base">L</span>/s
        </span>
      </div>
      <div className="w-[303px] h-[29px] opacity-100 flex justify-around mt-5">
        <div className="flex items-center">
          <img
            src={Production}
            alt="production"
            className="relative w-[24px] h-[24px] bg-transparent bg-no-repeat"
          />
          <span className="relative left-[30px] w-[118px] h-[14px] text-[#2C3E50] text-left font-bold text-xs leading-[14px] opacity-100">
            Actual production
          </span>
        </div>
        <span className="relative left-[50px] w-[90px] h-[29px] text-[#8D9192] text-left leading-[29px] font-normal text-lg opacity-100">
          2,000 <span className="text-xs">L</span>
        </span>
      </div>
      <div className="w-[303px] h-[29px] opacity-100 flex justify-around mt-5">
        <div className="flex items-center">
          <img
            src={Cycle}
            alt="cycle"
            className="relative w-[24px] h-[24px] bg-transparent bg-no-repeat"
          />
          <span className="relative left-[30px] w-[118px] h-[14px] text-[#2C3E50] text-left font-bold text-xs leading-[14px] opacity-100">
            Last hour cycle time
          </span>
        </div>
        <span className="relative left-[50px] w-[90px] h-[29px] text-[#8D9192] text-left leading-[29px] font-normal text-lg opacity-100">
          20 s
        </span>
      </div>
      <div className="w-[303px] h-[29px] opacity-100 flex justify-around mt-5">
        <div className="flex items-center">
          <img
            src={Active}
            alt="active"
            className="relative w-[24px] h-[24px] bg-transparent bg-no-repeat"
          />
          <span className="relative left-[30px] w-[118px] h-[14px] text-[#2C3E50] text-left font-bold text-xs leading-[14px] opacity-100">
            Ratio of active lines
          </span>
        </div>
        <span className="relative left-[50px] w-[90px] h-[29px] text-[#8D9192] text-left leading-[29px] font-normal text-lg opacity-100">
          5:2
        </span>
      </div>
      <div className="mt-10 w-[188px] h-[1px] border border-solid border-[#08415C] opacity-100"></div>
      <div className="absolute top-[306px] ml-[265px] h-[1px] w-[81px] border border-solid border-[#08415C] opacity-100"></div>
      <span className="relative ml-[200px] top-[-14px] w-[60px] h-[13px] text-[#08415C] text-center font-bold text-xs leading-[10px] opacity-100">
        Last Shift
      </span>
      <div className="relative left-[35px] w-[262px] h-[80px] opacity-100 flex gap-5">
        <span className="absolute top-[23px] left-[19px] w-[10px] h-[10px] text-black text-center opacity-100 text-serif font-bold text-sm">
          76%
        </span>
        <span className="absolute top-[23px] left-[123px] w-[10px] h-[10px] text-black text-center opacity-100 text-serif font-bold text-sm">
          76%
        </span>
        <span className="absolute top-[23px] left-[227px] w-[10px] h-[10px] text-black text-center opacity-100 text-serif font-bold text-sm">
          76%
        </span>
        <div className="w-16 h-16 flex gap-10">
          <DounutChart color="#FF9F1C" />
          <DounutChart color="#00D1DE" />
          <DounutChart color="#CA4E82" />
        </div>
      </div>
      <div className="w-[303px] h-[29px] opacity-100 flex justify-around mt-3">
        <div className="flex items-center">
          <img
            src={Volume}
            alt="volume"
            className="relative w-[24px] h-[24px] bg-transparent bg-no-repeat"
          />
          <span className="relative left-[30px] w-[118px] h-[14px] text-[#2C3E50] text-left font-bold text-xs leading-[14px] opacity-100">
            Production volume
          </span>
        </div>
        <span className="relative left-[50px] w-[90px] h-[29px] text-[#8D9192] text-left leading-[29px] font-normal text-lg opacity-100">
          500 <span className="text-xs">L</span>
        </span>
      </div>
      <div className="w-[303px] h-[29px] opacity-100 flex justify-around mt-3">
        <div className="flex items-center">
          <img
            src={Quality}
            alt="quality"
            className="relative w-[24px] h-[24px] bg-transparent bg-no-repeat"
          />
          <span className="relative left-[30px] w-[118px] h-[14px] text-[#2C3E50] text-left font-bold text-xs leading-[14px] opacity-100">
            Production quality
          </span>
        </div>
        <span className="relative left-[50px] w-[90px] h-[29px] text-[#8D9192] text-left leading-[29px] font-normal text-lg opacity-100">
          5,000
        </span>
      </div>
    </div>
  );
}

export default FactoryName;
