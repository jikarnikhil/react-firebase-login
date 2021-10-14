import React,{useState, useEffect} from 'react'
import './App.css';
import Login from './component/Login'
import { auth } from './component/Config'
import SignUp from './component/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
      setUser(user)
    })
  },[])

  const signOut=()=>{
        auth.signOut().then(()=>{
          setUser(null);
        })
      }

  return (
<div className="App">
    {/* <Router>
      <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
      </Switch>
    </Router> */}

{user === null?
  <Login />:
  <button onClick={signOut}><h1>LogOut</h1></button>
  }

    </div>
  );
}

export default App;












// const App = () => {
//   const [user, setUser] = useState(null)
//   useEffect(()=>{
//     auth.onAuthStateChanged(async (user)=>{
//       setUser(user)
//     })
//   },[])
  
//   const signOut=()=>{
//     auth.signOut().then(()=>{
//       setUser(null);
//     })
//   }
//   return (
//     <div>
//       {user === null?
//       <button onClick={signInWithGoogle}>Login</button> :
//       <button onClick={signOut}>LogOut</button>
//       }
      
      
//     </div>
