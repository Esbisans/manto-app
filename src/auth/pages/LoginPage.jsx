import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

export const LoginPage = () => {

  const navigate = useNavigate();

  const clickButton = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
    navigate('/dashboard')
  }

  return (
    <>
        <h1>
            Login Page
        </h1>
        <button class="btn btn-primary btn-lg" type="submit" onClick={clickButton}>Inicio</button>
    </>
  )
}
