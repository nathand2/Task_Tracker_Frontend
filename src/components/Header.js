// rafce => arrow function that exports on bottom
// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useNavigate } from "react-router-dom";

// Able to see route we are currently on.
import { useLocation } from 'react-router-dom'  

const Header = ({ title, onAdd, setShowAddTask, showAdd, loggedIn, setTasks, setLoggedIn }) => {
    let navigate = useNavigate(); 
    const routeLogin = () =>{ 
      let path = `/login`; 
      navigate(path);
    }
    const routeHome = () =>{ 
        let path = `/`; 
        navigate(path);
    }
    const routeLogOut = () =>{
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('userid');
        sessionStorage.removeItem('sessionid');
        setLoggedIn(false);
        setTasks([]);
        setShowAddTask(false);
        let path = `/`; 
        navigate(path);
      }
  

    // See current path
     const location = useLocation()

    return (
        <header className='header'>
            <h1 >{title}</h1>
            {
                // && Short hand ternary operator without else.
                loggedIn && <>{location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd }/>}</>
            }
            {
                
                location.pathname === '/' && <>{
                    loggedIn ? <Button color='red' text='Logout' onClick={routeLogOut}/> : <Button color='green' text='Login' onClick={routeLogin}/>
                }</>
            }
            {
                
                (location.pathname === '/login' || location.pathname === '/create') && <Button color='blue' text="Home"  onClick={routeHome} />
            }
        </header>
    )
}
// or
// const Header = (props) => {
//     return (
//       <header>
//           <h1>{props.title}</h1>
//       </header>
//     )
//   }

// Default Values
Header.defaultProps = {
    title: "Task Tracker",
}

// A way of type safing. Still renders though.
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS.
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header