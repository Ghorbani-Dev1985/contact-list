import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";
// import Dashboard from "../Components/Dashboard/Dashboard";
// import Downloads from "../Components/Downloads/Downloads";

const Profile = (props) => {
  // const navigate = useNavigate();
  // navigate('/blogs')
  return (
    <>
      <h2 className="mb-4">به حساب کاربری خود خوش آمدید</h2>
      <div className="flex">
      <SideBar />
      {/* <Routes>
      <Route path="dashboard" element = {<Dashboard />} />
     <Route path="downloads" element =  {<Downloads />} />
      </Routes> */}
      <Outlet />
      </div>
    </>
  );
};

export default Profile;
