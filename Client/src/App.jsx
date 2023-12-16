
import {Routes , Route} from 'react-router' 
import DisplayScreen from './Components/Display/Display'
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import axios from 'axios'
import Account from './Components/Account/Account'
import AddFile from './Components/AddFile/AddFile'
import Signout from './Components/Account/SignOut'

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  return (
    <>
    <Routes>
    <Route path='/' element={<DisplayScreen/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/account/addfile' element={<AddFile/>}/>
    <Route path='/account/signout' element={<Signout/>}/>


    </Routes>
    </>
  )
}

export default App
