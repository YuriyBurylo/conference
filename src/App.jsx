import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import Root from './components/Root/Root';
import HomePage from './components/HomePage/HomePage';
import Conferences from './components/Conferences/Conferences';
import Archives from './components/Archives/Archives';
import Requirements from './components/Requirements/Requirements';
import Payment from './components/Payment/Payment';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route  path="/" element={<Root />}>
    <Route index element={<HomePage />}/>
    <Route path="conferences" element={<Conferences />}/>
    <Route path="archives" element={<Archives />}/>
    <Route path="requirements" element={<Requirements />}/>
    <Route path="payment" element={<Payment />}/>
  </Route>
));

function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
