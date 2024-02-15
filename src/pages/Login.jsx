import factoryIcon from "../assets/factoryIcon.svg";
import platform from "../assets/platform.svg";
import logo from "../assets/Coca-Cola-Logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" overflow-hidden relative top-0 left-0 w-screen h-screen bg-gradient-to-br from-red-600 to-red-600">
      <div className="absolute top-0 left-[1406px] w-[514px] h-[1030px] bg-white"></div>
      <img
        src={factoryIcon}
        alt="Logo"
        className="absolute top-[240px] left-[1590px] w-[40px] h-[30px]"
      />
      <span className="absolute top-[225px] left-[1650px] w-[102px] h-[47px] text-left text-4xl font-normal leading-[59px] text-red-700 opacity-100">
        MES
      </span>
      <img
        src={platform}
        alt="platform"
        className="absolute top-[60px] left-[197px] w-[817px] h-[817px] bg-transparent bg-platform bg-no-repeat"
      />
      <input
        type="email"
        className="absolute top-[505px] left-[1524px] w-[300px] h-[60px] bg-white border border-red-600 rounded-[35px] px-14"
        placeholder="EMAIL"
      />
      <input
        type="password"
        className="absolute top-[590px] left-[1524px] w-[300px] h-[60px] bg-white border border-gray-300 focus:border-red-600 rounded-[35px] px-14"
        placeholder="PASSWORD"
      />
      <i className="fa-solid fa-envelope absolute top-[530px] left-[1548px] w-[18px] h-[13px]"></i>
      <i className="fa-solid fa-lock absolute top-[613px] left-[1548px] w-[18px] h-[13px]"></i>
      <Link
        to="/dashboard"
        className="absolute top-[685px] left-[1524px] w-[300px] h-[60px] bg-red-600 border border-red-600 rounded-[35px] opacity-100 text-white text-center font-bold text-lg leading-[22px] tracking-wider"
      >
        <span className="absolute top-[16px] left-[115px]">LOGIN</span>
      </Link>
      <img
        src={logo}
        alt="Coca cola logo"
        className="absolute top-[840px] left-[1572px] w-[200px] h-[65px] bg-transparent bg-no-repeat bg-cover"
      />
    </div>
  );
}

export default Login;
