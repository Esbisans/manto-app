import { Navigate, Route, Routes } from "react-router-dom"
import {HomePage} from "../pages/HomePage"
import { ProductPage } from "../pages/ProductPage"
import DatosPDF from "../pages/DatosPDF"

export const DashboardRoutes = () => {
  return (
    
    <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/generarPdf" element={<DatosPDF />} />
        <Route path="/*" element={<Navigate to="/dashboard/home" />} />
    </Routes>

  )
}
