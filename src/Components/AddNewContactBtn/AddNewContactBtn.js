import { Link } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";
const AddNewContactBtn = () => {
    return ( 
        <Link to="/AddContact" className="w-full flex items-center cursor-pointer max-w-lg mb-4 ">
         <BiBookAdd className="ml-2 text-lg text-orange-500"/>
        <h1 className="font-bold text-lg bg-slate-300 px-3 py-1 rounded-lg"> افزودن به لیست تماس</h1>
       </Link>
     );
}
 
export default AddNewContactBtn;