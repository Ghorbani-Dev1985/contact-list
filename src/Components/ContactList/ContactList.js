import AddNewContactBtn from "../AddNewContactBtn/AddNewContactBtn";
import Contact from "./Contact/Contact";
const ContactList = ({contacts , onDelete}) => {
 
    if(contacts.length === 0)  { 
      return (
        <>
        <AddNewContactBtn />
       <section className="w-full flex justify-center items-center font-bold max-w-lg bg-white p-4 mb-4 rounded-lg">هیچ لیست تماسی ثبت نگردیده است.</section>
        </>
      )
    }
    return ( 
          <>
          <AddNewContactBtn />
              
                <div className="overflow-x-auto max-w-xs md:max-w-full p-2">
                  <div className="py-2 inline-block">
                    <div className="overflow-hidden rounded-lg">
                 <table className="table-auto min-w-full">
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
                      شماره موبایل
                    </th>
                     <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                      مشاهده جزییات
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-6 py-4 text-center"
                      >
                       ویرایش
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
                        return(<Contact contact={contact} onDelete={onDelete}/>)
                  })}
                </tbody>
              </table>
              </div>
            </div>
          </div>
     </>
     );
    }
 
export default ContactList;