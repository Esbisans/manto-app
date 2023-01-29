import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ProductPage } from "../pages/ProductPage"
import { DatosGenerales } from "../pages/DatosGenerales"

export const DashboardRoutes = () => {
  return (
    
    <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/new-project" element={<DatosGenerales />} />
        <Route path="/*" element={<Navigate to="/dashboard/home" />} />
    </Routes>

  )
}
