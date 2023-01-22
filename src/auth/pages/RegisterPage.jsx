import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {

  const navigate = useNavigate();

  const clickButton = () => {
    navigate('/dashboard')
  }

  return (
    <>
        <h1>
            Register Page
        </h1>
        <button class="btn btn-primary btn-lg" type="submit" onClick={clickButton}>Inicio</button>
    </>
  )
}
