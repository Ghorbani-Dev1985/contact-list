import { Link, useLocation } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";


const ContactDetail = () => {
  const location = useLocation();
return(
  <>
        <div className="w-full max-w-lg flex justify-end my-3">
          <Link to="/">
          <BiLogOutCircle className="text-3xl text-orange-600" />
          </Link>
        </div>
        <div className="w-full bg-white max-w-lg p-3 rounded-lg flex flex-col items-center">
            <h2 className="my-4 font-extrabold text-xl">جزییات کاربر <span className="text-green-500">{location.state.firstName} {location.state.lastName}</span> عزیز</h2>
            <div className="w-full flex justify-between border-b p-2 bg-slate-100 rounded-lg items-center mb-4">شغل : <span className="text-sky-600 font-bold text-base mr-2">{location.state.job}</span></div>
             <div className="w-full flex justify-between border-b p-2 bg-slate-100 rounded-lg items-center mb-4">شماره موبایل: <span className="text-sky-600 font-bold text-base mr-2">{location.state.phoneNumber}</span></div>
             <div className="w-full flex justify-between border-b p-2 bg-slate-100 rounded-lg items-center mb-4">تلفن ثابت: <span className="text-sky-600 font-bold text-base mr-2">{location.state.cellPhone}</span></div> 
             <div className="w-full flex justify-between border-b p-2 bg-slate-100 rounded-lg items-center mb-4">ایمیل: <span className="text-sky-600 font-bold text-base mr-2">{location.state.email}</span></div>
             <div className="w-full flex justify-between border-b p-2 bg-slate-100 rounded-lg items-center mb-4">آدرس کامل: <span className="text-sky-600 font-bold text-base mr-2">{location.state.address}</span></div>
        </div>
  </>
     );
}
 
export default ContactDetail;