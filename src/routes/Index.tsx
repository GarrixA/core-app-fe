import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import RwanaDataForm from "../components/forms/RwanaDataForm";
import KenyaDataForm from "../components/forms/KenyaDataForm";
import TanzaniaDataForm from "../components/forms/TanzaniaDataForm";
import NigeriaDataForm from "../components/forms/NigeriaDataForm";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/rwanda" element={<RwanaDataForm />} />
        <Route path="/dashboard/kenya" element={<KenyaDataForm />} />
        <Route path="/dashboard/tanzania" element={<TanzaniaDataForm />} />
        <Route path="/dashboard/nigeria" element={<NigeriaDataForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
