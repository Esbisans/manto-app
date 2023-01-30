import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"
import App from "../App"
// import { App } from "../App"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>
        <Route path="/dashboard/*" element={<DashboardRoutes/>}/>
        <Route path="/generarPdf/*" element={<DashboardRoutes/>}/>

        <Route path="/*" element={<App/>}/>
    </Routes>
  )
}
