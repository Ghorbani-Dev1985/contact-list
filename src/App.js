import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AddContact from "./pages/AddContact";
import NotFound from "./pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactList from "./Components/ContactList/ContactList";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
import getContacts from "./services/getContactsService";
import EditContact from "./Components/EditContact/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContactsApi = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      getContactsApi();
    } catch (error) {
      toast.error("خطا در برقراری ارتباط با سرور");
    }
  }, [contacts]);

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
        theme="colored"
      />
      <Layout>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/AddContact" element={<AddContact />} />
          <Route path="/user/:id" element={<ContactDetail />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

//! BrowserRouter move to index.js
