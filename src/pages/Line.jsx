import Header from "./Header";
import SideBar from "./SideBar";
import Product from "../assets/product.svg";
import Pereformance from "../assets/pereformance.svg";
import Energy from "../assets/energy.svg";
import Activity from "../assets/active.svg";
import DoughnutChart from "./DounutChart";
import LineChart from "./LineChart";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Line() {
  return (
    <>
      <Header />
      <SideBar />
      <p className="absolute top-[61px] left-[316px] w-[206px] h-[19px] text-left font-semibold text-base text-[#003F5C] capitalize">
        Factory Name / Line Name
      </p>
      <div className="absolute bg-white shadow-md rounded-lg w-[282px] h-[212px] opacity-100 px-4 py-8 top-[107px] left-[316px]"></div>
      <img
        src={Product}
        alt="product"
        className="absolute top-[120px] left-[337px] w-[24px] h-[24px]"
      />
      <span className="absolute top-[120px] left-[371px] w-[126px] h-[18px]">
        Total Production
      </span>
      <span className="border border-[#EFEFEF] absolute top-[155px] left-[318px] w-[277px] h-0"></span>
      <p className="absolute top-[180px] left-[338px] text-left text-black font-medium text-2xl tracking-tight w-[93px] h-[29px]">
        5,000 <span className="text-sm">bph</span>
      </p>
      <p className="absolute top-[212px] left-[338px] w-[100px] h-[13px] text-[#8D9192] text-xs">
        Production /h
      </p>
      <p className="absolute top-[180px] left-[465px] text-left text-black font-medium text-2xl tracking-tight w-[93px] h-[29px]">
        7,000 <span className="text-xs">KM</span>
      </p>
      <p className="absolute text-xs top-[212px] left-[465px] w-[150px] h-[8px] text-[#8D9192]">
        Actual Production
      </p>
      <span className="absolute top-[271px] left-[337px] w-[168px] h-[8px] bg-[#B2BEC39C] rounded-full"></span>
      <span className="absolute top-[271px] left-[337px] w-[109px] h-[8px] bg-[#FF5400] rounded-full"></span>
      <p className="absolute top-[260px] left-[518px] text-left text-black font-medium text-2xl tracking-tight w-[85px] h-[30px]">
        75%
      </p>
      <p className="absolute text-xs top-[281px] left-[337px] w-[150px] h-[13px] text-[#8D9192]">
        Production Yield
      </p>
      <div className="absolute top-[107px] left-[628px] w-[516px] h-[212px] bg-white shadow-md rounded-lg"></div>
      <img
        src={Pereformance}
        alt="pereformance"
        className="absolute top-[120px] left-[647px] w-[24px] h-[24px]"
      />
      <p className="absolute top-[120px] left-[681px] w-[203px] h-[18px] text-black text-base font-medium leading-18 tracking-tighter">
        Performance Indicator KPI
      </p>
      <span className="absolute top-[155px] left-[632px] w-[502px] border border-gray-200 opacity-100"></span>
      <div className="w-16 h-16 flex gap-10 absolute top-[189px] left-[690px]">
        <DoughnutChart color="#08415C" />
      </div>
      <p className="absolute top-[208px] left-[698px] w-[48px] h-[30px] text-black text-serif font-bold text-center opacity-100">
        76%
      </p>
      <p className="absolute top-[278px] left-[714px] w-[36px] h-[19px] text-black text-base font-medium opacity-100">
        OEE
      </p>
      <span className="absolute top-[191px] left-[841px] w-[200px] h-[8px] bg-opacity-25 bg-[#B2BEC39C] rounded-lg"></span>
      <span className="absolute top-[191px] left-[841px] w-[160px] h-[8px] bg-opacity-100 bg-[#FF5400] rounded-lg"></span>
      <p className="absolute top-[183px] left-[1052px] w-[58px] h-[30px] font-bold text-black">
        80%
      </p>
      <p className="absolute top-[201px] left-[841px] w-[51px] h-[13px] text-xs font-normal leading-13 text-[#2C3E50]">
        Avalability
      </p>
      <span className="absolute top-[230px] left-[841px] w-[200px] h-[8px] bg-opacity-25 bg-[#B2BEC39C] rounded-lg"></span>
      <span className="absolute top-[230px] left-[841px] w-[65px] h-[8px] bg-opacity-100 bg-[#FF9F1C] rounded-lg"></span>
      <p className="absolute top-[222px] left-[1052px] w-[58px] h-[30px] font-bold text-black">
        30%
      </p>
      <p className="absolute top-[240px] left-[841px] w-[51px] h-[13px] text-xs font-normal leading-13 text-[#2C3E50]">
        Preformance
      </p>
      <span className="absolute top-[269px] left-[841px] w-[200px] h-[8px] bg-opacity-25 bg-[#B2BEC39C] rounded-lg"></span>
      <span className="absolute top-[269px] left-[841px] w-[130px] h-[8px] bg-opacity-100 bg-[#FF5400] rounded-lg"></span>
      <p className="absolute top-[261px] left-[1052px] w-[58px] h-[30px] font-bold text-black">
        60%
      </p>
      <p className="absolute top-[279px] left-[841px] w-[51px] h-[13px] text-xs font-normal leading-13 text-[#2C3E50]">
        Quality
      </p>
      <div className="absolute top-[107px] left-[1174px] w-[282px] h-[212px] bg-white shadow-md rounded-lg"></div>
      <img
        src={Energy}
        alt="energy"
        className="absolute top-[120px] left-[1192px] w-[24px] h-[24px]"
      />
      <p className="absolute top-[120px] left-[1226px] w-[76px] h-[18px] text-black text-base font-medium">
        Power KPI
      </p>
      <span className="absolute top-[155px] left-[1177px] w-[276px] border border-[#EFEFEF]"></span>
      <p className="absolute top-[180px] left-[1197px] text-left text-black font-medium text-2xl tracking-tight w-[99px] h-[29px]">
        5,000 <span className="text-sm">KWH</span>
      </p>
      <p className="absolute top-[212px] left-[1197px] w-[100px] h-[13px] text-xs text-[#8D9192]">
        Energy Used
      </p>
      <p className="absolute top-[180px] left-[1334px] text-left text-black font-medium text-2xl tracking-tight w-[99px] h-[29px]">
        7,000
      </p>
      <p className="absolute top-[212px] left-[1334px] w-[100px] h-[13px] text-xs text-[#8D9192]">
        Power factor
      </p>
      <p className="absolute top-[245px] left-[1197px] text-left text-black font-medium text-2xl tracking-tight w-[99px] h-[29px]">
        5,000 <span className="text-sm">KWH</span>
      </p>
      <p className="absolute top-[277px] left-[1197px] w-[100px] h-[13px] text-xs text-[#8D9192]">
        Energy Used
      </p>
      <div className="absolute top-[353px] left-[318px] w-[1138px] h-[394px] bg-white shadow-md rounded-lg"></div>
      <img
        src={Activity}
        alt="activity"
        className="absolute top-[367px] left-[358px] w-[22px] h-[22px]"
      />
      <p className="absolute top-[368px] left-[392px] w-[120px] h-[18px] text-left font-medium text-base leading-18 text-black">
        Current Activity
      </p>
      <p className="absolute top-[366px] left-[1051px] w-[45px] h-[48px] text-2xl font-bold text-gray-700">
        OEE
      </p>
      <span className="absolute top-[401px] left-[343px] w-[1125px] border-t border-[#EFEFEF]"></span>
      <span className="absolute top-[399px] left-[1044px] w-[63px] border-4 border-[#F40009]"></span>
      <p className="absolute top-[366px] left-[1176px] w-[91px] h-[24px] text-base font-bold leading-6 text-[#2C3E50]">
        MTBF[h]
      </p>
      <p className="absolute top-[366px] left-[1327px] w-[91px] h-[24px] text-base font-bold leading-6 text-[#2C3E50]">
        UPTIME
      </p>
      <div className="absolute top-[230px] left-[360px] w-[1050px] h-[500px]">
        <LineChart />
      </div>
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
          fill="#FF5400"
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

export default Line;
