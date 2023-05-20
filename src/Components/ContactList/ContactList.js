import { BiTrash } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
const ContactList = ({contacts , onDelete}) => {
    console.log(contacts.lenght);
    return ( 
        <>
             {contacts.lenght !== "" ?
                <>
                <div className="w-full flex flex-col">
                <div className="overflow-x-auto">
                  <div className="py-2 inline-block min-w-full ">
                    <div className="overflow-hidden rounded-lg">
                 <table className="table-auto">
                <thead className="bg-slate-800 text-white border-b">
                  <tr>
                  <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      تصویر
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      نام
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      نام خانوادگی
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      شغل
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      شماره موبایل
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      تلفن ثابت
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      ایمیل
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      آدرس
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      حذف
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => {
                        const {id, firstName , lastName , job , phoneNumber , cellPhone , email , address} = contact;
                    return(
                    <>
                        <tr key={id} className="bg-gray-100 border-b">
                        <td className="px-6 py-4 flex justify-center items-center text-sm font-medium text-gray-900 whitespace-nowrap border">
                        <BiUserCircle className="text-xl"/>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap border">
                        {firstName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  border">
                        {lastName}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  border">
                    {job}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  border">
                    {phoneNumber}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                    {cellPhone}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border">
                    {email}
                    </td>
                    <td className="text-sm text-gray-900 font-light whitespace-nowrap md:whitespace-normal px-6 py-4 border">
                    {address}
                    </td>
                    <td className="w-full flex justify-center items-center px-6 py-4">
                        <BiTrash onClick={() => onDelete(id)} className="text-rose-500 text-lg cursor-pointer"/>
                    </td>
                    </tr>
                    </>
                    )
                    })}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
               </>
             : 
             <section className="w-full flex justify-center items-center font-bold max-w-lg bg-white p-4 mb-4 rounded-lg">هیچ لیست تماسی ثبت نگردیده است.</section>
            }
            </>
     );
}
 
export default ContactList;