import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'

import Protected from '../Pages/Protected'
import Admin from '../Pages/Admin/Admin'
import Institude from '../Pages/Institude/Institude'
import Student from '../Pages/Students/Student'
import MainAdmin from '../Pages/Admin/MainAdmin'
import { Provider } from 'react-redux'
import Store from '../config/Redux/Store'
import Teachers from '../Pages/Teachers/Teachers'
export default function ARouter() {
  return (
    <div>
      <Provider store={Store}>
      <Router>
        <Routes>
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Institude/:id/*' element={<Institude/>} />
            {/* <Route path='/Institude/*' element={<Institude/>} /> */}
            <Route path='/MainAdmin/*' element={<MainAdmin/>} />
            <Route path='/Teachers/*' element={<Teachers/>} />

            

            <Route path='/*' element={<Protected Screen={Student}/>} />

        </Routes>
      </Router>
      </Provider>
    </div>
  )
}
