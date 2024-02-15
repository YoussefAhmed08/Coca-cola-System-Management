import FactoryName from "./FactoryName";
import Header from "./Header";
import SideBar from "./SideBar";

function Dashboard() {
  return (
    <div className="bg-[#F4F7FE] h-screen w-screen">
      <Header />
      <SideBar />
      <p className="absolute top-[61px] left-[316px] w-[206px] h-[19px] text-left font-semibold text-base text-[#003F5C] capitalize">
        Dashboard / Production
      </p>
      <div className="absolute flex justify-around top-[55px] left-[1622px] w-[243px] h-[38px] bg-white shadow-md rounded-lg">
        <button className="absolute top-[10px] left-[20px] w-[79px] h-[15px] text-center text-base font-normal leading-5 tracking-wider text-gray-700 opacity-100 font-sans">
          SKU
        </button>
        <button className="absolute top-[2px] left-[120px] w-[120px] text-[#FFFF] h-[34px] bg-gradient-to-b from-red-600 to-red-600 shadow-md rounded-lg">
          Production
        </button>
      </div>
      <div className="overflow-y-auto overflow-x-hidden absolute top-[107px] left-[298px] w-[1567px] h-[760px] opacity-100 flex flex-wrap rounded-lg">
        <FactoryName />
        <FactoryName />
        <FactoryName />
        <FactoryName />
        <FactoryName />
        <FactoryName />
        <FactoryName />
        <FactoryName />
      </div>
    </div>
  );
}

export default Dashboard;
