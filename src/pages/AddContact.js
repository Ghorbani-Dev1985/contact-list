import { useState } from "react";
import ContactList from "../Components/ContactList/ContactList";
import { toast } from "react-toastify";
import { BiBookAdd } from "react-icons/bi";
import { BiListOl } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import addContact from "../services/addContactService";
const AddContact = () => {
  let Navigate = useNavigate();
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    job: "",
    phoneNumber: "",
    cellPhone: "",
    email: "",
    address: "",
  });
  const AddContactChangeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if(!contact.firstName) toast.error( "لطفا نام را وارد نمایید");
    if(!contact.lastName) toast.error( "لطفا نام خانوادگی را وارد نمایید");
    if(!contact.phoneNumber) toast.error( "لطفا شماره موبایل را وارد نمایید");
    else {   
      try {
           await addContact(contact);
           Navigate('/');
           toast.success( "کاربر جدید با موفقیت به لیست اضافه گردید");
          } catch (error) {
            toast.error( "خطا در برقراری ارتباط با سرور");
          }
      setContact({
      firstName: "",
      lastName: "",
      job: "",
      phoneNumber: "",
      cellPhone: "",
      email: "",
      address: "",
    })
    }
  };
   

  return (
    <>
      <section className="w-full max-w-lg flex justify-between items-center">
      <div className="w-full flex items-center max-w-lg mb-4 ">
        <BiBookAdd className="ml-2 text-lg text-orange-500"/>
       <h1 className="font-bold text-lg bg-slate-300 px-3 py-1 rounded-lg">  افزودن</h1>
      </div>
        <div className="w-full flex justify-end items-center">
          <BiListOl className="ml-2 text-3xl text-orange-500"/>
          <Link to="/" className="flex justify-center items-center">
          <h1 className="font-bold text-lg bg-slate-300 px-3 py-1 rounded-lg">  مشاهده لیست</h1>
          </Link>
        </div>
      </section>

        <form onSubmit={submitForm} className="w-full flex max-w-lg bg-white p-4 mb-4 rounded-lg flex-col">
        <label className="my-2" htmlFor="firstName">
           نام <span className="text-rose-500">*</span>
         </label>
         <input
           onChange={AddContactChangeHandler}
           type="text"
           name="firstName"
           id="firstName"
           value={contact.firstName}
           placeholder="لطفا نام را وارد نمایید."
         />
         <label className="my-2" htmlFor="lastName">
           نام خانوادگی <span className="text-rose-500">*</span>
         </label>
         <input
           onChange={AddContactChangeHandler}
           type="text"
           name="lastName"
           id="lastName"
           value={contact.lastName}
           placeholder="لطفا نام خانوادگی را وارد نمایید."
         />
         <label className="my-2" htmlFor="job">
           شغل{" "}
         </label>
         <input
           onChange={AddContactChangeHandler}
           type="text"
           name="job"
           id="job"
           value={contact.job}
           placeholder="لطفا شغل را وارد نمایید."
         />
         <label className="my-2" htmlFor="phoneNumber">
           شماره موبایل <span className="text-rose-500">*</span>
         </label>
         <input
           onChange={AddContactChangeHandler}
           type="text"
           name="phoneNumber"
           id="phoneNumber"
           value={contact.phoneNumber}
           placeholder="لطفا شماره موبایل را وارد نمایید."
         />
         <label className="my-2" htmlFor="cellPhone">
           تلفن ثابت
         </label>
         <input
           onChange={AddContactChangeHandler}
           type="text"
           name="cellPhone"
           id="cellPhone"
           value={contact.cellPhone}
           placeholder="لطفا تلفن ثابت را وارد نمایید."
         />
         <label className="my-2" htmlFor="email">
           ایمیل{" "}
         </label>
         <input
           onChange={AddContactChangeHandler}
           type="text"
           name="email"
           id="email"
           value={contact.email}
           placeholder="لطفا ایمیل را وارد نمایید."
         />
         <label className="my-2" htmlFor="address">
           آدرس{" "}
         </label>
         <textarea
         onChange={AddContactChangeHandler}
           name="address"
           id="address"
           value={contact.address}
           placeholder="لطفا آدرس را وارد نمایید."
         ></textarea>
         <button type="submit" className="w-full">افزودن</button>
        </form>
   
    </>
  );
};

export default AddContact;
