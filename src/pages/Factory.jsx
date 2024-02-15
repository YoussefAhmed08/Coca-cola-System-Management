import { HiOutlineArrowDown } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Header from "./Header";
import SideBar from "./SideBar";
import Product from "../assets/product.svg";
import Bottle from "../assets/bottle.svg";
import Pack from "../assets/pack.svg";
import Pallete from "../assets/pallete.svg";
import Pereformance from "../assets/pereformance.svg";
import DounutChart from "./DounutChart";
import Usage from "../assets/usage.svg";
import Energy from "../assets/energy.svg";
import Water from "../assets/water.svg";
import Activity from "../assets/active.svg";

function Factory() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="bg-[#F4F7FE] h-screen w-screen"></div>
      <p className="absolute top-[61px] left-[316px] w-[206px] h-[19px] text-left font-semibold text-base text-[#003F5C] capitalize font-sans">
        Factory Name
      </p>
      <div className="absolute top-[107px] left-[316px] w-[282px] h-[212px] bg-white shadow-md rounded-lg border border-gray-200"></div>
      <p className="absolute top-[122px] left-[371px] w-[126px] h-[18px] text-black text-left font-medium text-base leading-18 text-sans">
        Total Production
      </p>
      <img
        src={Product}
        alt="product"
        className="absolute top-[120px] left-[337px] w-[24px] h-[24px] bg-transparent bg-no-repeat"
      />
      <span className="absolute top-[155px] left-[318px] w-[277px] border border-[#EFEFEF]"></span>
      <img
        src={Bottle}
        alt="bottle"
        className="absolute top-[175px] left-[345px] w-[24px] h-[24px] bg-transparent bg-no-repeat"
      />
      <p className="absolute top-[175px] left-[380px] w-[70px] h-[14px] text-base font-bold leading-12 text-[#2C3E50]">
        Bottle
      </p>
      <p className="absolute top-[175px] left-[509px] w-[58px] h-[25px] text-xl font-medium leading-25 text-[#8D9192]">
        500K
      </p>
      <img
        src={Pack}
        alt="pack"
        className="absolute top-[220px] left-[345px] w-[24px] h-[24px] bg-transparent bg-no-repeat"
      />
      <p className="absolute top-[220px] left-[382px] w-[70px] h-[14px] text-[#2c3e50] font-bold text-base leading-12">
        Pack
      </p>
      <p className="absolute top-[220px] left-[511px] w-[58px] h-[25px] text-[#8d9192] text-xl font-medium leading-25">
        50K
      </p>
      <img
        src={Pallete}
        alt="pallete"
        className="absolute top-[265px] left-[345px] w-[24px] h-[24px] bg-transparent bg-no-repeat"
      />
      <p className="absolute top-[265px] left-[382px] w-[70px] h-[14px] text-[#2c3e50] text-left font-bold text-base leading-12">
        Pallete
      </p>
      <p className="absolute top-[265px] left-[511px] w-[58px] h-[25px] text-[#8d9192] text-left font-medium text-xl leading-25">
        10K
      </p>
      <div className="absolute top-[107px] left-[628px] w-[516px] h-[212px] bg-white shadow-md rounded-lg opacity-100"></div>
      <span className="absolute top-[155px] left-[632px] w-[502px] border border-[#EFEFEF] opacity-100"></span>
      <img
        src={Pereformance}
        alt="pereformance"
        className="absolute top-[120px] left-[647px] w-[24px] h-[24px] bg-transparent"
      />
      <p className="absolute top-[122px] left-[681px] w-[203px] h-[18px] text-black text-left font-medium text-base leading-18">
        Performance Indicator KPI
      </p>
      <div className="absolute top-[187px] left-[649px] w-[253px] h-[75px] flex gap-2">
        <DounutChart color="#FF9F1C" />
        <DounutChart color="#00D1DE" />
        <DounutChart color="#CA4E82" />
      </div>
      <span className="absolute top-[212px] left-[668px] w-[38px] h-[24px] text-black text-center opacity-100 text-serif font-bold text-base">
        76%
      </span>
      <p className="absolute top-[269px] left-[668px] w-[25px] h-[14px] text-black text-left font-medium text-base leading-14">
        OEE
      </p>
      <span className="absolute top-[212px] left-[754px] w-[10px] h-[10px] text-black text-center opacity-100 text-serif font-bold text-base">
        76%
      </span>
      <p className="absolute top-[269px] left-[755px] w-[26px] h-[16px] text-black text-left font-medium text-base leading-14">
        SLE
      </p>
      <span className="absolute top-[212px] left-[838px] w-[10px] h-[10px] text-black text-center opacity-100 text-serif font-bold text-base">
        76%
      </span>
      <p className="absolute top-[269px] left-[835px] w-[31px] h-[14px] text-black text-left font-medium text-base leading-14">
        USLE
      </p>
      <span className="absolute top-[176px] left-[915px] h-[124px] border border-[##EFEFEF]"></span>
      <span className="absolute top-[208px] left-[934px] w-[117px] h-[8px] bg-[#B2BEC39C] bg-opacity-60 rounded-md"></span>
      <span className="absolute top-[208px] left-[934px] w-[38px] h-[8px] bg-[#2C3E50] rounded-l-md"></span>
      <p className="absolute top-[218px] left-[934px] w-[65px] h-[13px] text-sm text-[#2C3E50] font-normal">
        Preformance
      </p>
      <p className="absolute top-[200px] left-[1068px] w-[55px] h-[30px] flex items-center justify-center text-base font-bold text-black">
        30%
      </p>
      <span className="absolute top-[249px] left-[934px] w-[116px] h-[8px] bg-[#B2BEC39C] bg-opacity-60 rounded-md"></span>
      <span className="absolute top-[249px] left-[934px] w-[75px] h-[8px] bg-[#2C3E50] rounded-l-md"></span>
      <p className="absolute top-[259px] left-[934px] w-[36px] h-[13px] text-sm text-[#2C3E50] font-normal">
        Quality
      </p>
      <p className="absolute top-[241px] left-[1066px] w-[57px] h-[30px] flex items-center justify-center text-base font-bold text-black">
        60%
      </p>
      <div className="absolute top-[107px] left-[1174px] w-[282px] h-[212px] bg-white shadow-md rounded-lg"></div>
      <img
        src={Usage}
        alt="usage"
        className="absolute top-[120px] left-[1192px] w-[24px] h-[24px] bg-transparent"
      />
      <p className="absolute top-[122px] left-[1226px] w-[75px] h-[18px] text-black text-left font-medium text-base">
        Usage KPI
      </p>
      <span className="absolute top-[155px] left-[1177px] w-[276px] border border-[#EFEFEF] opacity-100"></span>
      <img
        src={Energy}
        alt="energy"
        className="absolute top-[185px] left-[1193px] w-[24px] h-[24px] bg-transparent bg-no-repeat"
      />
      <p className="absolute top-[185px] left-[1228px] w-[70px] h-[14px] text-[#2c3e50] text-left font-bold text-base leading-12 opacity-100">
        Energy
      </p>
      <p className="absolute top-[185px] left-[1316px] w-[45px] h-[11px] text-[#08415c] text-left font-semibold text-xs leading-11 opacity-100">
        Per Liter
      </p>
      <p className="absolute top-[200px] left-[1316px] w-[53px] h-[22px] text-[#8D9192] text-left leading-none font-normal text-base opacity-100">
        500 <span className="text-xs">J</span>
      </p>
      <p className="absolute top-[185px] left-[1385px] w-[55px] h-[11px] text-[#08415C] text-left font-semibold text-xs leading-[11px] opacity-100">
        Per Bottle
      </p>
      <p className="absolute top-[200px] left-[1385px] w-[53px] h-[22px] text-[#8D9192] text-left leading-none font-normal text-base opacity-100">
        500 <span className="text-xs">L</span>
      </p>
      <img
        src={Water}
        alt="water"
        className="absolute top-[241px] left-[1193px] w-[24px] h-[24px] bg-transparent bg-no-repeat"
      />
      <p className="absolute top-[241px] left-[1228px] w-[70px] h-[14px] text-[#2c3e50] text-left font-bold text-base leading-12 opacity-100">
        Water
      </p>
      <p className="absolute top-[241px] left-[1316px] w-[45px] h-[11px] text-[#08415c] text-left font-semibold text-xs leading-11 opacity-100">
        Per Liter
      </p>
      <p className="absolute top-[255px] left-[1316px] w-[53px] h-[22px] text-[#8D9192] text-left leading-none font-normal text-base opacity-100">
        500 <span className="text-xs">J</span>
      </p>
      <p className="absolute top-[241px] left-[1385px] w-[55px] h-[11px] text-[#08415C] text-left font-semibold text-xs leading-[11px] opacity-100">
        Per Bottle
      </p>
      <p className="absolute top-[255px] left-[1385px] w-[53px] h-[22px] text-[#8D9192] text-left leading-none font-normal text-base opacity-100">
        500 <span className="text-xs">L</span>
      </p>
      <div className="absolute top-[353px] left-[318px] w-[1138px] h-[394px] bg-white shadow-md rounded-lg"></div>
      <HiOutlineArrowDown className="absolute top-[367px] left-[358px] w-[24px] h-[24px] opacity-100" />
      <p className="absolute top-[368px] left-[392px] w-[68px] h-[18px] text-left font-medium text-base leading-18 text-black">
        Loss Tree
      </p>
      <p className="absolute top-[460px] left-[368px] w-[15px] h-[71px] transform -rotate-90 text-black text-left font-medium text-sm leading-15px tracking-wider opacity-100">
        OFF
      </p>
      <p className="absolute top-[619px] left-[368px] w-[15px] h-[71px] transform -rotate-90 text-black text-left font-medium text-sm leading-15px tracking-wider opacity-100">
        ON
      </p>
      <span className="absolute top-[463px] left-[392px] w-[28px] h-[87px] bg-red-600 rounded-md opacity-100"></span>
      <p className="absolute top-[463px] left-[424px] w-[25px] h-[14px] transform -rotate-0 text-black font-bold text-sm leading-14 tracking-normal opacity-100">
        25%
      </p>
      <p className="absolute top-[556px] left-[424px] w-[25px] h-[14px] transform -rotate-0 text-black font-bold text-sm leading-14 tracking-normal opacity-100">
        75%
      </p>
      <span className="absolute top-[554px] left-[542px] w-[28px] h-[138px] transform -rotate-180 bg-teal-500 rounded-md opacity-10"></span>
      <span className="absolute top-[554px] left-[392px] w-[28px] h-[137px] bg-teal-500 rounded-md opacity-100"></span>
      <span className="absolute top-[600px] left-[542px] w-[28px] h-[92px] transform -rotate-180 bg-teal-500 rounded-md"></span>
      <p className="absolute top-[697px] left-[542px] w-[72px] h-[32px] text-black text-base font-semibold">
        Quality Loss
      </p>
      <p className="absolute top-[600px] left-[576px] w-[25px] h-[14px] text-black text-base font-bold">
        45%
      </p>
      <span className="absolute top-[554px] left-[660px] w-[28px] h-[138px] transform -rotate-180 bg-[#2EC4B6] rounded-md opacity-10"></span>
      <span className="absolute top-[554px] left-[660px] w-[28px] h-[52px] transform -rotate-180 bg-[#2EC4B6] rounded-md"></span>
      <p className="absolute top-[697px] left-[660px] w-[72px] h-[32px] text-black font-semibold text-base leading-normal">
        Speed Loss
      </p>
      <p className="absolute top-[554px] left-[694px] w-[25px] h-[14px] text-black font-bold text-sm leading-normal">
        25%
      </p>
      <span className="absolute top-[463px] left-[849px] w-[28px] h-[87px] transform -rotate-180 bg-red-500 bg-opacity-10 rounded-md"></span>
      <span className="absolute top-[463px] left-[849px] w-[28px] h-[31px] transform -rotate-180 bg-red-600 rounded-md"></span>
      <p className="absolute top-[416px] left-[849px] w-[72px] h-[32px] text-black text-left font-semibold text-base leading-14 tracking-normal opacity-100">
        Break-down
      </p>
      <p className="absolute top-[480px] left-[883px] w-[25px] h-[14px] text-black text-left font-bold text-base leading-14 tracking-normal opacity-100">
        5%
      </p>
      <p className="absolute top-[416px] left-[966px] w-[72px] h-[32px] text-black text-left font-semibold text-base leading-14 tracking-normal opacity-100">
        Cleansing process
      </p>
      <span className="absolute top-[463px] left-[966px] w-[28px] h-[87px] transform -rotate-180 bg-red-600 rounded-md opacity-10"></span>
      <span className="absolute top-[494px] left-[966px] w-[28px] h-[10px] transform -rotate-180 bg-red-600 rounded-md"></span>
      <p className="absolute top-[490px] left-[1000px] w-[25px] h-[14px] text-black text-left font-bold text-base">
        1%
      </p>
      <p className="absolute top-[416px] left-[1083px] w-[72px] h-[32px] text-black text-left font-semibold text-base">
        Change over time
      </p>
      <span className="absolute top-[463px] left-[1083px] w-[28px] h-[87px] transform -rotate-180 bg-red-600 rounded-md opacity-10"></span>
      <span className="absolute top-[504px] left-[1083px] w-[28px] h-[13px] transform -rotate-180 bg-red-600 rounded-md opacity-100"></span>
      <p className="absolute top-[503px] left-[1117px] w-[25px] h-[14px] text-black text-left font-bold text-base leading-14 opacity-100">
        2%
      </p>
      <p className="absolute top-[426px] left-[1199px] w-[72px] h-[18px] text-black text-left font-semibold text-base leading-14 opacity-100">
        Idle
      </p>
      <span className="absolute top-[463px] left-[1199px] w-[28px] h-[87px] transform -rotate-180 bg-red-600 rounded-md opacity-10"></span>
      <span className="absolute top-[517px] left-[1199px] w-[28px] h-[13px] transform -rotate-180 bg-red-600 rounded-md"></span>
      <p className="absolute top-[512px] left-[1233px] w-[25px] h-[14px] text-black font-bold text-base">
        2%
      </p>
      <p className="absolute top-[416px] left-[1316px] w-[72px] h-[32px] text-black font-semibold text-base">
        Minor stops
      </p>
      <span className="absolute top-[463px] left-[1316px] w-[28px] h-[87px] transform -rotate-180 bg-red-600 rounded-md opacity-10"></span>
      <span className="absolute top-[530px] left-[1316px] w-[28px] h-[20px] transform -rotate-180 bg-red-600 rounded-md"></span>
      <p className="absolute top-[530px] left-[1350px] w-[25px] h-[14px] text-black font-bold text-base">
        5%
      </p>
      <span className="absolute top-[401px] left-[343px] w-[1125px] border-t border-[#EFEFEF]"></span>
      <div className="absolute top-[780px] left-[318px] w-[1138px] h-[147px] bg-white shadow-md rounded-lg"></div>
      <img
        src={Activity}
        alt="activity"
        className="absolute top-[794px] left-[337px] w-[22px] h-[22px]"
      />
      <p className="absolute top-[794px] left-[369px] w-[70px] h-[18px] text-black text-left text-base font-medium">
        Time Line
      </p>
      <span className="absolute top-[828px] left-[322px] w-[1125px] border border-[#EFEFEF]"></span>
      <p className="absolute top-[862px] left-[380px] w-[28px] h-[63px] transform -rotate-0 text-[#2C3E50] text-sm font-bold leading-14 uppercase">
        line name
      </p>
      <span className="absolute top-[855px] left-[451px] w-[166px] h-[28px] bg-[#F40009] rounded-md z-10"></span>
      <span className="absolute top-[855px] left-[451px] w-[978px] h-[28px] bg-[#2EC4B6] z-0"></span>
      <span className="absolute top-[855px] left-[877px] w-[166px] h-[28px] bg-[#CDD5E1] rounded-md"></span>
      <span className="absolute rounded-md top-[855px] left-[1043px] w-[103px] h-[28px] bg-[#F40009]"></span>
      <div className="absolute top-[107px] left-[1490px] w-[375px] h-[820px] bg-white shadow-md rounded-lg"></div>
      <span className="absolute top-[127px] left-[1508px] w-[9px] h-[9px] bg-[#ff9f1c] border border-white rounded-full"></span>
      <p className="absolute top-[123px] left-[1541px] w-[96px] h-[18px] text-[#2c3e50] text-left font-bold text-base leading-18 tracking-wide uppercase">
        CYCLE TIME
      </p>
      <p className="absolute top-[122px] left-[1661px] w-[79px] h-[19px] text-[#2e4a79] text-left font-light text-base leading-19">
        [seconds]
      </p>
      <span className="absolute top-[154px] left-[1494px] w-[371px] border border-[#efefef]"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-[190px] left-[1524px] w-[309px] h-[115px]"
      >
        <path
          fill="#FF9F1C"
          fillOpacity="1"
          d="M0,320L17.1,266.7C34.3,213,69,107,103,101.3C137.1,96,171,192,206,213.3C240,235,274,181,309,133.3C342.9,85,377,43,411,48C445.7,53,480,107,514,128C548.6,149,583,139,617,160C651.4,181,686,235,720,261.3C754.3,288,789,288,823,261.3C857.1,235,891,181,926,133.3C960,85,994,43,1029,64C1062.9,85,1097,171,1131,213.3C1165.7,256,1200,256,1234,213.3C1268.6,171,1303,85,1337,90.7C1371.4,96,1406,192,1423,240L1440,288L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
        ></path>
      </svg>
      <p className="absolute top-[315px] left-[1522px] w-[32px] h-[16px] text-black text-center text-sm leading-16 font-normal tracking-wide opacity-100">
        Avg.
      </p>
      <p className="absolute top-[312px] left-[1555px] w-[36px] h-[32px] text-black text-center font-bold leading-none opacity-100 text-xl">
        1.0
      </p>
      <span className="absolute top-[318px] left-[1629px] w-[8px] h-[5px] transform opacity-100">
        <IoIosArrowDown />
      </span>
      <p
        className="absolute top-[316px] left-[1649px] w-[26px] h-[14px] text-black text-center text-sm
       font-normal tracking-wide opacity-100"
      >
        Min.
      </p>
      <p className="absolute top-[314px] left-[1685px] w-[22px] h-[19px] text-black text-center font-bold opacity-100">
        0.5
      </p>
      <span className="absolute top-[318px] left-[1743px] w-[8px] h-[5px] transform opacity-100">
        <IoIosArrowUp />
      </span>
      <p
        className="absolute top-[316px] left-[1763px] w-[26px] h-[14px] text-black text-center text-sm
       font-normal tracking-wide opacity-100"
      >
        Max.
      </p>
      <p className="absolute top-[314px] left-[1799px] w-[22px] h-[19px] text-black text-center font-bold opacity-100">
        2.0
      </p>
      <span className="absolute top-[382px] left-[1494px] w-[371px] border border-[#efefef]"></span>
      <span className="absolute top-[401px] left-[1508px] w-[9px] h-[9px] bg-[#CA4E82] border border-white rounded-full"></span>
      <p className="absolute top-[394px] left-[1541px] w-[96px] h-[18px] text-[#2c3e50] text-left font-bold text-base leading-18 tracking-wide uppercase">
        speed
      </p>
      <p className="absolute top-[394px] left-[1661px] w-[79px] h-[19px] text-[#2e4a79] text-left font-light text-base leading-19">
        [pbh]
      </p>
      <span className="absolute top-[428px] left-[1494px] w-[371px] border border-[#efefef]"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-[464px] left-[1524px] w-[309px] h-[115px]"
      >
        <path
          fill="#CA4E82"
          fillOpacity="1"
          d="M0,320L17.1,266.7C34.3,213,69,107,103,101.3C137.1,96,171,192,206,213.3C240,235,274,181,309,133.3C342.9,85,377,43,411,48C445.7,53,480,107,514,128C548.6,149,583,139,617,160C651.4,181,686,235,720,261.3C754.3,288,789,288,823,261.3C857.1,235,891,181,926,133.3C960,85,994,43,1029,64C1062.9,85,1097,171,1131,213.3C1165.7,256,1200,256,1234,213.3C1268.6,171,1303,85,1337,90.7C1371.4,96,1406,192,1423,240L1440,288L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
        ></path>
      </svg>
      <p className="absolute top-[601px] left-[1522px] w-[32px] h-[16px] text-black text-center text-sm leading-16 font-normal tracking-wide opacity-100">
        Avg.
      </p>
      <p className="absolute top-[598px] left-[1555px] w-[36px] h-[32px] text-black text-center font-bold text-xl leading-none opacity-100">
        1.0
      </p>
      <span className="absolute top-[606px] left-[1629px] w-[8px] h-[5px] transform opacity-100">
        <IoIosArrowDown />
      </span>
      <p
        className="absolute top-[603px] left-[1649px] w-[26px] h-[14px] text-black text-center text-sm
       font-normal tracking-wide opacity-100"
      >
        Min.
      </p>
      <p className="absolute top-[600px] left-[1685px] w-[22px] h-[19px] text-black text-center text-l font-bold opacity-100">
        0.5
      </p>
      <span className="absolute top-[606px] left-[1743px] w-[8px] h-[5px] transform opacity-100">
        <IoIosArrowUp />
      </span>
      <p
        className="absolute top-[603px] left-[1763px] w-[26px] h-[14px] text-black text-center text-sm
       font-normal tracking-wide opacity-100"
      >
        Max.
      </p>
      <p className="absolute top-[600px] left-[1799px] w-[22px] h-[19px] text-black text-center font-bold opacity-100">
        2.0
      </p>

      <span className="absolute top-[656px] left-[1494px] w-[371px] border border-[#efefef]"></span>
      <span className="absolute top-[675px] left-[1508px] w-[9px] h-[9px] bg-[#00D1DE] border border-white rounded-full"></span>
      <p className="absolute top-[667px] left-[1541px] w-[96px] h-[18px] text-[#2c3e50] text-left font-bold text-base leading-18 tracking-wide uppercase">
        uptime
      </p>
      <p className="absolute top-[665px] left-[1661px] w-[79px] h-[19px] text-[#2e4a79] text-left font-light text-base leading-19">
        [bottle]
      </p>
      <span className="absolute top-[702px] left-[1494px] w-[371px] border border-[#efefef]"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-[738px] left-[1524px] w-[309px] h-[115px]"
      >
        <path
          fill="#2EC4B6"
          fillOpacity="1"
          d="M0,320L17.1,266.7C34.3,213,69,107,103,101.3C137.1,96,171,192,206,213.3C240,235,274,181,309,133.3C342.9,85,377,43,411,48C445.7,53,480,107,514,128C548.6,149,583,139,617,160C651.4,181,686,235,720,261.3C754.3,288,789,288,823,261.3C857.1,235,891,181,926,133.3C960,85,994,43,1029,64C1062.9,85,1097,171,1131,213.3C1165.7,256,1200,256,1234,213.3C1268.6,171,1303,85,1337,90.7C1371.4,96,1406,192,1423,240L1440,288L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
        ></path>
      </svg>
      <p className="absolute top-[867px] left-[1522px] w-[32px] h-[16px] text-black text-center text-sm leading-16 font-normal tracking-wide opacity-100">
        Avg.
      </p>
      <p className="absolute top-[863px] left-[1555px] w-[36px] h-[32px] text-black text-center font-bold text-xl leading-none opacity-100">
        1.0
      </p>
      <span className="absolute top-[869px] left-[1629px] w-[8px] h-[5px] transform opacity-100">
        <IoIosArrowDown />
      </span>
      <p
        className="absolute top-[867px] left-[1649px] w-[26px] h-[14px] text-black text-center text-sm
       font-normal tracking-wide opacity-100"
      >
        Min.
      </p>
      <p className="absolute top-[863px] left-[1685px] w-[22px] h-[19px] text-black text-center text-l font-bold opacity-100">
        0.5
      </p>
      <span className="absolute top-[870px] left-[1743px] w-[8px] h-[5px] transform opacity-100">
        <IoIosArrowUp />
      </span>
      <p
        className="absolute top-[867px] left-[1763px] w-[26px] h-[14px] text-black text-center text-sm
       font-normal tracking-wide opacity-100"
      >
        Max.
      </p>
      <p className="absolute top-[863px] left-[1799px] w-[22px] h-[19px] text-black text-center font-bold opacity-100">
        2.0
      </p>
    </>
  );
}

export default Factory;
