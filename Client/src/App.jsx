
import {Routes , Route} from 'react-router' 
import DisplayScreen from './Components/Display/Display'
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import axios from 'axios'
import Account from './Components/Account/Account'

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  return (
    <>
    <Routes>
    <Route path='/' element={<DisplayScreen/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/account' element={<Account/>}/>

    </Routes>
    </>
  )
}

export default App
