import { useNavigate } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="d-flex flex-nowrap">  
        <SideBar/>
        <h1>Home page</h1>
        {/* <button class="btn btn-primary btn-lg" type="submit" onClick={() => {navigate('/')}}>Inicio</button> */}
    </div>
  )
}
