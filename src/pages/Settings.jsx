import Header from "./Header";
import SideBar from "./SideBar";

function Settings() {
  return (
    <>
      <Header />
      <SideBar />
      <p className="absolute top-[61px] left-[316px] w-[124px] h-[19px] text-[#003F5C] font-semibold text-base">
        Settings
      </p>
    </>
  );
}

export default Settings;
