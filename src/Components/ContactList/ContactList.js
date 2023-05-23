import { useEffect, useState } from "react";
import AddNewContactBtn from "../AddNewContactBtn/AddNewContactBtn";
import Contact from "./Contact/Contact";
import getContacts from "../../services/getContactsService";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import deleteContact from "../../services/deleteContactService";
import Swal from "sweetalert2";
const ContactList = (props) => {
  const [contacts , setContacts] = useState([]);
  const [allContacts , setAllContacts] = useState([]);
  const [searchTerm , setSearchTerm] = useState("");
  useEffect(() => {
    const getContactsApi = async() => {
     const {data} = await getContacts();
     setContacts(data);
     setAllContacts(data);
    }
    try {
        getContactsApi();
    } catch (error) {
      toast.error( "خطا در برقراری ارتباط با سرور");
    }
  } , [contacts]);

  const deleteContactHandler = async (id) => {
   
    try {
     await deleteContact(id)
    Swal.fire({
        title: 'آیا برای حذف مطمعن هستید؟',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'تایید',
        cancelButtonText: 'انصراف',
      }).then((result) => {
        if (result.isConfirmed) {
          const filterdContacts = contacts.filter(contact => contact.id !== id);
          setContacts(filterdContacts);
          Swal.fire({
            title: 'حذف با موفقت انجام شد',
             type: 'success',
             icon: 'success',
             timer: 2000,
             showCancelButton: false,
          showConfirmButton: false
          }
          )
        }
      })
    } catch (error) {
      toast.error( "خطا در برقراری ارتباط با سرور، حذف انجام نشد");
    }
   }

    if(contacts.length === 0)  { 
      return (
        <>
        <AddNewContactBtn />
       <Loading />
        </>
      )
    }
    const searchHandler = (e) => {
      setSearchTerm(e.target.value);
      const searchInput = e.target.value;
     if(searchInput !== ""){
      const filterdContacts = allContacts.filter((contact) => {
        return Object.values([contact.firstName , contact.lastName , contact.phoneNumber]).join(" ").toLowerCase().includes(searchInput.toLowerCase().trim());
       });
       setContacts(filterdContacts);
     }else{
      setContacts(allContacts);
     }
    };
    return ( 
          <>
          <AddNewContactBtn />
          <div className="w-full max-w-md p-2">
            <input onChange={searchHandler} type="text" className="" placeholder="جستجو (نام، نام خانوادگی، شماره موبایل)" name="search" />
          </div>
                <div className="overflow-x-auto max-w-xs md:max-w-full p-2">
                  <div className="py-2 inline-block">
                    <div className="overflow-hidden rounded-lg">
                 <table className="table-auto min-w-full">
                <thead className="bg-slate-800 text-white border-b">
                  <tr>
                  <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-2 py-4 text-center"
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
                      className="text-sm font-medium border border-slate-500 px-2 py-4 text-center"
                      >
                       جزییات
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-2 py-4 text-center"
                      >
                       ویرایش
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium border border-slate-500 px-2 py-4 text-center"
                      >
                      حذف
                    </th>
                  </tr>
                </thead>
                <tbody>
                    { contacts.map((contact) => {
                        return(<Contact key={contact.id} contact={contact} onDelete={deleteContactHandler}/>)
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