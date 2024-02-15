import factoryIcon from "../assets/factoryIcon (1).svg";
import Dashboard from "../assets/Dashboard.svg";
import Machines from "../assets/machine.svg";
import Planning from "../assets/planning.svg";
import Reports from "../assets/reports.svg";
import Settings from "../assets/setting.svg";
import Logout from "../assets/logout.svg";
import CocaCola from "../assets/coca-cola-white.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SideBar() {
  const navigate = useNavigate();

  const [background, setBackground] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl.includes("/dashboard")) setBackground("dashboard");
    if (currentUrl.includes("/machines")) setBackground("machines");
    if (currentUrl.includes("/planning")) setBackground("planning");
    if (currentUrl.includes("/reports")) setBackground("reports");
    if (currentUrl.includes("/settings")) setBackground("settings");
  }, []);

  return (
    <div className="absolute top-0 left-0 w-[261px] h-screen bg-[#F40009] opacity-100">
      <img
        src={factoryIcon}
        alt="Logo"
        className="absolute top-[56px] left-[66px] w-[27px] h-[20px] bg-transparent bg-no-repeat bg-padding-box opacity-100"
      />
      <p className="absolute top-[50px] left-[119px] w-[59px] h-[32px] text-white text-left text-[26px] font-normal leading-[32px] opacity-100">
        MES
      </p>
      <button
        className={`absolute top-[163px] left-0 w-[243px] h-[45px] ${
          background === "dashboard" ? "bg-black bg-opacity-25" : ""
        } text-[#FFFFFF] rounded-tr-full rounded-br-full`}
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
      <img
        src={Dashboard}
        alt="Dashboard"
        className="absolute top-[174px] left-[45px] w-[24px] h-[24px] bg-transparent bg-no-repeat bg-padding-box opacity-100"
      />
      <button
        className={`absolute top-[245px] left-[px] w-[243px] h-[45px] text-[#FFFFFF] rounded-tr-full rounded-br-full ${
          background === "machines" ? "bg-black bg-opacity-25" : ""
        }`}
        onClick={() => navigate("/machines")}
      >
        Machines
      </button>
      <img
        src={Machines}
        alt="Machines"
        className="absolute top-[250px] left-[46px] w-[30px] h-[30px] bg-transparent bg-no-repeat bg-padding-box opacity-100"
      />
      <button
        className={`absolute top-[310px] left-[px] w-[243px] h-[45px] text-[#FFFFFF] rounded-tr-full rounded-br-full ${
          background === "planning" ? "bg-black bg-opacity-25" : ""
        }`}
        onClick={() => navigate("/planning")}
      >
        Planning
      </button>
      <img
        src={Planning}
        alt="Planning"
        className="absolute top-[313px] left-[41px] w-[33px] h-[33px] bg-transparent bg-no-repeat bg-padding-box opacity-100"
      />
      <button
        className={`absolute top-[380px] w-[243px] h-[45px] text-[#FFFFFF] rounded-tr-full rounded-br-full ${
          background === "reports" ? "bg-black bg-opacity-25" : ""
        }`}
        onClick={() => navigate("/reports")}
      >
        Reports
      </button>
      <img
        src={Reports}
        alt="Reports"
        className="absolute top-[385px] left-[46px] w-[22px] h-[28px] bg-transparent bg-no-repeat bg-padding-box opacity-100"
      />
      <button
        className={`absolute top-[590px] w-[243px] h-[45px] text-[#FFFFFF] rounded-tr-full rounded-br-full ${
          background === "settings" ? "bg-black bg-opacity-25" : ""
        } `}
        onClick={() => navigate("/settings")}
      >
        Settings
      </button>
      <img
        src={Settings}
        alt="Settings"
        className="absolute top-[597px] left-[41px] w-[30px] h-[30px] bg-transparent bg-no-repeat bg-padding-box opacity-100"
      />
      <button
        onClick={() => navigate("/")}
        className="absolute top-[670px] left-[88px] w-[59px] h-[19px] text-[#FFFFFF] rounded-tr-full rounded-br-full"
      >
        Logout
      </button>
      <img
        src={Logout}
        alt="Logout"
        className="absolute top-[668px] left-[43px] w-[31px] h-[31px] bg-transparent bg-no-repeat bg-padding-box opacity-100"
      />
      <img
        src={CocaCola}
        alt="CocaCola"
        className="absolute top-[776px] left-[0px] w-[262px] h-[151px] bg-transparent bg-no-repeat bg-padding-box opacity-100"
      />
    </div>
  );
}

export default SideBar;
