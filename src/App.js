import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/NavBar/nav";
import Profile from "./components/profile/profile";
import Comunication from "./components/communication/communication";
import DialogsEgor from "./components/communication/dialogs/egor/dialogsEgor";
import DialogsIluha from "./components/communication/dialogs/Iluha/dialogsIluha";
import DialogsDimon from "./components/communication/dialogs/dimon/dialogsDimon";
import { Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Nav/>
        <div className='appWrapperContent'>
          <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/communication" element={<Comunication/>}/>
            <Route path="/message/Egor" element={<DialogsEgor/>}/>
            <Route path="/message/Iluha" element={<DialogsIluha/>}/>
            <Route path="/message/Dimon" element={<DialogsDimon/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
