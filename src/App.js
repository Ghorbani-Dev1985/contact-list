import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Layout from "./Layout/Layout";
import routes from './routes';
import AddContact from './pages/AddContact';
import NotFound from './pages/NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from './Components/ContactList/ContactList';
import Swal from 'sweetalert2';
import ContactDetail from './Components/ContactDetail/ContactDetail';
import getContacts from './services/getContactsService';
import deleteContact from './services/deleteContactService';
import addContact from './services/addContactService';
import EditContact from './Components/EditContact/EditContact';
import updateContact from './services/updateContactService';

const App = () => {
 const [contacts , setContacts] = useState([]);
 let Navigate = useNavigate();
 const AddContactHandler = async (contact)=> {
  try {
   const {data} = await addContact(contact);
   setContacts([...contacts, data]);
   Navigate('/');
   toast.success( "کاربر جدید با موفقیت به لیست اضافه گردید");
  } catch (error) {
    toast.error( "خطا در برقراری ارتباط با سرور");
  }
}

const EditContactHandler = async (contact , id) => {
  try {
    await updateContact(id , contact);
   const {data} = await getContacts();
   setContacts(data);
   Navigate('/');
   toast.success( "ویرایش با موفقیت انجام شد");
  } catch (error) {
    toast.error( "خطا در برقراری ارتباط با سرور");
  }
}

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
    toast.error( "خطا در برقراری ارتباط با سرور حذف انجام نشد");
  }
 }


 useEffect(() => {
  const getContactsApi = async() => {
   const {data} = await getContacts();
   setContacts(data);
  }
  try {
    getContactsApi();
  } catch (error) {
    toast.error( "خطا در برقراری ارتباط با سرور");
  }
} , [contacts]);



  return ( 
    <>
    <ToastContainer 
    position="top-center"
    closeOnClick
    rtl={true}
    autoClose={3000}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"/>
    <Layout>
      <Routes>
        <Route path='/' element={ <ContactList contacts={contacts} onDelete={deleteContactHandler}/>}/>
        <Route path='/AddContact' element={<AddContact AddContactHandler={AddContactHandler} contacts={contacts} onDelete={deleteContactHandler} />} />
        <Route path='/user/:id' element={<ContactDetail />} />
        <Route path='/edit/:id' element={<EditContact editContactHandler={EditContactHandler} />} />
        <Route path='/*' element={<NotFound />} />
        </Routes>
    </Layout>
      </>
   );
}
 
export default App;

//! BrowserRouter move to index.js


