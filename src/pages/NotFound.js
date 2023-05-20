import { Link } from "react-router-dom";
import a404Page from "../Assets/Images/404-Page.jpg";
const NotFound = () => {
    return ( 
     <div className="flex flex-col items-center"><h1 className="mb-4">صفحه ای با چنین مشخصات یافت نگردید.</h1>
      <img src={a404Page} alt="404" className="rounded-full my-3 w-2/3" />
      <Link to="/" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700">بازگشت به صفحه اصلی</Link>
     </div>
     );
}
 
export default NotFound;