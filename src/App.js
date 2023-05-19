import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import routes from './routes';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import Blog from './Components/Blog/Blog';
import Profile from './pages/Profile';
import AboutUsPage from './pages/AboutUsPage';
import PostPage from './pages/PostPage';
import NotFound from './pages/NotFound';
import Dashboard from './Components/Dashboard/Dashboard';
import Downloads from './Components/Downloads/Downloads';

const App = () => {


  return ( 
    <Layout>
      <Routes>
      {/* {routes.map((route , index) => (
        <Route key={index} {...route} />
        ))} */}
        <Route path='/' element={<HomePage />}/>
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
   );
}
 
export default App;

//! BrowserRouter move to index.js


