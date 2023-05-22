import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import routes from './routes';
import AddContact from './pages/AddContact';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from './Components/ContactList/ContactList';
import Swal from 'sweetalert2';
import ContactDetail from './Components/ContactDetail/ContactDetail';

const App = () => {
 const [contacts , setContacts] = useState([]);
 const AddContactHandler = (contact)=> {
  setContacts([...contacts, {id: new Date().getTime() , ...contact}]);
}
 const deleteContactHandler = (id) => {

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
 }

 useEffect(() => {
 const savedContactLists = JSON.parse(localStorage.getItem('contactsList'));
 if(savedContactLists) setContacts(savedContactLists);
 } , []);

 useEffect(() => {
  if(contacts.length){
    localStorage.setItem('contactsList', JSON.stringify(contacts));
  }
} , [contacts]);



  return ( 
    <>
    <ToastContainer 
    position="top-center"
    closeOnClick
    rtl={true}
    autoClose={2000}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"/>
    <Layout>
      <Routes>
        <Route path='/' element={ <ContactList contacts={contacts} onDelete={deleteContactHandler}/>}/>
        <Route path='/AddContact' element={<AddContact AddContactHandler={AddContactHandler} contacts={contacts} onDelete={deleteContactHandler} />} />
        <Route path='/user/:id' element={<ContactDetail />} />
        <Route path='/*' element={<NotFound />} />
        </Routes>
    </Layout>
      </>
   );
}
 
export default App;

//! BrowserRouter move to index.js


