import { NavLink } from "react-router-dom";

const SideBar = () => {
    return ( 
        <aside className="bg-slate-500 rounded-lg w-60 p-3 ml-4">
        <ul>
          <li>
            <NavLink className={(navSideBarData) => (navSideBarData.isActive ? "block px-10 py-3 text-center bg-slate-400 rounded-lg text-slate-800" : "block px-10 py-3 text-center text-orange-400 font-extrabold text-lg  hover:text-white")} to="/profile/dashboard">داشبورد</NavLink>
          </li>
          <li>
            <NavLink className={(navSideBarData) => (navSideBarData.isActive ? "block px-10 py-3 text-center bg-slate-400 rounded-lg text-slate-800" : "block px-10 py-3 text-center text-orange-400 font-extrabold text-lg  hover:text-white")} to="/profile/downloads">دانلود</NavLink>
          </li>
        </ul>
      </aside>
     );
}
 
export default SideBar;