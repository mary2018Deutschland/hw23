import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';
function Profile() {
  const dispach = useDispatch()
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  const tokenData = token ? jwtDecode(token) : null;
  if (!tokenData) return <h1> Login into account</h1>
  
  function onClick() {
    dispach(logout())
    navigate('/login')
  }
  return (
    <>
      <h1>{tokenData.user.id}</h1>
      <button onClick={onClick}>logaut</button>
    </>
  );
}
export default Profile;
