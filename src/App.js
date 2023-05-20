import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import routes from './routes';
import AddContact from './pages/AddContact';
import BlogPage from './pages/BlogPage';
import Blog from './Components/Blog/Blog';
import Profile from './pages/Profile';
import AboutUsPage from './pages/AboutUsPage';
import PostPage from './pages/PostPage';
import NotFound from './pages/NotFound';
import Dashboard from './Components/Dashboard/Dashboard';
import Downloads from './Components/Downloads/Downloads';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
 const [contacts , setContacts] = useState([]);
 const AddContactHandler = (contact)=> {
  setContacts([...contacts, {id: Math.ceil(Math.random() * 10000000000) , ...contact}]);

  console.log(setContacts);
}
 const deleteContactHandler = (id) => {
  console.log("click" , id);
  const filterdContacts = contacts.filter(contact => contact.id !== id);
  setContacts(filterdContacts);
 }
  return ( 
    <>
    <ToastContainer 
    position="top-center"
    closeOnClick
    rtl={true}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"/>
    <Layout>
      <Routes>
      {/* {routes.map((route , index) => (
        <Route key={index} {...route} />
      ))} */}
        <Route path='/' element={<AddContact AddContactHandler={AddContactHandler} contacts={contacts} onDelete= {deleteContactHandler}/>}/>
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/profile/*' element={<Profile />} >
          <Route path="dashboard" element = {<Dashboard />} />
          <Route path="downloads" element =  {<Downloads />} />
          </Route>
        <Route path='/aboutUs' element={<AboutUsPage />} />
        <Route path='/post/:id([0-9]+)?' element={<PostPage />} />
        <Route path='/*' element={<NotFound />} />
        </Routes>
    </Layout>
      </>
   );
}
 
export default App;

//! BrowserRouter move to index.js


